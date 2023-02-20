DBCore 							= DBCore or {}
DBCore.CurrentRequestId 		= 0
DBCore.ServerCallbacks 			= {}

--[[TODO
    CLIENT SELF FUNCTIONS
]]

DBCore.GetCharacter = function()
	if DBCore.LocalPlayer ~= nil then
		return DBCore.LocalPlayer
	end
	return nil
end

exports('GetCharacter', function()
	if DBCore.LocalPlayer ~= nil then
		return DBCore.LocalPlayer
	end
	return nil
end)

DBCore.SpawnVehicle = function(model, cb, coords, isnetworked)
    local model = (type(model)=="number" and model or GetHashKey(model))
    local coords = coords ~= nil and coords or DBCore.GetCoords(PlayerPedId())
    local isnetworked = isnetworked ~= nil and isnetworked or true

    RequestModel(model)
    while not HasModelLoaded(model) do
        Citizen.Wait(10)
    end

    local veh = CreateVehicle(model, coords.x, coords.y, coords.z, coords.a, isnetworked, false)
    local netid = NetworkGetNetworkIdFromEntity(veh)

	SetVehicleHasBeenOwnedByPlayer(vehicle,  true)
	SetNetworkIdCanMigrate(netid, true)
    SetVehicleNeedsToBeHotwired(veh, false)
    SetModelAsNoLongerNeeded(model)
	TriggerEvent("db-parking:addKeys",veh,GetVehicleNumberPlateText(veh))
    if cb ~= nil then
        cb(veh)
    end
end

exports('SpawnVehicle', function(model, cb, coords, isnetworked)
	DBCore.SpawnVehicle(model, cb, coords, isnetworked)
end)


DBCore.DeleteVehicle = function(vehicle)
    SetEntityAsMissionEntity(vehicle, false, true)
    DeleteVehicle(vehicle)
end

DBCore.GetVehicleInDirection = function()
	local playerPed    = PlayerPedId()
	local playerCoords = GetEntityCoords(playerPed)
	local inDirection  = GetOffsetFromEntityInWorldCoords(playerPed, 0.0, 5.0, 0.0)
	local rayHandle    = StartShapeTestRay(playerCoords, inDirection, 10, playerPed, 0)
	local numRayHandle, hit, endCoords, surfaceNormal, entityHit = GetShapeTestResult(rayHandle)

	if hit == 1 and GetEntityType(entityHit) == 2 then
		return entityHit
	end

	return nil
end

DBCore.GetClosestVehicle = function(source)
    local ped = GetPlayerPed(source)
    local pos = GetEntityCoords(ped, false)

    return GetClosestVehicle(pos.x, pos.y, pos.z, 3.0, 0, 70)
end

DBCore.TriggerServerCallback = function(name, cb, ...)
	DBCore.ServerCallbacks[DBCore.CurrentRequestId] = cb

	TriggerServerEvent('db-base:triggerServerCallback', name, DBCore.CurrentRequestId, ...)

	if DBCore.CurrentRequestId < 65535 then
		DBCore.CurrentRequestId = DBCore.CurrentRequestId + 1
	else
		DBCore.CurrentRequestId = 0
	end
end

exports('CallBack', function(name, cb, ...)
	DBCore.ServerCallbacks[DBCore.CurrentRequestId] = cb
	TriggerServerEvent('db-base:triggerServerCallback', name, DBCore.CurrentRequestId, ...)
	if DBCore.CurrentRequestId < 65535 then
		DBCore.CurrentRequestId = DBCore.CurrentRequestId + 1
	else
		DBCore.CurrentRequestId = 0
	end
end)

DBCore.SpawnLocalObject = function(model, coords, cb)
	local model = (type(model) == 'number' and model or GetHashKey(model))

	Citizen.CreateThread(function()
		RequestModel(model)

		while not HasModelLoaded(model) do
			Citizen.Wait(0)
		end

		local obj = CreateObject(model, coords.x, coords.y, coords.z, false, false, true)

		if cb ~= nil then
			cb(obj)
		end
	end)
end

DBCore.GetCharacters = function()
    local players = {}
    for _, player in ipairs(GetActivePlayers()) do
        local ped = GetPlayerPed(player)
        if DoesEntityExist(ped) then
            table.insert(players, player)
        end
    end
    return players
end

DBCore.DeleteObject = function(object)
	SetEntityAsMissionEntity(object, false, true)
	DeleteObject(object)
end

DBCore.GetClosestPlayer = function(coords)
	local players         = DBCore.GetCharacters()
	local closestDistance = -1
	local closestPlayer   = -1
	local coords          = coords
	local usePlayerPed    = false
	local playerPed       = PlayerPedId()
	local playerId        = PlayerId()

	if coords == nil then
		usePlayerPed = true
		coords       = GetEntityCoords(playerPed)
	end

	for i=1, #players, 1 do
		local target = GetPlayerPed(players[i])

		if not usePlayerPed or (usePlayerPed and players[i] ~= playerId) then
			local targetCoords = GetEntityCoords(target)
			local distance     = GetDistanceBetweenCoords(targetCoords, coords.x, coords.y, coords.z, true)

			if closestDistance == -1 or closestDistance > distance then
				closestPlayer   = players[i]
				closestDistance = distance
			end
		end
	end

	return closestPlayer, closestDistance
end

DBCore.GetCoords = function(entity)
    local coords = GetEntityCoords(entity, false)
    local heading = GetEntityHeading(entity)
    return {
        x = coords.x,
        y = coords.y,
        z = coords.z,
        a = heading
    }
end

DBCore.RequestAnimDict = function(animDict, cb)
	if not HasAnimDictLoaded(animDict) then
		RequestAnimDict(animDict)

		while not HasAnimDictLoaded(animDict) do
			Wait(1)
		end
	end

	if cb ~= nil then
		cb()
	end
end

function FetchVehProps(vehicle)	
  local color1, color2 = GetVehicleColours(vehicle)	
  local pearlescentColor, wheelColor = GetVehicleExtraColours(vehicle)	
  local extras = {}	
  local model2 = GetEntityModel(vehicle)
  local vehname = GetDisplayNameFromVehicleModel(model2)

  for id=0, 12 do	
    if DoesExtraExist(vehicle, id) then	
      local state = IsVehicleExtraTurnedOn(vehicle, id) == 1	
      extras[tostring(id)] = state	
    end	
  end	

  return {	
    model             = GetDisplayNameFromVehicleModel(model2),	

    plate             = GetVehicleNumberPlateText(vehicle),	
    plateIndex        = GetVehicleNumberPlateTextIndex(vehicle),	

    bodyHealth        = tonumber(string.format("%." .. (1 or 0) .. "f", GetVehicleBodyHealth(vehicle))),	
    engineHealth      = tonumber(string.format("%." .. (1 or 0) .. "f", GetVehicleEngineHealth(vehicle))),	

    fuelLevel         = exports["db-fuel"]:GetFuel(vehicle),	
    dirtLevel         = tonumber(string.format("%." .. (1 or 0) .. "f", GetVehicleDirtLevel(vehicle))),	
    color1            = color1,	
    color2            = color2,	

    pearlescentColor  = pearlescentColor,	
    wheelColor        = wheelColor,	

    wheels            = GetVehicleWheelType(vehicle),	
    windowTint        = GetVehicleWindowTint(vehicle),	

    neonEnabled       = {	
      IsVehicleNeonLightEnabled(vehicle, 0),	
      IsVehicleNeonLightEnabled(vehicle, 1),	
      IsVehicleNeonLightEnabled(vehicle, 2),	
      IsVehicleNeonLightEnabled(vehicle, 3)	
    },	

    extras            = extras,	

    neonColor         = table.pack(GetVehicleNeonLightsColour(vehicle)),	
    tyreSmokeColor    = table.pack(GetVehicleTyreSmokeColor(vehicle)),	

    modSpoilers       = GetVehicleMod(vehicle, 0),	
    modFrontBumper    = GetVehicleMod(vehicle, 1),	
    modRearBumper     = GetVehicleMod(vehicle, 2),	
    modSideSkirt      = GetVehicleMod(vehicle, 3),	
    modExhaust        = GetVehicleMod(vehicle, 4),	
    modFrame          = GetVehicleMod(vehicle, 5),	
    modGrille         = GetVehicleMod(vehicle, 6),	
    modHood           = GetVehicleMod(vehicle, 7),	
    modFender         = GetVehicleMod(vehicle, 8),	
    modRightFender    = GetVehicleMod(vehicle, 9),	
    modRoof           = GetVehicleMod(vehicle, 10),	

    modEngine         = GetVehicleMod(vehicle, 11),	
    modBrakes         = GetVehicleMod(vehicle, 12),	
    modTransmission   = GetVehicleMod(vehicle, 13),	
    modHorns          = GetVehicleMod(vehicle, 14),	
    modSuspension     = GetVehicleMod(vehicle, 15),	
    modArmor          = GetVehicleMod(vehicle, 16),	

    modTurbo          = IsToggleModOn(vehicle, 18),	
    modSmokeEnabled   = IsToggleModOn(vehicle, 20),	
    modXenon          = IsToggleModOn(vehicle, 22),	

    modFrontWheels    = GetVehicleMod(vehicle, 23),	
    modBackWheels     = GetVehicleMod(vehicle, 24),	

    modPlateHolder    = GetVehicleMod(vehicle, 25),	
    modVanityPlate    = GetVehicleMod(vehicle, 26),	
    modTrimA          = GetVehicleMod(vehicle, 27),	
    modOrnaments      = GetVehicleMod(vehicle, 28),	
    modDashboard      = GetVehicleMod(vehicle, 29),	
    modDashboardColour = GetVehicleDashboardColour(vehicle),	
    modInteriorColour = GetVehicleInteriorColour(vehicle),	
    modXenonColour = GetVehicleHeadlightsColour(vehicle),	
    modDial           = GetVehicleMod(vehicle, 30),	
    modDoorSpeaker    = GetVehicleMod(vehicle, 31),	
    modSeats          = GetVehicleMod(vehicle, 32),	
    modSteeringWheel  = GetVehicleMod(vehicle, 33),	
    modShifterLeavers = GetVehicleMod(vehicle, 34),	
    modAPlate         = GetVehicleMod(vehicle, 35),	
    modSpeakers       = GetVehicleMod(vehicle, 36),	
    modTrunk          = GetVehicleMod(vehicle, 37),	
    modHydrolic       = GetVehicleMod(vehicle, 38),	
    modEngineBlock    = GetVehicleMod(vehicle, 39),	
    modAirFilter      = GetVehicleMod(vehicle, 40),	
    modStruts         = GetVehicleMod(vehicle, 41),	
    modArchCover      = GetVehicleMod(vehicle, 42),	
    modAerials        = GetVehicleMod(vehicle, 43),	
    modTrimB          = GetVehicleMod(vehicle, 44),	
    modTank           = GetVehicleMod(vehicle, 45),	
    modWindows        = GetVehicleMod(vehicle, 46),	
    modLivery         = GetVehicleMod(vehicle, 48),	
    modoldLivery      = GetVehicleLivery(vehicle)	
  }	
end	

function SetVehProps(vehicle, props)	
	SetVehicleModKit(vehicle, 0)	
  
  if props.plate ~= nil then	
	SetVehicleNumberPlateText(vehicle, props.plate)	
  end	
  
  if props.plateIndex ~= nil then	
	SetVehicleNumberPlateTextIndex(vehicle, props.plateIndex)	
  end	
  
  if props.bodyHealth ~= nil then	
	SetVehicleBodyHealth(vehicle, props.bodyHealth + 0.0)	
  end	
  
  if props.engineHealth ~= nil then	
	SetVehicleEngineHealth(vehicle, props.engineHealth + 0.0)	
  end	
  
  if props.fuelLevel ~= nil then
    exports["db-fuel"]:SetFuel(vehicle, props.fuelLevel + 0.0)
	-- SetVehicleFuelLevel(vehicle, props.fuelLevel + 0.0)	
  end	
  
  if props.dirtLevel ~= nil then	
	SetVehicleDirtLevel(vehicle, props.dirtLevel + 0.0)	
  end	
  
  if props.color1 ~= nil then	
	local color1, color2 = GetVehicleColours(vehicle)	
	SetVehicleColours(vehicle, props.color1, color2)	
  end	
  
  if props.color2 ~= nil then	
	local color1, color2 = GetVehicleColours(vehicle)	
	SetVehicleColours(vehicle, color1, props.color2)	
  end	
  
  if props.pearlescentColor ~= nil then	
	local pearlescentColor, wheelColor = GetVehicleExtraColours(vehicle)	
	SetVehicleExtraColours(vehicle, props.pearlescentColor, wheelColor)	
  end	
  
  if props.wheelColor ~= nil then	
	local pearlescentColor, wheelColor = GetVehicleExtraColours(vehicle)	
	SetVehicleExtraColours(vehicle, pearlescentColor, props.wheelColor)	
  end	
  
  if props.wheels ~= nil then	
	SetVehicleWheelType(vehicle, props.wheels)	
  end	
  
  if props.windowTint ~= nil then	
	SetVehicleWindowTint(vehicle, props.windowTint)	
  end	
  
  if props.neonEnabled ~= nil then	
	SetVehicleNeonLightEnabled(vehicle, 0, props.neonEnabled[1])	
	SetVehicleNeonLightEnabled(vehicle, 1, props.neonEnabled[2])	
	SetVehicleNeonLightEnabled(vehicle, 2, props.neonEnabled[3])	
	SetVehicleNeonLightEnabled(vehicle, 3, props.neonEnabled[4])	
  end	
  
  if props.extras ~= nil then	
	for id,enabled in pairs(props.extras) do	
	  if enabled then	
		SetVehicleExtra(vehicle, tonumber(id), 0)	
	  else	
		SetVehicleExtra(vehicle, tonumber(id), 1)	
	  end	
	end	
  end	
  
  if props.neonColor ~= nil then	
	SetVehicleNeonLightsColour(vehicle, props.neonColor[1], props.neonColor[2], props.neonColor[3])	
  end	
  
  if props.modSmokeEnabled ~= nil then	
	ToggleVehicleMod(vehicle, 20, true)	
  end	
  
  if props.tyreSmokeColor ~= nil then	
	SetVehicleTyreSmokeColor(vehicle, props.tyreSmokeColor[1], props.tyreSmokeColor[2], props.tyreSmokeColor[3])	
  end	
  
  if props.modSpoilers ~= nil then	
	SetVehicleMod(vehicle, 0, props.modSpoilers, false)	
  end	
  
  if props.modFrontBumper ~= nil then	
	SetVehicleMod(vehicle, 1, props.modFrontBumper, false)	
  end	
  
  if props.modRearBumper ~= nil then	
	SetVehicleMod(vehicle, 2, props.modRearBumper, false)	
  end	
  
  if props.modSideSkirt ~= nil then	
	SetVehicleMod(vehicle, 3, props.modSideSkirt, false)	
  end	
  
  if props.modExhaust ~= nil then	
	SetVehicleMod(vehicle, 4, props.modExhaust, false)	
  end	
  
  if props.modFrame ~= nil then	
	SetVehicleMod(vehicle, 5, props.modFrame, false)	
  end	
  
  if props.modGrille ~= nil then	
	SetVehicleMod(vehicle, 6, props.modGrille, false)	
  end	
  
  if props.modHood ~= nil then	
	SetVehicleMod(vehicle, 7, props.modHood, false)	
  end	
  
  if props.modFender ~= nil then	
	SetVehicleMod(vehicle, 8, props.modFender, false)	
  end	
  
  if props.modRightFender ~= nil then	
	SetVehicleMod(vehicle, 9, props.modRightFender, false)	
  end	
  
  if props.modRoof ~= nil then	
	SetVehicleMod(vehicle, 10, props.modRoof, false)	
  end	
  
  if props.modEngine ~= nil then	
	SetVehicleMod(vehicle, 11, props.modEngine, false)	
  end	
  
  if props.modBrakes ~= nil then	
	SetVehicleMod(vehicle, 12, props.modBrakes, false)	
  end	
  
  if props.modTransmission ~= nil then	
	SetVehicleMod(vehicle, 13, props.modTransmission, false)	
  end	
  
  if props.modHorns ~= nil then	
	SetVehicleMod(vehicle, 14, props.modHorns, false)	
  end	
  
  if props.modSuspension ~= nil then	
	SetVehicleMod(vehicle, 15, props.modSuspension, false)	
  end	
  
  if props.modArmor ~= nil then	
	SetVehicleMod(vehicle, 16, props.modArmor, false)	
  end	
  
  if props.modTurbo ~= nil then	
	ToggleVehicleMod(vehicle,  18, props.modTurbo)	
  end	
  
  if props.modXenon ~= nil then	
	ToggleVehicleMod(vehicle,  22, props.modXenon)	
  end	
  
  if props.modFrontWheels ~= nil then	
	SetVehicleMod(vehicle, 23, props.modFrontWheels, false)	
  end	
  
  if props.modBackWheels ~= nil then	
	SetVehicleMod(vehicle, 24, props.modBackWheels, false)	
  end	
  
  if props.modPlateHolder ~= nil then	
	SetVehicleMod(vehicle, 25, props.modPlateHolder, false)	
  end	
  
  if props.modVanityPlate ~= nil then	
	SetVehicleMod(vehicle, 26, props.modVanityPlate, false)	
  end	
  
  if props.modTrimA ~= nil then	
	SetVehicleMod(vehicle, 27, props.modTrimA, false)	
  end	
  
  if props.modOrnaments ~= nil then	
	SetVehicleMod(vehicle, 28, props.modOrnaments, false)	
  end	
  
  if props.modDashboard ~= nil then	
	SetVehicleMod(vehicle, 29, props.modDashboard, false)	
  end	
  
  if props.modDashboardColour ~= nil then	
	SetVehicleDashboardColour(vehicle, props.modDashboardColour)	
  end	
  
  if props.modInteriorColour ~= nil then	
	SetVehicleInteriorColour(vehicle, props.modInteriorColour)	
  end	
  
  if props.modXenonColour ~= nil then	
	SetVehicleHeadlightsColour(vehicle, props.modXenonColour)	
  end	
  
  if props.modDial ~= nil then	
	SetVehicleMod(vehicle, 30, props.modDial, false)	
  end	
  
  if props.modDoorSpeaker ~= nil then	
	SetVehicleMod(vehicle, 31, props.modDoorSpeaker, false)	
  end	
  
  if props.modSeats ~= nil then	
	SetVehicleMod(vehicle, 32, props.modSeats, false)	
  end	
  
  if props.modSteeringWheel ~= nil then	
	SetVehicleMod(vehicle, 33, props.modSteeringWheel, false)	
  end	
  
  if props.modShifterLeavers ~= nil then	
	SetVehicleMod(vehicle, 34, props.modShifterLeavers, false)	
  end	
  
  if props.modAPlate ~= nil then	
	SetVehicleMod(vehicle, 35, props.modAPlate, false)	
  end	
  
  if props.modSpeakers ~= nil then	
	SetVehicleMod(vehicle, 36, props.modSpeakers, false)	
  end	
  
  if props.modTrunk ~= nil then	
	SetVehicleMod(vehicle, 37, props.modTrunk, false)	
  end	
  
  if props.modHydrolic ~= nil then	
	SetVehicleMod(vehicle, 38, props.modHydrolic, false)	
  end	
  
  if props.modEngineBlock ~= nil then	
	SetVehicleMod(vehicle, 39, props.modEngineBlock, false)	
  end	
  
  if props.modAirFilter ~= nil then	
	SetVehicleMod(vehicle, 40, props.modAirFilter, false)	
  end	
  
  if props.modStruts ~= nil then	
	SetVehicleMod(vehicle, 41, props.modStruts, false)	
  end	
  
  if props.modArchCover ~= nil then	
	SetVehicleMod(vehicle, 42, props.modArchCover, false)	
  end	
  
  if props.modAerials ~= nil then	
	SetVehicleMod(vehicle, 43, props.modAerials, false)	
  end	
  
  if props.modTrimB ~= nil then	
	SetVehicleMod(vehicle, 44, props.modTrimB, false)	
  end	
  
  if props.modTank ~= nil then	
	SetVehicleMod(vehicle, 45, props.modTank, false)	
  end	
  
  if props.modWindows ~= nil then	
	SetVehicleMod(vehicle, 46, props.modWindows, false)	
  end	
  
  if props.modLivery ~= nil then	
	SetVehicleMod(vehicle, 48, props.modLivery, false)	
	SetVehicleLivery(vehicle, props.modLivery)	
  end	
  
  if props.modoldLivery ~= nil then	
	SetVehicleLivery(vehicle, props.modoldLivery)	
  end
end


RegisterNetEvent('db-base:serverCallback')
AddEventHandler('db-base:serverCallback', function(requestId, ...)
	DBCore.ServerCallbacks[requestId](...)
	DBCore.ServerCallbacks[requestId] = nil
end)