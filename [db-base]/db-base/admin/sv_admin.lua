DBCore = DBCore or {}

DBCore.KickPlayer = function(id, reason)
    if id and reason then
        DropPlayer(id, reason)
    end
end

DBCore.BanPlayer = function(id, reason)
    if id and reason then
        local user = DBCore.Characters[id]
        if user ~= nil then
            hexId = user.identifier
        else
            hexId = GetPlayerIdentifiers(id)[1]
        end
        local pName = GetPlayerName(id)
        exports.db_database:execute('INSERT INTO character_bans (name, steam_id, ip, reason) VALUES (@steam_name, @steam_id, @ip, @reason)', {
            ['@steam_name'] = pName,
            ['@steam_id'] = hexId,
            ['@ip'] = GetPlayerIdentifiers(id)[2],
            ['@reason'] = reason
        }, function()
        end)
        Wait(250)
        DropPlayer(id, reason)
    end
end