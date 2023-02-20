DBCore = DBCore or {}
RegisterServerEvent('db-multicharacters:GetCharacters', function()
    local src = source
    local steam = GetSteamID(src)
    if steam == "not found" then DropPlayer(src, "not steam") end
    local chars = DBCore["SQL"]["execute"]("select * from characters where identifier = @identifier", {["@identifier"] = steam})
    TriggerClientEvent('db-multicharacters:setupCharacters', src, chars)
    SetPlayerRoutingBucket(src, src);
end)

RegisterServerEvent('db-multicharacters:GetCharacter', function(cid)
    local src = source
    local steam = GetSteamID(src)
    local chars = DBCore["SQL"]["execute"]('SELECT * FROM characters WHERE identifier = @identifier AND cid = @cid', {['@identifier'] = steam, ["@cid"] = cid})
    if chars then
        TriggerClientEvent('db-multicharacters:GetCharacter', src, chars)
    else
        TriggerClientEvent('db-multicharacters:GetCharacter', src, "Empty")
    end
end)

RegisterServerEvent('db-base:SessionStarted', function()
    local src = source
    TriggerClientEvent('db-base:SessionStarted', src)
end)

RegisterServerEvent('db-multicharacters:charSelect', function(cid, isNew)
    local src = source
    local steam = GetSteamID(src)
	local PlayerData = {
		identifier = steam,
		cid = cid,
		name = GetPlayerName(src)
	}
	DBCore.CharacterLogin(src, PlayerData, isNew)
    SetPlayerRoutingBucket(src, 0)
end)

RegisterServerEvent('db-multicharacters:deleteChar', function(cid)
    local src = source
    local identifier = GetSteamID(src)
    DBCore.DeleteCharacter(identifier, cid, src)
end)

RegisterServerEvent("db-multicharacters:pedshit", function(cid)
    local src = source
    local char = {}
    exports['db_database']:execute("SELECT * FROM `character_current` WHERE id = '"..GetPlayerIdentifiers(src)[1].."' AND cid = '" .. cid .. "'", {}, function(character_current)
        char.model = '1885233650'
        char.drawables = json.decode('{"1":["masks",0],"2":["hair",0],"3":["torsos",0],"4":["legs",0],"5":["bags",0],"6":["shoes",1],"7":["neck",0],"8":["undershirts",0],"9":["vest",0],"10":["decals",0],"11":["jackets",0],"0":["face",0]}')
        char.props = json.decode('{"1":["glasses",-1],"2":["earrings",-1],"3":["mouth",-1],"4":["lhand",-1],"5":["rhand",-1],"6":["watches",-1],"7":["braclets",-1],"0":["hats",-1]}')
        char.drawtextures = json.decode('[["face",0],["masks",0],["hair",0],["torsos",0],["legs",0],["bags",0],["shoes",2],["neck",0],["undershirts",1],["vest",0],["decals",0],["jackets",11]]')
        char.proptextures = json.decode('[["hats",-1],["glasses",-1],["earrings",-1],["mouth",-1],["lhand",-1],["rhand",-1],["watches",-1],["braclets",-1]]')

        if character_current[1] and character_current[1].model then
            char.model = character_current[1].model
            char.drawables = json.decode(character_current[1].drawables)
            char.props = json.decode(character_current[1].props)
            char.drawtextures = json.decode(character_current[1].drawtextures)
            char.proptextures = json.decode(character_current[1].proptextures)
        end

        exports['db_database']:execute("SELECT * FROM `character_face` WHERE id = '"..GetPlayerIdentifiers(src)[1].."' AND cid = '" .. cid .. "'", {}, function(character_face)
            if character_face[1] and character_face[1].headBlend then
                char.headBlend = json.decode(character_face[1].headBlend)
                char.hairColor = json.decode(character_face[1].hairColor)
                char.headStructure = json.decode(character_face[1].headStructure)
                char.headOverlay = json.decode(character_face[1].headOverlay)
            end

            TriggerClientEvent("db-multicharacters:getPed", src, char)
        end)
    end)
end)


RegisterServerEvent('db-multicharacters:createCharacter')
AddEventHandler('db-multicharacters:createCharacter', function(cData)
    local src = source
    local steam = GetSteamID(src)
    local meta = { 
        ["thirst"] = 100,
        ["hunger"] = 100
    }
    local saveCharacter = DBCore["SQL"]["execute"]('INSERT INTO characters (`identifier`, `name`, `cid`, `citizenid`, `cash`, `bank`, `banknumber`, `firstname`, `lastname`, `sex`, `twitter`, `dob`, `rank`, `job`, `secondaryJob`, `gang`, `position`, `phone`, `wallpaper`, `metaData`, `bloodtype`, `jail`) VALUES (@identifier, @name, @cid, @citizenid, @cash, @bank, @banknumber, @firstname, @lastname, @sex, @twitter, @dob, @rank, @job, @secondaryJob, @gang, @position, @phone, @wallpaper, @metaData, @bloodtype, @jail)', {
        ['identifier'] = steam,
        ['name'] = GetPlayerName(src),
        ['cid'] = cData.cid,
        ['citizenid'] = string.sub(steam..cData.cid ,14),
        ['cash'] = DBFramework.DefaultSettings['startCash'],
        ['bank'] = DBFramework.DefaultSettings['startBank'],
        ['banknumber'] = math.random(10000000, 99999999),
        ['firstname'] = cData.firstname,
        ['lastname'] = cData.lastname,
        ['sex'] = cData.sex,
        ['twitter'] = string.upper(cData.firstname.."_"..cData.lastname),
        ['dob'] = cData.dob,
        ['rank'] = DBFramework.DefaultSettings['rank'],
        ['job'] = json.encode(DBFramework.DefaultSettings['job']),
        ['secondaryJob'] = DBFramework.DefaultSettings['secondaryJob'],
        ['gang'] = DBFramework.DefaultSettings['gang'],
        ['position'] = json.encode(DBFramework.DefaultSettings['spawnPosition']),
        ['phone'] = "05"..math.random(3,5)..math.random(10000,39999),
        ['wallpaper'] = "https://cdn.discordapp.com/attachments/685902475043012662/1067652125980631040/3933780E-84EC-474C-99D8-F0CFC3C57BDA.JPG",
        ["metaData"] = json.encode(meta),
        ['bloodtype'] = DBFramework.Bloodtypes[math.random(1, #DBFramework.Bloodtypes)],
        ['jail'] = 0,
    })
    if saveCharacter then
        print('^1[DB-Framework] ^4- New Character Created')
        AddLog(src, 'base', "New Character Created("..GetPlayerName(src)..")\nfullname: "..cData.firstname..' '..cData.lastname..'('..cData.cid..')\nBitrhday: '..cData.dob)
    else
        print("Something Happend?")
    end
end)

RegisterCommand("logout", function(source, args)
    if not DBCore["Characters"][source] then
        TriggerClientEvent("db-base:SessionStarted", source)
    end
end)

RegisterServerEvent("db-multicharacters:visiable")
AddEventHandler("db-multicharacters:visiable", function()
    local src = source;
    SetPlayerRoutingBucket(src, 0)
end)

RegisterServerEvent("db-multicharacters:GetPlayers")
AddEventHandler("db-multicharacters:GetPlayers", function()
	TriggerClientEvent('db-multicharacters:GetPlayers', source, source, GetNumPlayerIndices(), GetConvarInt("sv_maxclients", 32)) -- todo chane slots here
end)

GetSteamID = function(source)
    local steam = "not found";
    for k,v in pairs(GetPlayerIdentifiers(source)) do
        if string.find(v,"steam:") then
            steam = v;
        end
    end
    return steam;
end