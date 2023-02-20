DBCore = DBCore or {}
DBCore.offlineCharacter = {}
CreateThread(function()
    Wait(1500)
    TriggerEvent('deleteAllYP')
    TriggerEvent('deleteAllTweets')
    Wait(700)
    TriggerEvent("DeleteDrops&BrkenItem")
    Wait(700)
    DBCore['LoadFramework']['Started']()
    Wait(700)
    print('^4[DB-Framework] ^5DB-Framework Logs Loaded Successfully^7')
end)


DBCore.LoadFramework = {
	Started = function()
        print('\n^2=^1-^2-^3-^4-^5-^6-^7-^8-^1-^2-^3-^4-^5-^6-^7-^8-^1-^2-^3-^4-^5-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^8-^1-^2-^3-^4-^5-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^7-^9-^1-^2-^3-^4-^5-^7-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^8-^1=^7')
		print('^2= ^4██████╗ ██████╗       ███████╗██████╗  █████╗ ███╗   ███╗███████╗██╗    ██╗██████╗ ██╗  ██╗    ^2=')
		print('^3= ^4██╔══██╗██╔══██╗      ██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝██║    ██║██╔══██╗██║ ██╔╝    ^3=')
		print('^4= ^4██║  ██║██████╔╝█████╗█████╗  ██████╔╝███████║██╔████╔██║█████╗  ██║ █╗ ██║██████╔╝█████╔╝     ^4=')
		print('^5= ^4██║  ██║██╔══██╗╚════╝██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ██║███╗██║██╔══██╗██╔═██╗     ^5=')
		print('^6= ^4██████╔╝██████╔╝      ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗╚███╔███╔╝██║  ██║██║  ██╗    ^6=')
		print('^7= ^4╚═════╝ ╚═════╝       ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝    ^7=')
        print('^5=                          ^4██╗   ██╗^8██╗^4   ^8 ██████╗ ^7                                              ^5=')
        print('^6=                          ^4██║   ██║^8███║^4   ^8██╔═████╗^7                                             ^6=')
        print('^7=                          ^4██║   ██║^8╚██║^4   ^8██║██╔██║^7                                             ^7=')
        print('^8=                          ^4╚██╗ ██╔╝^8 ██║^4   ^8████╔╝██║^7                                             ^8=')
        print('^9=                          ^4 ╚████╔╝ ^8 ██║^4██╗^8╚██████╔╝^7                                             ^9=')
        print('^1=                          ^4  ╚═══╝  ^8 ╚═╝^4╚═╝^8 ╚═════╝ ^7                                             ^1=')
        print('^2=^1-^2-^3-^4-^5-^6-^7-^8-^1-^2-^3-^4-^5-^6-^7-^8-^1-^2-^3-^4-^5-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^8-^1-^2-^3-^4-^5-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^7-^9-^1-^2-^3-^4-^5-^7-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^8-^9-^1-^2-^3-^4-^5-^6-^7-^8-^1=^7')
        print('\n^4Welcome To DB-Framework.^7')
        Wait(1200)
        DBCore['LoadFramework']['LoadDataBase']()
	end,
    LoadDataBase = function()
        local loaded = 0
        print('\n^4[DB-Framework] ^5Loading DB-Framework Database Caches...^7')
        
        DBCore['LoadFramework'].loadCharacters(function(characters)
            print('^4[DB-Framework] ^5Characters Database Loaded '..DBCore.CountTable(characters)..' ^4 characters.\n')
            loaded = (loaded + 1)
        end)
        repeat Wait(700) until loaded == 1
        DBCore['LoadFramework'].loadInventory(function(items)
            print('^4[DB-Framework] ^5Inventory Database Loaded '..DBCore.CountTable(items)..' ^4 items.\n')
            loaded = (loaded + 1)
        end)
        repeat Wait(700) until loaded == 2
        DBCore['LoadFramework'].loadCards(function(cards)
            print('^4[DB-Framework] ^5CreditCards Database Loaded '..DBCore.CountTable(cards)..' ^4 cards.\n')
            loaded = (loaded + 1)
        end)
        repeat Wait(700) until loaded == 3
        DBCore['LoadFramework'].loadHouses(function(houses)
            print('^4[DB-Framework] ^5Houses Database Loaded '..DBCore.CountTable(houses)..' ^4 houses.\n')
            loaded = (loaded + 1)
        end)
        repeat Wait(700) until loaded == 4
        DBCore['LoadFramework'].loadVehicles(function(vehicles)
            print('^4[DB-Framework] ^5Vehicles Database Loaded '..DBCore.CountTable(vehicles)..' ^4 vehicles.\n')
            loaded = (loaded + 1)
        end)
        repeat Wait(700) until loaded == 5
        DBCore['LoadFramework'].loadOutfits(function(outfits)
            print('^4[DB-Framework] ^5Outfits Database Loaded '..DBCore.CountTable(outfits)..' ^4 outfits.\n')
            loaded = (loaded + 1)
        end)
        repeat Wait(700) until loaded == 6
        serverStarted = true
        print('^4[DB-Framework] ^5DB-Framework Loaded Successfully^7\n')
    end,
    loadCharacters = function(cb)
        local exec = DBCore["SQL"]["execute"]("select * from `characters`")
        if exec then
            cb(exec)
            if DBCore.CountTable(exec) > 0 then
                DBCore.offlineCharacter[exec[1].identifier] = SetOfflineCharacterData(exec[1])
            end
        else
            cb(nil)
        end
    end,
    loadInventory = function(cb)
        local exec = DBCore["SQL"]["execute"]("select * from `character_inventory`")
        if exec ~= nil then
            cb(exec)
        else
            cb(nil)
        end
    end,
    loadHouses = function(cb)
        local exec = DBCore["SQL"]["execute"]("select * from `character_houses`")
        if exec ~= nil then
            cb(exec)
        else
            cb(nil)
        end
    end,
    loadCards = function(cb)
        local exec = DBCore["SQL"]["execute"]("select * from `character_cards`")
        if exec ~= nil then
            cb(exec)
        else
            cb(nil)
        end
    end,
    loadVehicles = function(cb)
        local exec = DBCore["SQL"]["execute"]("select * from `character_vehicles`")
        if exec ~= nil then
            cb(exec)
        else
            cb(nil)
        end
    end,
    loadOutfits = function(cb)
        local exec = DBCore["SQL"]["execute"]("select * from `character_outfits`")
        if exec ~= nil then
            cb(exec)
        else
            cb(nil)
        end
    end
}
