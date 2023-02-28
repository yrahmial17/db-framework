RegisterServerEvent('db-death:reviveSV')
AddEventHandler('db-death:reviveSV', function(t)
	TriggerClientEvent('db-death:revive', t)
end)

RegisterServerEvent('db-death:reviveSV2')
AddEventHandler('db-death:reviveSV2', function()
	TriggerClientEvent('db-death:revive', source)
end)

local NancyEms = true

RegisterServerEvent('reviveGranted')
AddEventHandler('reviveGranted', function(t)
	TriggerClientEvent('db-death:revive', t)
end)

RegisterServerEvent('fuckthem')
AddEventHandler('fuckthem', function()
    local src = source
	local user = exports["db-base"]:GetCharacter(src)
    user.removeMoney(user.cash, 'cash')
    TriggerEvent("db-inventory:delete", user.citizenid)
end)

RegisterServerEvent('trycpr')
AddEventHandler('trycpr', function()
    local src = source
	local user = exports["db-base"]:GetCharacter(src)
    local price = 10000
    if user.cash >= price then
        user.removeMoney(price, 'cash')
        TriggerClientEvent('trycpr', source)
    else
        TriggerClientEvent('notification', source, "You can't afford that CPR",2)
    end
end)

RegisterServerEvent('serverCPR')
AddEventHandler('serverCPR', function()
	TriggerClientEvent('revive', source)
end)

RegisterServerEvent("ems:toggle")
AddEventHandler('ems:toggle', function(pAuto)
    if not pAuto then
        local pSrc = source
        TriggerClientEvent("notification", pSrc, ('Nancy has been %s!'):format(NancyEms and 'Disabled' or 'Enabled')) 
        NancyEms = not NancyEms
    else
        NancyEms = not NancyEms
    end
end)


RegisterServerEvent("attempt:check-in", function()
    local pSrc = source
    if NancyEms then
        TriggerClientEvent("db-hospitalization:checkin", pSrc, true)
    else
        TriggerClientEvent("notification", pSrc, "Nancy is disabled, please contact a doctor")
    end
end)