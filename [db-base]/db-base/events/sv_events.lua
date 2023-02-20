DBCore = DBCore or {}

RegisterServerEvent('db-base:updateLocation')
AddEventHandler('db-base:updateLocation', function(lastPosition)
    DBCore.lastPosition[source] = {x = lastPosition["x"], y = lastPosition["y"], z = lastPosition["z"]}
end)

RegisterServerEvent('db-base:banPlayer')
AddEventHandler('db-base:banPlayer', function(id, reason)
	DBCore.BanPlayer(id, reason)
end)

local onduty = false

RegisterServerEvent('db-base:toggleDuty')
AddEventHandler('db-base:toggleDuty', function()
    local src = source
    local _char = DBCore.Characters[src]
    onduty = not onduty
    if (onduty) then
        _char.setDuty(true)
    else
        _char.setDuty(false)
    end
end)

AddEventHandler('playerDropped', function(reason)
	local player = DBCore.Characters[source]
	if player then
		-- TriggerClientEvent("hud:save", source)
		local meta = { 
            thirst = player:needs().thirst;
            hunger = player:needs().hunger;
        }
		SaveCharacter(source, player.identifier, player.cid, DBCore.lastPosition[source], meta)
		pLogData = player.name .. "("..player.citizenid..") exited | reason: " .. reason
		AddLog(source, "player-left", pLogData)	
		DBCore.Characters[source] = nil
	end
end)

AddEventHandler('db-base:doesCharacterExist', function(identifier, callback)
	exports['db_database']:execute('SELECT * FROM characters WHERE identifier = @identifier', {['@identifier'] = identifier}, function(users)
		if users[1] then
			callback(true)
		else
			callback(false)
		end
	end)
end)

-- RegisterServerEvent('db-base:addMessage')
-- AddEventHandler('db-base:addMessage', function(type, target, prefix, author, message)
-- 	DBCore.addMessage(type, target, prefix, author, message)
-- end)

RegisterServerEvent('db-base:refreshPlayer')
AddEventHandler('db-base:refreshPlayer', function(pData)
	local src = source
	DBCore.CharacterLogin(src, pData, false)
end)

RegisterServerEvent('db-base:triggerServerCallback')
AddEventHandler('db-base:triggerServerCallback', function(name, requestId, ...)
	local _source = source

	DBCore.TriggerServerCallback(name, requestID, _source, function(...)
		TriggerClientEvent('db-base:serverCallback', _source, requestId, ...)
	end, ...)
end)

AddEventHandler('db-base:AddCommand', function(command, callback, suggestion, arguments)
	DBCore.AddCommand(command, callback, suggestion, arguments)
end)

AddEventHandler('db-base:AddAdminCommand', function(command, rank, callback, callbackfailed, suggestion, arguments)
	DBCore.AddAdminCommand(command, group, callback, callbackfailed, suggestion, arguments)
end)

RegisterServerEvent('db-base:givepayment')
AddEventHandler('db-base:givepayment', function()
	local src = source
	if src then
		local _char = DBCore.Characters[src]
		if _char ~= nil then
			local amount = _char:job().payment
			if _char then
				if DBFramework.Jobs[_char:job().name] ~= nil then
					_char.addMoney(amount, 'bank')
					TriggerClientEvent('notification', src, 'You Get Your Payment : ' .. amount .. '$.',3)
				end
			end
		else
			TriggerClientEvent('notification', src, 'You not got your payment[nil].',2)
		end
	end
end)