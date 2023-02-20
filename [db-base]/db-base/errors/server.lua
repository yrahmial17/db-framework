RegisterServerEvent('db-errorlog')
AddEventHandler('db-errorlog', function(resource, error)
    local log = {
        {
            ["color"] = "12745742",
            ["title"] = "Error Log (" .. resource .. ") By " .. GetPlayerName(source),
            ["description"] = error,
        }
    }

    print("------------------ CLIENT ERROR IN RESOURCE: " .. resource.. '   By: '.. GetPlayerName(source))
    print(error)
    print("------------------ END OF CLIENT ERROR")

    PerformHttpRequest('https://discord.com/api/webhooks/892159010013339708/C-wRbMU-X210KrFLMNuC6YrlUPzCQZrVvmCEHx8aPNL4ueV_ReOZn4rmYZyJoB6R4_Pi', function(err, text, headers) end, 'POST', json.encode({username = "Error Logs", embeds = log}), { ['Content-Type'] = 'application/json' })
end)