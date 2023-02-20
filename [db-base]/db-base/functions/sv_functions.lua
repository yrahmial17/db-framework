DBCore = DBCore or {}

DBCore.RegisterServerCallback = function(name, cb)
	DBCore.ServerCallbacks[name] = cb
end

DBCore.TriggerServerCallback = function(name, requestId, source, cb, ...)
	if DBCore.ServerCallbacks[name] ~= nil then
		DBCore.ServerCallbacks[name](source, cb, ...)
	else
		print('TriggerServerCallback => [' .. name .. '] does not exist')
	end
end

DBCore.Math = function(value, numDecimalPlaces)
	return tonumber(string.format("%." .. (numDecimalPlaces or 0) .. "f", value))
end

DBCore.CountTable = function(tbl)
    local count = 0
        for k, v in pairs(tbl) do
        count = count + 1
        end
    return count
end


DBCore.CharacterLogin = function(source, pData, isNew)
	local src 			= source
	local identifier 	= pData.identifier
	local cid 			= pData.cid
	--local name 			= pData.name
	exports['db_database']:execute('SELECT * FROM characters WHERE identifier = @identifier AND cid = @cid', {['@identifier'] = identifier, ['@cid'] = cid}, function(characterInformation)
		--exports['db_database']:execute('UPDATE characters SET name = @name WHERE identifier = @identifier AND cid = @cid', { ['@identifier'] = identifier, ['@name'] = name, ['@cid'] = cid})
		_char = SetCharacterData(src, cid, characterInformation[1])
		DBCore.Characters[src] = _char
		_char["TriggerEvent"]('db-base:characterData', {
			identifier = _char.identifier,
			cid = _char.cid,
			source = _char.source,
			name = _char.name,
			firstname = _char.firstname,
			lastname = _char.lastname,
			cash = _char.cash,
			bank = _char.bank,
			job = _char.job(),
			secondaryJob = _char.secondaryJob(),
			ymstyle = _char.LifeStyle(),
			gang = _char.gang(),
			needs = _char.needs(),
			rank = _char.rank,
			dob = _char.dob,
			lastPosition = json.decode(_char.position),
			sex = _char.sex,
			phone = _char.phone,
			citizenid = _char.citizenid,
			bankAccount = _char.bankAccount,
			jail = _char.jail,
			fullname = _char.firstname..' '.._char.lastname,
		})
		if isNew then
			print('[^2DBCore^0] '.._char.name..', CID: '..cid..' was created successfully!')
		else
			print('[^2DBCore^0] '.._char.name..', CID: '..cid..' was loaded successfully!')
			if (_char["jail"] > 0) then
				TriggerClientEvent("spawnselector", _char["source"], false, true)
			else
				TriggerClientEvent("spawnselector", _char["source"], true, false)
			end
			TriggerClientEvent("db-base:initialPlayer", src)
		end
		TriggerClientEvent('db-base:characterSpawned', src)
		TriggerClientEvent('db-base:blips:start', src)
		TriggerClientEvent('rich:playerLoggedIn', src)
		TriggerEvent("request-dropped-items")
		TriggerEvent("server-request-update", _char["citizenid"])
		-- TriggerClientEvent("hud:updatePlayers", -1, #G)
	end)
end

DBCore.GetCharacter = function(source)
	if DBCore.Characters[source] ~= nil then
		return DBCore.Characters[source]
	end
	print("^4"..GetPlayerName(source).." - nil character^7")
	return nil
end

DBCore.GetCharacters = function()
	local players = {}
	for k, v in pairs(DBCore.Characters) do
		table.insert(players, k)
		-- players[#players + 1] = k
	end
	return players
end

DBCore.clearInventory = function(id)
	TriggerEvent('db-inventory:delete', id)
end

DBCore.DeleteCharacter = function(id, cid, src)
	local citizenid = string.sub(id..cid ,14)
	-- AddLog(src, 'base', DBCore.Characters[src].name..'('..DBCore.Characters[src].citizenid..') Deleted his character(character number:'..cid..').')
	local dickhead = {
		{db = "characters", fuck = "identifier"},
		{db = "character_current", fuck = "id"},
		{db = "character_face", fuck = "id"},
		{db = "character_outfits", fuck = "id"},
		{db = "character_tattoos", fuck = "identifier"},
		{db = "character_vehicles", fuck = "owner"},
		{db = "character_licenses", fuck = "owner"},
		-- {db = "character_mdt", fuck = "char_id"},
		-- {db = "weapon_serials", fuck = "owner"},
		{db = "weapon_ammo", fuck = "identifier"},
	}	
	for _, table in pairs(dickhead) do
		local values = {
			["id"] = id,
			["cid"] = cid,
		}
		local data =  DBCore["SQL"]["execute"]("DELETE FROM "..table["db"].." WHERE "..table["fuck"].." = @id AND cid = @cid",values)
		if data then
			print("[db-base] Character Deleted ["..id.."]")
		-- exports.db_database:execute("DELETE FROM "..t.table.." WHERE "..t.fuck.." = @id AND cid = @cid",values)
		end
	end
	DBCore["SQL"]["execute"]("DELETE FROM weapon_serials WHERE owner = @id",{["id"] = DBCore.Characters[src]["fullname"]})
	DBCore["SQL"]["execute"]("DELETE FROM phone_contacts WHERE identifier = @id",{["id"] = citizenid})
	TriggerEvent('apartment:delete', citizenid)
	DBCore.clearInventory(id)
end

DBCore.SpawnVehicle = function(source, vehicle)
	AddLog(source, 'Spawned:car', DBCore.Characters[source].name..' Spawn Vehicle('..vehicle..')')
	TriggerClientEvent('db-base:SpawnVehicle', source, vehicle)
end

DBCore.DeleteVehicle = function(source)
	TriggerClientEvent('db-base:DeleteVehicle', source)
end

DBCore.doesCharacterExist = function(identifier, callback)
	TriggerEvent('db-base:doesCharacterExist', identifier, callback)
end

-- DBCore.addMessage = function(type, target, prefix, author, msg)
-- 	local output
-- 	if author == nil then
-- 		output = { prefix, msg }
-- 	else
-- 		output = { prefix, author..": "..msg }
-- 	end
	
-- 	if type == "PRIMARY" then
-- 		TriggerClientEvent('chat:addMessage', target, {
-- 			template = '<div style="padding: 8px; margin: 0.1vw; background-color: #4F7CAC; border-radius: 6px;"><b>{0}</b> | {1}</div>',
-- 			args = output
-- 		})
-- 	elseif type == "SUCCESS" then
-- 		TriggerClientEvent('chat:addMessage', target, {
-- 			template = '<div style="padding: 8px; margin: 0.1vw; background-color: rgba(28, 200, 138, 0.75); border-radius: 6px;"><b>{0}</b> | {1}</div>',
-- 			args = output
-- 		})
-- 	elseif type == "INFO" then
-- 		TriggerClientEvent('chat:addMessage', target, {
-- 			template = '<div style="padding: 8px; margin: 0.1vw; background-color: rgba(54, 185, 204, 0.75); border-radius: 6px;"><b>{0}</b> | {1}</div>',
-- 			args = output
-- 		})
-- 	elseif type == "WARNING" then
-- 		TriggerClientEvent('chat:addMessage', target, {
-- 			template = '<div style="padding: 8px; margin: 0.1vw; background-color: rgba(246, 194, 62, 0.75); border-radius: 6px;"><b>{0}</b> | {1}</div>',
-- 			args = output
-- 		})
-- 	elseif type == "DANGER" then
-- 		TriggerClientEvent('chat:addMessage', target, {
-- 			template = '<div style="padding: 8px; margin: 0.1vw; background-color: rgba(231, 74, 59, 0.75); border-radius: 6px;"><b>{0}</b> | {1}</div>',
-- 			args = output
-- 		})
-- 	elseif type == "SECONDARY" then
-- 		TriggerClientEvent('chat:addMessage', target, {
-- 			template = '<div style="padding: 8px; margin: 0.1vw; background-color: rgba(78, 114, 223, 0.75); border-radius: 6px;"><b>{0}</b> | {1}</div>',
-- 			args = output
-- 		})
-- 	end
-- end

DBCore.setRank = function(player, rank)
	local src = player
	local identifier = DBCore.Characters[src].identifier
	local pCid = DBCore.Characters[src].cid
	if DBFramework.Ranks[rank] then
		exports['db_database']:execute('UPDATE characters SET rank = @rank WHERE identifier = @identifier AND cid = @cid', {
			['@identifier'] = identifier,
			['@cid'] = pCid,
			['@rank'] = rank
		})
		TriggerClientEvent('db-base:updateRank', src, rank)
	else
		TriggerClientEvent('notification', src, rank..' rank not exist.')
	end
end

DBCore.addCash = function(player, amount)
	local identifier = player.identifier
	local pCid = player.cid
	local total = player.cash + amount
	-- if (player.cash > 0) then
		-- exports['db_database']:execute('SELECT * FROM characters WHERE identifier = @identifier AND cid = @cid', {['@identifier'] = identifier, ['@cid'] = pCid}, function(result)
			exports['db_database']:execute('UPDATE characters SET cash = @cash WHERE identifier = @identifier AND cid = @cid', {
				['@identifier'] = identifier, 
				['@cash'] = total,
				['@cid'] = pCid
			})
			TriggerClientEvent('db-base:updateCash', player.source, total)
		-- end)
	-- end
end

DBCore.removeCash = function(player, amount)
	local identifier = player.identifier
	local pCid = player.cid
	if player.cash - amount < 0 then return end
	exports['db_database']:execute('UPDATE characters SET cash = @cash WHERE identifier = @identifier AND cid = @cid', {
		['@identifier'] = identifier, 
		['@cid'] = pCid,
		['@cash'] = player.cash - amount
	})
	TriggerClientEvent('db-base:updateCash', player.source, player.cash - amount)
end

DBCore.setCash = function(player, amount)
	local identifier = player.identifier
	local pCid = player.cid
	if (amount > 0) then
		exports['db_database']:execute('UPDATE characters SET cash = @cash WHERE identifier = @identifier AND cid = @cid', {
			['@identifier'] = identifier,
			['@cash'] = amount,
			['@cid'] = pCid
		})

		TriggerClientEvent('notification', source, 'Your cash has been set to: $'..amount)
		TriggerClientEvent('db-base:updateCash', player.source, amount)
	else
		TriggerClientEvent('notification', player.source, 'Try Again',2)
	end
end

DBCore.giveCash = function(player, amount)
	local identifier = player.identifier
	local pCid = player.cid
	if (amount > 0) then
		local total = player.cash + amount
		exports['db_database']:execute('UPDATE characters SET cash = @cash WHERE identifier = @identifier AND cid = @cid', {
			['@identifier'] = identifier,
			['@cash'] = total,
			['@cid'] = pCid
		})
		TriggerClientEvent('notification', source,  'There is: $'..amount..' added to your cash')
		TriggerClientEvent('db-base:updateCash', player.source, total)
	end
end

-- BANK

DBCore.addBank = function(player, amount)
	local identifier = player.identifier
	local pCid = player.cid
	if (amount > 0) then
		local add = player.bank + amount
		exports['db_database']:execute('UPDATE characters SET bank = @bank WHERE identifier = @identifier AND cid = @cid', {
			['@identifier'] = identifier, 
			['@bank'] = add,
			['@cid'] = pCid
		})
		--need to add notification
		TriggerClientEvent('db-base:updateBank', player.source, add)
	end
end

DBCore.removeBank = function(player, amount)
	local identifier = player.identifier
	local pCid = player.cid
	if player.bank - amount < 0 then return end
	local add = player.bank - amount
	exports['db_database']:execute('UPDATE characters SET bank = @bank WHERE identifier = @identifier AND cid = @cid', {
		['@identifier'] = identifier, 
		['@bank'] = add,
		['@cid'] = pCid
	})
	--need to add notification
	TriggerClientEvent('db-base:updateBank', player.source, add)
end

DBCore.setBank = function(player, amount)
	local identifier = player.identifier
	local pCid = player.cid
	if (amount > 0) then
		exports['db_database']:execute('UPDATE characters SET bank = @bank WHERE identifier = @identifier AND cid = @cid', {
			['@identifier'] = identifier,
			['@bank'] = amount,
			['@cid'] = pCid
		})
		--need to change to notification
		TriggerClientEvent('notification', source, 'Your bank balance has been set to: ^*$'..amount)
		TriggerClientEvent('db-base:updateBank', player.source, amount)
	else
		TriggerClientEvent('notification', player.source, 'Try Again',2)
	end
end

DBCore.giveBank = function(player, amount)
	local identifier = player.identifier
	local pCid = player.cid
	if (amount > 0) then
		local total = player.bank + amount
		exports['db_database']:execute('UPDATE characters SET bank = @bank WHERE identifier = @identifier AND cid = @cid', {
			['@identifier'] = identifier,
			['@bank'] = total,
			['@cid'] = pCid
		})
		--need to change to notification
		TriggerClientEvent('notification', source, 'There is: ^*$'..amount..'^r added to your bank balance')
		TriggerClientEvent('db-base:updateBank', player.source, total)
	end
end

DBCore.AddCommand = function(command, callback, suggestion, arguments)
	DBCore.Commands[command] = {}
	DBCore.Commands[command].cmd = callback
	DBCore.Commands[command].arguments = arguments or -1

	if suggestion then
		if not suggestion.params or not type(suggestion.params) == "table" then suggestion.params = {} end
		if not suggestion.help or not type(suggestion.help) == "string" then suggestion.help = "" end

		DBCore.CommandsSuggestions[command] = suggestion
	end

	RegisterCommand(command, function(source, args)
		if((#args <= DBCore.Commands[command].arguments and #args == DBCore.Commands[command].arguments) or DBCore.Commands[command].arguments == -1)then
			callback(source, args, DBCore.Characters[source])
		end
	end, false)
end

DBCore.AddAdminCommand = function(command, rank, callback, callbackfailed, suggestion, arguments)
	DBCore.Commands[command] = {}
	DBCore.Commands[command].perm = math.maxinteger
	DBCore.Commands[command].rank = rank
	DBCore.Commands[command].cmd = callback
	DBCore.Commands[command].callbackfailed = callbackfailed
	DBCore.Commands[command].arguments = arguments or -1

	if suggestion then
		if not suggestion.params or not type(suggestion.params) == "table" then suggestion.params = {} end
		if not suggestion.help or not type(suggestion.help) == "string" then suggestion.help = "" end

		DBCore.CommandsSuggestions[command] = suggestion
	end

	--ExecuteCommand('add_ace group.' .. rank .. ' command.' .. command .. ' allow')

	RegisterCommand(command, function(source, args)
		local Source = source
		local pData = DBCore.Characters[Source]

		if(source ~= 0)then
			if pData ~= nil then
				if DBCore.HasPerms(source, DBCore.Commands[command].rank) then
					if((#args <= DBCore.Commands[command].arguments and #args == DBCore.Commands[command].arguments) or DBCore.Commands[command].arguments == -1)then
						callback(source, args, DBCore.Characters[source])
					end
				--else
					--TriggerClientEvent('notification', source, 'bruh, learn how to use',2)
				end
			end
		else
			if((#args <= DBCore.Commands[command].arguments and #args == DBCore.Commands[command].arguments) or DBCore.Commands[command].arguments == -1)then
				callback(source, args, DBCore.Characters[source])
			end
		end
	end)
end

DBCore.HasPerms = function(source, r)
	local _char = DBCore.Characters[source]
	if _char.rank == r or DBFramework.Ranks[_char.rank].rank > DBFramework.Ranks[r].rank then
		return true
	end
	return false
end

exports('AddAdminCommand', function(command, rank, callback, callbackfailed, suggestion, arguments)
	DBCore.AddAdminCommand(command, rank, callback, callbackfailed, suggestion, arguments)
end)

exports('AddCommand', function(command, callback, suggestion, arguments)
	DBCore.AddCommand(command, callback, suggestion, arguments)
end)

exports('GetCharacter', function(source)
	if DBCore.Characters[source] ~= nil then
		return DBCore.Characters[source]
	end
	return nil
end)

exports('GetCharacterByCitizenId', function(citizenid)
	for src, player in pairs(DBCore.Characters) do
		if DBCore.Characters[src].citizenid == citizenid then
			return DBCore.Characters[src]
		end
	end
	return nil
end)

exports('GetCharacterByPhone', function(num)
	for src, player in pairs(DBCore.Characters) do
		if DBCore.Characters[src].phone == num then
			return DBCore.Characters[src]
		end
	end
	return nil
end)

exports('GetCharacterByBankAccount', function(bankId)
	for src, player in pairs(DBCore.Characters) do
		if DBCore.Characters[src].bankAccount == bankId then
			return DBCore.Characters[src]
		end
	end
	return nil
end)


exports('GetCharacters', function()
	local players = {}
	for k, v in pairs(DBCore.Characters) do
		table.insert(players, k)
	end
	return players
end)

exports('clearInventory', function(source, id)
	DBCore.clearInventory(id)
end)

exports('SpawnVehicle', function(source, vehicle)
	DBCore.SpawnVehicle(source, vehicle)
end)

exports('deleteVehicle', function(source)
	DBCore.DeleteVehicle(source)
end)

exports('doesCharacterExist', function(identifier, callback)
	DBCore.doesCharacterExist(identifier, callback)
end)

exports('setRank', function(source, rank)
	DBCore.setRank(source, rank)
end)

exports('RegisterCallBack', function(name, cb)
	DBCore.ServerCallbacks[name] = cb
end)