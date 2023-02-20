DBCore = DBCore or {}
DBCore.LocalPlayer = {}

RegisterNetEvent('DBCore:GetFunctions')
AddEventHandler('DBCore:GetFunctions', function(callback)
	callback(DBCore)
end)

RegisterNetEvent('db-base:characterData')
AddEventHandler('db-base:characterData', function(Data)
	DBCore.LocalPlayer = Data
	-- print(DBCore.LocalPlayer["ymstyle"])
	-- DBCore.LocalPlayer["addMoney"](500, "cash")
end)

isOnline = false

RegisterNetEvent('db-base:characterSpawned')
AddEventHandler('db-base:characterSpawned', function()
    isOnline = true
	STARTGAMEPLAY()
	print("[db-base] Player Init Loaded")
end)