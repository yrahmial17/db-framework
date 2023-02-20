local ActiveMembers = {}; -- all the members that active at the queue.
local WaitingMembers = {} -- waiting in the queue.
local ConnectingMembers = {} -- passed the queue.
local Member = {}; -- self.
local inQueue = false;
local allowed = false;
local QueueSettings = {
    ["maxClients"] = 64;
    ["Token"] = "your discord bot token";
    ["Guild"] = "your server guild id";
    ["whitelist"] = "1067600020599218217";
};
local discordApi = "https://discordapp.com/api/guilds/"..QueueSettings["Guild"].."/members/%s";

local Roles = {
    {"1067600020670529600", 10000, "Management"};
    {"1067600020636971144", 10000, "Developer"};
    {"1067600020670529598", 1000, "Server Manager"};
    {"1068287643143639060", 500, "Admin"};
    {"1053307670301507655", 100, "Content Creator"};
    {"1052758434791047200", 60, "Nitro Booster"};
    {"1067600020599218217", 0, "Whitelisted"};
}

local Card = {
	["type"]= "AdaptiveCard",
	-- ["minHeight"] = "100px",
	["body"] = {{}},
}
WaitingCard = function(text)
    return({
        ["type"] = "TextBlock",
        ["wrap"] = true,
        ["spacing"] = "medium",
        ["text"] = text;
        ["horizontalAlignment"] = "left",
        ["height"] = "stretch",
        ["fontType"] = "default",
        ["size"] = "Medium",
        ["isSubtle"] = true,
        -- ["color"] = "attention",
        ["weight"] = "Bolder",    
    })
end

BannedCard = function(text)
    return ({
        ["type"] = "TextBlock",
        ["wrap"] = true,
        ["spacing"] = "Medium",
        ["text"] = text,
        ["horizontalAlignment"] = "Left",
        ["height"] = "stretch",
        ["fontType"] = "Default",
        ["size"] = "Medium",
        ["color"] = "attention",
        ["weight"] = "Bolder",
    })
end

notAllowed = function(src)
    return ({
        ["type"] = "TextBlock",
        ["wrap"] = true,
        ["spacing"] = "Medium",
        ["text"] = "Hey "..src..", ur not allowed to join this server.",
        ["horizontalAlignment"] = "Center",
        ["height"] = "stretch",
        ["fontType"] = "Default",
        ["size"] = "Medium",
        ["color"] = "attention",
        ["weight"] = "Bolder",
    })
end

AddEventHandler("playerConnecting", function(name, kick, deferrals)
    local src = source;
    AddLog(src, "player-login", name.." connecting to db-framework");
    local steam = GetSteamID(src);
    local discord = GetDiscordID(src);
    local dickhead = "."
    deferrals["defer"]()
    if not steam then
        kick("Steam Not Found, bitch.");
        CancelEvent();
        return;
    elseif not discord then
        kick("Discord not found, fuck off.");
        print("Shitty discord")
        CancelEvent();
        return;
    end
    -- for i=1, 3 do
    --     Card["body"] = {};
    --     Card["body"][#Card["body"] + 1] = WaitingCard("Hey "..name..", please wait while we checking ur information"..dickhead)
    --     dickhead = dickhead.."."
    --     Wait(1000)
    -- end
    local isBanned = DBCore["SQL"]["execute"]("select * from character_bans where steam_id = ?", {steam})
    if isBanned[1] ~= nil then
        local reason = isBanned[1]["reason"]
        if reason == "" then
            reason = "Wearing Lacoste and shit(bitch yeah)"
        end
        Card["body"] = {}
        Card["body"][#Card["body"] + 1] = BannedCard("You have been permanently banned.\nReason: " .. string.upper(reason))
        deferrals["presentCard"](Card)    
        print("^1[BANNED PLAYER] Player " .. name .. " tried to join, but was banned for: " .. reason .. "^0");
        local fuckoff = "**[BANNED PLAYER] Player " .. name .. " tried to join, but was banned for: " .. reason.."**"
        AddLog(src, "player-left", fuckoff)
        CancelEvent()
        return;
    end

    for i=1, 3 do
        Card["body"] = {};
        Card["body"][#Card["body"] + 1] = WaitingCard("Hey "..name..", please wait while we checking ur discord information"..dickhead)
        deferrals["presentCard"](Card)
        dickhead = dickhead.."."
        Wait(1000)
    end
    Wait(500)
    Card["body"] = {}
    Card["body"][#Card["body"] + 1] = WaitingCard("Welcome to Exotic Whitelist!")
    deferrals["presentCard"](Card)
    if Member[src] == nil then
        Member[src] = {
            ["source"] = src;
            ["time"] = 0;
            ["points"] = 0;
            ["steam"] = steam;
            ["place"] = 1;
            ["discord"] = {
                ["name"] = "";
                ["avatar"] = "";
                ["role"] = "Member";
            }
        }
    end
    if HasRole(src, QueueSettings["whitelist"]) then
        Connecting(src, deferrals)
        local LogInfo =  name.. " is loading into the server"
        AddLog(src, "player-login", LogInfo)
    else
        Card["body"] = {};
        print(name, "want to connect the server but is not allowed")
        Card["body"][#Card["body"]+1] = notAllowed(name);
        deferrals["presentCard"](Card)
    end
end)

InitQueue = function(src)
    local steam = GetSteamID(src);
    local points = GetDiscord(src)
    WaitingMembers[#WaitingMembers + 1] = steam;
    local data = {
        ["discord"] = GetDiscordID(src);
        ["source"] = src;
        ["steam"] = steam;
        ["p"] = points;
    }
    if AddMember(data) then
        return true
    end
    return false
end

Connecting = function(src, deferrals)
    inQueue = true;
    local steam = GetSteamID(src);
    local spaced = false;
    local name = GetPlayerName(src)
    if GetNumPlayerIndices() < QueueSettings["maxClients"] then
        inQueue = false;
        RemoveMember(steam);
        deferrals["done"]();
        return true;
    else
        if InitQueue(src) then
            print("^1[DB-QUEUE]: ^7"..name.." Joined the queue place ["..GetPlace(src).."/"..(#WaitingMembers).."]")
            repeat
                Wait(1000)
                Card["body"] = {}
                local places = 0; -- 1
                for k,v in next, ConnectingMembers do
                    if v == steam then
                        spaced = true;
                        print("Passed")
                        break
                    end
                end
                for k,v in next, ActiveMembers do
                    if v["steam"] == steam and (GetPlayerPing(v["source"]) == 0) then
                        RemoveMember(steam)
                        deferrals.done("Accident, Try Again")
                        Card["body"] = {}
                        return false
                    end
                end
                Card["body"][#Card["body"]+1] = CreateTitle()
                for k,v in next, ActiveMembers do
                    places = places + 1
                    local me = src == v["source"] and true or false
                    Card["body"][#Card["body"]+1] = MemberCard(v["source"],places, me)
                end
                Card["body"][#Card["body"]+1] = EndCard(#ActiveMembers)
                Member[src]["time"] = Member[src]["time"] + 1
                Member[src]["points"] = Member[src]["points"] + 1
                deferrals.presentCard(Card)
                if GetNumPlayerIndices() > QueueSettings["maxClients"] then
                    spaced = true
                    deferrals["done"]("Passed the queue.")
                    break
                end
            until spaced
            RemoveMember(steam)
            deferrals["done"]()
            return true;
        else
            deferrals["done"]("Discord not found, bitch.")
            CancelEvent();
            return false;
        end
    end
    return false;
end

RemoveMember = function(steamID)
	for k,v in next, ActiveMembers do
		if v["steam"] == steamID then
    
            -- ActiveMembers[#ActiveMembers] = nil
            table.remove(ActiveMembers, k)
		end
	end
	for k,v in next, WaitingMembers do
		if v == steamID then
			table.remove(WaitingMembers, k)
		end
	end
end

AddMember = function(data)
    for k,v in next, ActiveMembers do
        if v["points"] < data["p"] then
            for member = k, #ActiveMembers + 1 do
                if member == k then
                    ActiveMembers[member + 1] = ActiveMembers[member];
                end
            end
            ActiveMembers[k] = {
                ["discord"] = data["discord"];
                ["source"] = data["source"];
                ["steam"] = data["steam"];
                ["points"] = data["p"];        
            }
            return true
        end
    end
    ActiveMembers[#ActiveMembers + 1] = {
        ["discord"] = data["discord"];
        ["source"] = data["source"];
        ["steam"] = data["steam"];
        ["points"] = data["p"];
    }
    return true
end

HasRole = function(source, role)
    local _discord_Identifier = GetDiscordID(source);
    if _discord_Identifier == nil then return end
    local _p = promise:new();
    PerformHttpRequest("https://discordapp.com/api/guilds/"..QueueSettings["Guild"].."/members/".._discord_Identifier, function(err, text, headers)
        _p:resolve(json.decode(text));
    end, "GET", "", {["Content-type"] = "application/json", ["Authorization"] = "Bot "..QueueSettings["Token"]})
    local roles = Citizen.Await(_p).roles
    for k,v in next, roles do
        if v == role then
            return true;
        end
    end
    return false;
end

GetDiscord = function(source)
    local _discord_Identifier = GetDiscordID(source);
    if _discord_Identifier == nil then return end
    local _p = promise:new();
    PerformHttpRequest("https://discordapp.com/api/guilds/"..QueueSettings["Guild"].."/members/".._discord_Identifier, function(err, text, headers)
        _p:resolve(json.decode(text));
    end, "GET", "", {["Content-type"] = "application/json", ["Authorization"] = "Bot "..QueueSettings["Token"]})
    local _d = Citizen.Await(_p).user;
    local roles = Citizen.Await(_p).roles
    local Role = "member"
    local found = {};
    for k,v in next, roles do
        found[v] = true
    end
    for k,v in next, Roles do
        if found[v[1]] then
            Role = v[3];
            Member[source]["points"] = v[2];
        end
    end
    if Member[source] ~= nil then
        Member[source]["discord"] = {
            ["name"] = _d.username.."#".._d.discriminator;
            -- ["avatar"] = "https://cdn.discordapp.com/avatars/".._d.id..'/'.._d.avatar..".png";
            ["role"] = Role;
        }
    end
    return Member[source]["points"]
end


GetDiscordID = function(source)
    for k,v in next, GetPlayerIdentifiers(source) do
        if string.find(v, "discord:") then
            return string.gsub(v, "discord:", "");
        end
    end
    return nil;
end

GetSteamID = function(source)
    for k,v in pairs(GetPlayerIdentifiers(source)) do
        if string.find(v,"steam:") then
            return string.gsub(v, "steam:", "")
        end
    end
    return nil
end

GetTime = function(qtime) -- export
    local time = qtime ~= nil and qtime or 0
    local h = math.floor((time % 86400) / 3600)
    local m = math.floor((time % 3600) / 60)
    local s = math.floor(time % 60)
    if time < 60 then -- 60
        return "Right now";
    end
    return ("[%s:%s:%s]"):format(h,m,s)
end

IsPlayerExist = function(id)
    for i=1, #ActiveMembers do
        if ActiveMembers[i]['steam'] == id then
            return true
        end
    end
    return false
end

GetPlace = function(src)-- todo that the waiting members will be at the checking discord shit and after it will change the informations
    local points = Member[src]["points"]
	local place = 1
	for i,sid in next, WaitingMembers do
		for j,p in next, ActiveMembers do
			if p["steam"] ~= sid and GetPointsBySteam(sid) > points then
				place = j
			end
		end
	end

    -- for k,v in next, ActiveMembers do
    --     if v["steam"] ~= Member[src]["steam"] then
    --         Member[src]["place"] = Member[src]["place"] + 1
    --     end
    -- end
	return place
end

CheckConnecting = function()
	for i,sid in next, ConnectingMembers do
		for j,p in next, ActiveMembers do
			if p["steam"] == sid and (GetPlayerPing(p["source"]) == 500) then
				table.remove(ConnectingMembers, i)
				break
			end
		end
	end
end

ConnectFirst = function()
	if #WaitingMembers == 0 then return end

	local maxPoint = 0
	local maxSid = WaitingMembers[1]
	local maxWaitId = 1
	for i,v in next, WaitingMembers do
		local points = GetPointsBySteam(v)
		if points > maxPoint then
			maxPoint = points
			maxSid = v
			maxWaitId = i
		end
	end
	
	table.remove(WaitingMembers, maxWaitId)
	ConnectingMembers[#ConnectingMembers + 1] = maxSid
end

CreateThread(function()
	while true do
		Wait(1000)
		CheckConnecting()
        -- if #WaitingMembers > 0 then
		if #WaitingMembers > 0 and #ConnectingMembers + GetNumPlayerIndices() < QueueSettings["maxClients"] then
            print("Connecting")
            ConnectFirst()
		end
	end
end)


GetPointsBySteam = function(s)
    for k,v in next, WaitingMembers do
        for j,p in next, ActiveMembers do
            if v ~= p["steam"] then
                return p["points"]
            end
        end
    end
    -- for k,v in next, ActiveMembers do
    --     if v["steam"] == s then
    --         print(v["points"], "points")
    --         return v["points"];
    --     end
    -- end
    return 0;
end

MemberCard = function(src, place, me)
    local points = Member[src]["points"] > 1000 and "∞" or Member[src]["points"];
    -- local place = #ActiveMembers == 1 and "1st" or #ActiveMembers == 2 and "2nd" or #ActiveMembers == 3 and "3rd" or #ActiveMembers.."th"
    return({
        ["type"] = "ColumnSet",
        ["columns"] = {
            -- {
            --     ["type"] = "Column",
            --     ["width"] = (me and "30px" or "20px"),
            --     ["items"] = {
            --         {
            --             ["type"] = "Image",
            --             ["style"] = "person",
            --             ["url"] = Member[src]["discord"]["avatar"],
            --         }
            --     }
            -- },
            {
                ["type"] = "Column",
                ["width"] = "stretch",
                ["items"] = {
                    {
                        ["type"] = "TextBlock",
                        ["width"]= "25px",
                        ["text"] = Member[src]["discord"]["name"]..' - '..Member[src]["discord"]["role"],
                        ["color"] = (me and "accent" or "default"),
                        ["fontType"]= "Default",
                        ["weight"]= "bolder",
                        ["size"]= (me and "default" or "small"),
                        -- ["isSubtle"] = true,
                    },
                    {
                        ["type"] = "TextBlock",
                        ["text"] = points.. " - " .. GetTime(Member[src]["time"]),
                        ["isSubtle"] = true,
                        ["spacing"] = "none",
                        ["size"]= (me and "default" or "small"),
                    },
                    {
                        ["type"] = "TextBlock",
                        ["text"] = "Your position in the queue: "..GetPosition(place),
                        ["isSubtle"] = true,
                        ["spacing"] = "none",
                        ["size"] = "default"
                    },    

                }
            }
        },  
    })
end

GetPosition = function(i)
    if (i == 1) then
        return "1st";
    elseif (i == 2) then
        return "2nd";
    elseif (i == 3) then
        return "3rd";
    else
        return i .. "th";
    end
end

CreateTitle = function()
    return ({
        ["type"] = "TextBlock",
        ["wrap"] = true,
        ["text"] = "Exotic Whitelist",
        ["horizontalAlignment"] = "Center",
        ["height"] = "stretch",
        ["size"] = "ExtraLarge",
        ["weight"] = "Bolder",
        ["isSubtle"] = true,
        -- ["fontType"] "monospace",
        ["color"] = "attention",
    })
end

EndCard = function(length)
    return ({
        ["type"] = "TextBlock",
        ["wrap"] = true,
        ["spacing"] = "Medium",
        ["text"] = length > 1 and "There are " .. (length - 1) .. " members waiting with you" or "You are waiting alone",
        -- ["text"] = "You are waiting along",
        ["horizontalAlignment"] = "Center",
        ["height"] = "stretch",
        ["fontType"] = "Default",
        ["size"] = "Medium",
        ["weight"] = "Bolder",
        ["color"] = "Light"
    })
end