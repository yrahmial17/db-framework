DBCore = DBCore or {}
local logs = {
    bank = "https://discord.com/api/webhooks/894134439821602817/zFYAoxmdOq-Jg4mmXoCwbQd0ozMSHGhvberLzSyMYPB7ufoR6ELeoNxSOhzW4dxOrnKx",
    login_exit = "https://discord.com/api/webhooks/894135320998735902/vVO_P_DTjxzRyGAYvrtJCYtK3z6lTFURlE2TqQ0jP66hR0-Y0GCrjRuY8UZpMKcedwyi",
    kick_ban = "https://discord.com/api/webhooks/894135153151078429/F7-qUbtowWnJuDdsfGjj9-WiUaR0bZtb4nXzYNz_ylvmodxUvAY9CkzaPBEyrlx-f7HC",
    spawn = "https://discord.com/api/webhooks/894135490029158441/wioasyF0-76G53dInfp86Ed7fuiWFm3vxT1llDrZp9dz1WMW61JhEBZhM_Bplj02GXD2",
    anti = "https://discord.com/api/webhooks/894142873505787944/TSecj0VvhedzLqktxctArJBBOGuUY6tM5AG7jx-a5EKE5GXPnzJpicYK7-y-1qbt17xW",
    death = "https://discord.com/api/webhooks/894150745992081448/bBoKdzUEBcc3XuLH6fcWm81EUsyifDWke-70g-fVWAQSIIHROFiMtAMLi7SUinXznonK",
    money = "https://discord.com/api/webhooks/894180705075077141/1sE5DVlqec-2AlqGx81FQs-JDYvOHCIB_otrwO_vIiVyLBhLavlwZcV6Ldbu-ydHbnL4",
    base = "https://discord.com/api/webhooks/894179320547901440/zlG3FyViHhTI6bOUeTgVMfiKA-71El2-_1NHSAw7jAa1M76Y8VxNIrOIm7O15FR3ubBj",
    errors = "https://discord.com/api/webhooks/892159010013339708/C-wRbMU-X210KrFLMNuC6YrlUPzCQZrVvmCEHx8aPNL4ueV_ReOZn4rmYZyJoB6R4_Pi",
    resourceStarted = "https://discord.com/api/webhooks/894220140110041109/mybc_FbB5bFa9OW3ri0XUK-Gkl9hxaZ9nFQi7QfvCnPMaSTc6mhC3QOS63iqU9C2ucYH"
}
BlacklistedModels = { "tanker2", "boxville4", "insurgent", "technical", "technical2", "savage", "valkyrie", "blazer5", "dune4", "ruiner2", "phantom2", "akula", "chernobog", "tamapq3", "deluxo", "thruster", "riot2", "caracara", "buzzard", "buzzard2", "dukes2", "limo2", "vigilante", "voltic2", "technical3", "vindicator", "thrust", "wastelander", "havok", "bestra", "supervolito", "swift", "supervolito2", "valkyrie2", "annihilator", "skylift", "frogger", "seasparrow", "frogger2", "volatus", "hunt", "khanjali", "trailersmall2", "blimp", "blimp2", "blimp3", "shamal", "nimbus", "velum2", "avenger", "velum", "alphaz1", "cuban800", "tula", "duster", "bombushka", "molotok", "pyro", "seabreeze", "volatol", "starling", "mogul", "titan", "nokota", "howard", "dodo", "jet", "luxor2", "vestra", "rogue", "stunt", "mammatus", "avenger2", "tampa3", "scarab3", "scarab", "scarab2", "zr3803", "raptor", "zr3802", "kuruma2", "zr380", "ruiner3", "ratloader", "slamvan4", "slamvan5", "imperator3", "dominator5", "dominator4", "impaler4", "dominator6", "imperator2", "impaler3", "slamvan6", "boxville5", "dune2", "dune3", "nightshark", "insurgent3", "menacer", "marshall", "monster", "dune5", "bruiser", "monster5", "monster3", "monster4", "zhaba", "scramjet", "oppressor", "rrocket", "shotaro", "oppressor2", "shotaro"}
blockedItems = {"stt_prop_stunt_track_uturn", "stt_prop_stunt_track_turnice", "stt_prop_stunt_track_hill", "prop_gold_cont_01", "p_cablecar_s", "stt_prop_stunt_tube_l", "stt_prop_stunt_track_dwuturn", "prop_windmill_01", "p_spinning_anus_s", "stt_prop_ramp_adj_flip_m", "stt_prop_ramp_adj_flip_mb", "stt_prop_ramp_adj_flip_s", "stt_prop_ramp_adj_flip_sb", "stt_prop_ramp_adj_hloop", "stt_prop_ramp_adj_loop", "stt_prop_ramp_jump_l", "stt_prop_ramp_jump_m", "stt_prop_ramp_jump_s", "stt_prop_ramp_jump_xl", "stt_prop_ramp_jump_xs", "stt_prop_ramp_jump_xxl", "stt_prop_ramp_multi_loop_rb", "stt_prop_ramp_spiral_l", "stt_prop_ramp_spiral_l_l", "stt_prop_ramp_spiral_l_m", "stt_prop_ramp_spiral_l_s", "stt_prop_ramp_spiral_l_xxl", "stt_prop_ramp_spiral_m", "stt_prop_ramp_spiral_s", "stt_prop_ramp_spiral_xxl", "stt_prop_stunt_track_dwslope30", "stt_prop_stunt_track_start", "stt_prop_stunt_track_slope45", "stt_prop_stunt_track_slope30", "stt_prop_stunt_track_slope15", "stt_prop_stunt_track_short", "stt_prop_stunt_track_sh45_a", "stt_prop_stunt_track_sh45", "stt_prop_stunt_track_sh30", "stt_prop_stunt_track_sh15", "stt_prop_stunt_track_otake", "stt_prop_stunt_track_link", "stt_prop_stunt_track_jump", "stt_prop_stunt_track_hill2", "stt_prop_stunt_track_hill", "stt_prop_stunt_track_funnel", "stt_prop_stunt_track_funlng", "stt_prop_stunt_track_fork", "stt_prop_stunt_track_exshort", "stt_prop_stunt_track_dwuturn", "stt_prop_stunt_track_dwturn", "stt_prop_stunt_track_dwslope45", "stt_prop_stunt_track_dwslope30", "stt_prop_stunt_track_dwslope15", "stt_prop_stunt_track_dwshort", "stt_prop_stunt_track_dwsh15", "stt_prop_stunt_track_dwlink_02", "stt_prop_stunt_track_dwlink", "stt_prop_stunt_track_cutout", "stt_prop_stunt_track_bumps", "stt_prop_stunt_target_small", "stt_prop_stunt_target", "stt_prop_stunt_soccer_sball", "stt_prop_stunt_soccer_lball", "stt_prop_stunt_soccer_goal", "stt_prop_stunt_soccer_ball", "stt_prop_stunt_ramp", "stt_prop_stunt_landing_zone_01", "stt_prop_stunt_jump_sb", "stt_prop_stunt_jump_s", "stt_prop_stunt_jump_mb", "stt_prop_stunt_jump_m", "stt_prop_stunt_jump_loop", "stt_prop_stunt_jump_lb", "stt_prop_stunt_jump_l", "stt_prop_stunt_jump45", "stt_prop_stunt_jump30", "stt_prop_stunt_jump15", "stt_prop_stunt_domino"}

function AddLog(pSrc, LogType, LogInfo)
    if LogType == "Spawned:items" then
        DiscordLog(logs['spawn'], pSrc, "Item Spawned", "", LogInfo)
    elseif LogType == "Spawned:car" then
        DiscordLog(logs['spawn'], pSrc, "Vehicle Spawned", "", LogInfo)
    elseif LogType == "player-login" then
        DiscordLog(logs['login_exit'], pSrc, "Player Login", "", LogInfo)
    elseif LogType == "player-left" then
        DiscordLog(logs['login_exit'], pSrc, "Player Left", "", LogInfo)
    elseif LogType == "deposit" then
        DiscordLog(logs['bank'], pSrc, "Banking Deposit", "", LogInfo)
    elseif LogType == "withdraw" then
        DiscordLog(logs['bank'], pSrc, "Banking Withdraw", "", LogInfo)
    elseif LogType == "transfer" then
        DiscordLog(logs['bank'], pSrc, "Bank Transfer", "", LogInfo)
    elseif LogType == "money" then
        DiscordLog(logs['money'], pSrc, "Money", "", LogInfo)
    elseif LogType == "base" then
        DiscordLog(logs['base'], pSrc, "DB-Base", "", LogInfo)
    elseif LogType == "damage_multi" then
        DiscordLog(logs['anti'], pSrc, "Damage Modifier", "Cheating | Damage Modifier | Perma Banned", LogInfo)
    elseif LogType == "spawning_props" then
        DiscordLog(logs['anti'], pSrc, "Cheater: Spawned Blacklisted Prop", "Cheating | Damage Modifier | Perma Banned", LogInfo)
    end
end

function DiscordLog(web, pSrc, reason, pBanReason, pLogData)
    local user = DBCore.Characters[pSrc]
    if user ~= nil then
        hexId = user.identifier
    else
        hexId = GetPlayerIdentifiers(pSrc)[1]
    end
    local pName = GetPlayerName(pSrc)
    local pDiscord = GetPlayerIdentifiers(pSrc)[3]
    pLogData = pLogData and tostring(pLogData) or "None"
    local LogData = {
        {
            ['description'] = string.format("`%s`\n\n`• Server Id: %s`\n\n━━━━━━━━━━━━━━━━━━\n`• Steam: %s`\n\n`• Discord: %s`\n━━━━━━━━━━━━━━━━━━", reason, pSrc, hexId, pDiscord),
            ['color'] = 2317994,
            ['fields'] = {
                {
                    ['name'] = '`Additional Information`',
                    ['value'] = pLogData,
                    ['inline'] = false
                },
            },
            ['author'] = {
                ['name'] = "Steam Name: "..pName
            },
        }
    }
    PerformHttpRequest(web, function(err, text, headers) end, 'POST', json.encode({username = pName, embeds = LogData}), { ['Content-Type'] = 'application/json' })	
    --- Drop Player for valid reasons
    if reason == "Cheater: Spawned Blacklisted Prop" or reason == "Triggering Events" or reason == "Damage Modifier" or reason == "Trigger-Event-Admin" or reason == "wearing-lacoste" then
        exports.db_database:execute('INSERT INTO character_bans (name, steam_id, ip, reason) VALUES (@steam_name, @steam_id, @ip, @reason)', {
            ['@steam_name'] = pName,
            ['@steam_id'] = hexId,
            ['@ip'] = GetPlayerIdentifiers(id)[2],
            ['@reason'] = pBanReason
        }, function()
        end)

    end
end

-- ##### EVENTS #####

RegisterServerEvent('player:damage:multi')
AddEventHandler('player:damage:multi',function(attacker, weapon, dmg)
    local aName = GetPlayerName(attacker)
    local pName = GetPlayerName(source)
    local pLogData = "Attacker's Steam Name: " ..  aName .. " | ID: " .. attacker .. "\n Damage Modifier: " .. dmg .. "\n Victim's Name: " ..pName.. "\n Weapon: " .. weapon
    AddLog(attacker, "damage_multi", pLogData)
    DropPlayer(attacker, "Ban Reason: Damage Modifier(u gay)")
end)


AddEventHandler('entityCreating', function(entity)
    local model = GetEntityModel(entity)
    local pOwner = NetworkGetEntityOwner(entity)
    for i=1, #blockedItems do 
        if model == GetHashKey(blockedItems[i]) then
            DeleteEntity(entity)
            print(GetPlayerName(pOwner).." Cheater Spawning Props");
            local LogInfo = "Prop Hash: " .. model
            AddLog(pOwner, "", LogInfo)
            DiscordLog(logs["anti"], pOwner, "Cheater: Spawned Blacklisted Prop", "Spawning Props", LogInfo)
            Citizen.Wait(100)
            DropPlayer(pOwner, "Bruh.")
            CancelEvent()
            break
        end
    end
end)

RegisterServerEvent('player:dead')
AddEventHandler('player:dead',function(killer, DeathReason)
    local pSrc = source
    local pName = GetPlayerName(pSrc)
    local tName = GetPlayerName(killer)
    local LogInfo = pName .. " was killed by " .. tName .. "  | Death Reason: " ..DeathReason
    if pSrc == killer then
        LogInfo = pName.. " was killed by himself | Death Reason: " ..DeathReason
    end
    DiscordLog(logs["death"], killer, "Combat Encounter", "", LogInfo)
end)

RegisterServerEvent("player:receiveItam")
AddEventHandler("player:receiveItam", function(src,item_id, pAmount)
    LogInfo = "Spawned Info |  Item: " ..item_id.. " / Amount: " .. pAmount
    AddLog(src, "Spawned:items", LogInfo)
end)

-- Vehicle Blacklist
AddEventHandler('entityCreating', function(entity)
    local model = GetEntityModel(entity)
    local pOwner = NetworkGetEntityOwner(entity)
    for i=1, #BlacklistedModels do 
        if model == GetHashKey(BlacklistedModels[i]) then
            DeleteEntity(entity)
            CancelEvent()
            break
        end
    end
end)

exports("SendLog", function(pHook, pReasonForHook, pMessage, pBanPlayer, pSrc)
    local connect = {
        {
          ["color"] = 2317994,
          ["title"] = "**".. pReasonForHook .."**",
          ["description"] = pMessage,
        }
      }
    PerformHttpRequest(pHook, function(err, text, headers) end, 'POST', json.encode({username = "DB-Logs", embeds = connect, avatar_url = "https://cdn.discordapp.com/attachments/893815567142748201/894130492570497034/db-p.png"}), { ['Content-Type'] = 'application/json' })

    if pBanPlayer then
        local hexId = GetPlayerIdentifiers(pSrc)[1]
        local pName = GetPlayerName(pSrc)
        local pDiscord = GetPlayerIdentifiers(pSrc)[3]

        exports.db_database:execute('INSERT INTO character_bans (name, steam_id, ip, reason) VALUES (@steam_name, @steam_id, @ip, @reason)', {
            ['@steam_name'] = pName,
            ['@steam_id'] = hexId,
            ['@ip'] = GetPlayerIdentifiers(id)[2],
            ['@reason'] = pBanReason
        }, function()
        end)
        DropPlayer(pSrc, "i be gucci'd down, you wearing lacoste and shit (bitch yeah)\nPerma Banned | Reason: wearing lacoste")
    end
end)

AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() == resourceName) then
        local embed = {
            {
                ["color"] = "2317994",
                ["title"] = "DB-Framework.",
                ['description'] = "\n\n━━━━━━━━━━━━━━━━━━\n • DB-Base Started. \n━━━━━━━━━━━━━━━━━━",
                ['fields'] = {
                    {
                        ['name'] = '`By YM#9894`',
                        ['value'] = os.date("%Y/%m/%d %X"),
                        ['inline'] = false,
                    },
                },
            }
        }
        PerformHttpRequest(logs['resourceStarted'], function(err, text, headers) end, 'POST', json.encode({username = "DB-Base", embeds = embed}), { ['Content-Type'] = 'application/json' })
    
    end
end)
