RegisterServerEvent('db_exports:money')
AddEventHandler('db_exports:money', function(amount, action, account)
    local src = source
    local _char = exports['db-base']:GetCharacter(src)
    if (account == 'cash') then
        if (action == 'remove') then
            _char.removeMoney(amount, 'cash')
        elseif (action == 'add') then
            local _char = exports['db-base']:GetCharacter(src)
            _char.addMoney(amount, 'cash')
        end
    elseif (account == 'bank') then
        if (action == 'remove') then
            _char.removeMoney(amount, 'bank')
        elseif (action == 'add') then
            local _char = exports['db-base']:GetCharacter(src)
            _char.addMoney(amount, 'bank')
        end
    end
end)

RegisterServerEvent('db_exports:DoctorCount')
AddEventHandler('db_exports:DoctorCount', function()
	local amount = 0
	for k, v in pairs(exports['db-base']:GetCharacters()) do
        local _char = exports['db-base']:GetCharacter(v)
        if _char ~= nil then 
            if (_char:job().name == 'ems') then
                amount = amount + 1
            end
        end
	end
    TriggerClientEvent("db_exports:SetDoctorCount", -1, amount)
end)

RegisterServerEvent('db_exports:OfficerCount')
AddEventHandler('db_exports:OfficerCount', function()
	local amount = 0
	for k, v in pairs(exports['db-base']:GetCharacters()) do
        local _char = exports['db-base']:GetCharacter(v)
        if _char ~= nil then 
            if (_char:job().name == 'police') then
                amount = amount + 1
            
            end
        end
	end
    TriggerClientEvent("db_exports:SetOfficerCount", -1, amount)
end)

RegisterCommand("money", function(source)
	local _char = exports['db-base']:GetCharacter(source)
	TriggerClientEvent('notification', source, 'Cash: '.._char.cash..' | Bank: '.._char.bank)
end)