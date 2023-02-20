DBCore 						= DBCore or {}
DBCore.Commands 			= {}
DBCore.CommandsSuggestions  = {}
DBCore.Characters			= {}
DBCore.offlineCharacter 	= {}
DBCore.lastPosition         = {}
DBCore.ServerCallbacks 		= {}
local serverStarted = false

RegisterServerEvent('DBCore:GetFunctions')
AddEventHandler('DBCore:GetFunctions', function(callback)
	callback(DBCore)
end)