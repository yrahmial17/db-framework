DBCore = DBCore or {}

RegisterNetEvent('db-base:tpm')
AddEventHandler('db-base:tpm', function()
	local WaypointHandle = GetFirstBlipInfoId(8)
	if DoesBlipExist(WaypointHandle) then
		local waypointCoords = GetBlipInfoIdCoord(WaypointHandle)

		for height = 1, 1000 do
			SetPedCoordsKeepVehicle(PlayerPedId(), waypointCoords["x"], waypointCoords["y"], height + 0.0)

			local foundGround, zPos = GetGroundZFor_3dCoord(waypointCoords["x"], waypointCoords["y"], height + 0.0)

			if foundGround then
				SetPedCoordsKeepVehicle(PlayerPedId(), waypointCoords["x"], waypointCoords["y"], height + 0.0)
				SetVehicleOnGroundProperly(GetVehiclePedIsUsing(PlayerPedId()))
				break
			end
			Wait(5)
		end
		TriggerEvent('notification', "Teleported.")
	else
		TriggerEvent('notification', "Please place your waypoint.")
	end
end)

RegisterNetEvent('db-base:GoToPlayer')
AddEventHandler('db-base:GoToPlayer', function(othersource)
	local coords = DBCore.GetCoords(GetPlayerPed(GetPlayerFromServerId(othersource)))
	local entity = PlayerPedId()
	if IsPedInAnyVehicle(entity, false) then
		entity = GetVehiclePedIsUsing(entity)
	end
	-- print(coords.x, coords.y, coords.z)
	SetEntityCoords(entity, coords.x, coords.y, coords.z)
	SetEntityHeading(entity, coords.a)
end)

RegisterNetEvent('db-base:GoToCoords')
AddEventHandler('db-base:GoToCoords', function(x, y, z)
	local entity = PlayerPedId()
	if IsPedInAnyVehicle(entity, false) then
		entity = GetVehiclePedIsUsing(entity)
	end
	SetEntityCoords(entity, x, y, z)
end)

RegisterNetEvent('db-base:revive')
AddEventHandler('db-base:revive', function() -- need to work with the ragdoll
	local coords = DBCore.GetCoords(PlayerPedId())
	NetworkResurrectLocalPlayer(coords.x, coords.y, coords.z+0.2, coords.a, true, false)
	SetPlayerInvincible(PlayerPedId(), false)
	ClearPedBloodDamage(PlayerPedId())
end)

RegisterNetEvent('db-base:SpawnVehicle')
AddEventHandler('db-base:SpawnVehicle', function(veh)
	local myPed = PlayerPedId()
	local vehicle = GetHashKey(veh)
    RequestModel(vehicle)
	while not HasModelLoaded(vehicle) do
		Wait(1)
	end
	local coords = GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0, 5.0, 0)
	local spawned_car = CreateVehicle(vehicle, coords, 64.55118,116.613,78.69622, true, false)
	SetVehicleOnGroundProperly(spawned_car)
	TriggerEvent("db-parking:addKeys",spawned_car,GetVehicleNumberPlateText(spawned_car))
	SetPedIntoVehicle(myPed, spawned_car, - 1)
	SetModelAsNoLongerNeeded(vehicle)
	SetVehRadioStation(spawned_car, "OFF")
	TriggerEvent('notification', 'Vehicle Spawned: '..veh)
end)

RegisterNetEvent('db-base:DeleteVehicle')
AddEventHandler('db-base:DeleteVehicle', function()
    local playerPed = PlayerPedId()
	local vehicle   = DBCore.GetClosestVehicle()

	if IsPedInAnyVehicle(playerPed, true) then
		vehicle = GetVehiclePedIsIn(playerPed, false)
	end

	if DoesEntityExist(vehicle) then
		DBCore.DeleteVehicle(vehicle)
		TriggerEvent('notification', 'Vehicle Deleted',3)
	end
end)

RegisterNetEvent('db-base:playSound')
AddEventHandler('db-base:playSound', function(sound, set)
	PlaySoundFrontend(-1, sound, set, false)
end)

RegisterNetEvent('db-base:refreshPlayer')
AddEventHandler('db-base:refreshPlayer', function()
	TriggerServerEvent('db-base:refreshPlayer', DBCore.LocalPlayer)
end)

--#################
--### DB-NoClip ###
--#################
noclipActive = false -- [[Wouldn't touch this.]]
noClipIndex = 1 -- [[Used to determine the index of the speeds table.]]
noclipEntity = nil

config = {
	controls = {
		-- [[Controls, list can be found here : https://docs.fivem.net/game-references/controls/]]
		openKey = 288, -- [[F2]]
		goUp = 85, -- [[Q]]
		goDown = 48, -- [[Z]]
		turnLeft = 34, -- [[A]]
		turnRight = 35, -- [[D]]
		goForward = 32,  -- [[W]]
		goBackward = 33, -- [[S]]
		changeSpeed = 21, -- [[L-Shift]]
	},

speeds = {
		-- [[If you wish to change the speeds or labels there are associated with then here is the place.]]
		{ label = "Very Slow", speed = 0},
		{ label = "Slow", speed = 0.5},
		{ label = "Normal", speed = 2},
		{ label = "Fast", speed = 4},
		{ label = "Very Fast", speed = 6},
		{ label = "Extremely Fast", speed = 10},
		{ label = "Extremely Fast v2.0", speed = 20},
		{ label = "Max Speed", speed = 25}
	},

offsets = {
		y = 0.5, -- [[How much distance you move forward and backward while the respective button is pressed]]
		z = 0.2, -- [[How much distance you move upward and downward while the respective button is pressed]]
		h = 3, -- [[How much you rotate. ]]
	},

	-- [[Background colour of the buttons. (It may be the standard black on first opening, just re-opening.)]]
	bgR = 0, -- [[Red]]
	bgG = 0, -- [[Green]]
	bgB = 0, -- [[Blue]]
	bgA = 80, -- [[Alpha]]
}

RegisterNetEvent("db-base:noclip")
AddEventHandler("db-base:noclip", function(t)
	noclipActive = not noclipActive
	msg = "Disabled"
	if noclipActive then
		msg = "Enabled"
	end
	
	if IsPedInAnyVehicle(PlayerPedId(), false) then
		noclipEntity = GetVehiclePedIsIn(PlayerPedId(), false)
	else
		noclipEntity = PlayerPedId()
	end

	SetEntityCollision(noclipEntity, not noclipActive, not noclipActive)
	FreezeEntityPosition(noclipEntity, noclipActive)
	SetEntityInvincible(noclipEntity, noclipActive)
	SetVehicleRadioEnabled(noclipEntity, not noclipActive) -- [[Stop radio from appearing when going upwards.]]

    TriggerEvent('notification', 'NoClip has been: '..msg,2)
    buttons = setupScaleform("instructional_buttons")
    currentSpeed = config.speeds[noClipIndex].speed
    TriggerEvent('db-base:startNoClip')
end)

function ButtonMessage(text)
    BeginTextCommandScaleformString("STRING")
    AddTextComponentScaleform(text)
    EndTextCommandScaleformString()
end

function Button(ControlButton)
    N_0xe83a3e3557a56640(ControlButton)
end

function setupScaleform(scaleform)

    local scaleform = RequestScaleformMovie(scaleform)

    while not HasScaleformMovieLoaded(scaleform) do
        Citizen.Wait(1)
    end

    PushScaleformMovieFunction(scaleform, "CLEAR_ALL")
    PopScaleformMovieFunctionVoid()
    
    PushScaleformMovieFunction(scaleform, "SET_CLEAR_SPACE")
    PushScaleformMovieFunctionParameterInt(200)
    PopScaleformMovieFunctionVoid()
    
    PushScaleformMovieFunction(scaleform, "SET_DATA_SLOT")
    PushScaleformMovieFunctionParameterInt(4)
    Button(GetControlInstructionalButton(2, config.controls.goUp, true))
    ButtonMessage("Go Up")
    PopScaleformMovieFunctionVoid()

    PushScaleformMovieFunction(scaleform, "SET_DATA_SLOT")
    PushScaleformMovieFunctionParameterInt(3)
    Button(GetControlInstructionalButton(2, config.controls.goDown, true))
    ButtonMessage("Go Down")
    PopScaleformMovieFunctionVoid()

    PushScaleformMovieFunction(scaleform, "SET_DATA_SLOT")
    PushScaleformMovieFunctionParameterInt(2)
    Button(GetControlInstructionalButton(1, config.controls.turnRight, true))
    Button(GetControlInstructionalButton(1, config.controls.turnLeft, true))
    ButtonMessage("Turn Left/Right")
    PopScaleformMovieFunctionVoid()

    PushScaleformMovieFunction(scaleform, "SET_DATA_SLOT")
    PushScaleformMovieFunctionParameterInt(1)
    Button(GetControlInstructionalButton(1, config.controls.goBackward, true))
    Button(GetControlInstructionalButton(1, config.controls.goForward, true))
    ButtonMessage("Go Forwards/Backwards")
    PopScaleformMovieFunctionVoid()

    PushScaleformMovieFunction(scaleform, "SET_DATA_SLOT")
    PushScaleformMovieFunctionParameterInt(0)
    Button(GetControlInstructionalButton(2, config.controls.changeSpeed, true))
    ButtonMessage("Change Speed ("..config.speeds[noClipIndex].label..")")
    PopScaleformMovieFunctionVoid()

    PushScaleformMovieFunction(scaleform, "DRAW_INSTRUCTIONAL_BUTTONS")
    PopScaleformMovieFunctionVoid()

    PushScaleformMovieFunction(scaleform, "SET_BACKGROUND_COLOUR")
    PushScaleformMovieFunctionParameterInt(config.bgR)
    PushScaleformMovieFunctionParameterInt(config.bgG)
    PushScaleformMovieFunctionParameterInt(config.bgB)
    PushScaleformMovieFunctionParameterInt(config.bgA)
    PopScaleformMovieFunctionVoid()

    return scaleform
end

RegisterNetEvent('db-base:startNoClip')
AddEventHandler('db-base:startNoClip', function()
    while noclipActive do
        Citizen.Wait(1)
            DrawScaleformMovieFullscreen(buttons)

            local yoff = 0.0
            local zoff = 0.0

            if IsControlJustPressed(1, config.controls.changeSpeed) then
                if noClipIndex ~= 8 then
                    noClipIndex = noClipIndex+1
                    currentSpeed = config.speeds[noClipIndex].speed
                else
                    currentSpeed = config.speeds[1].speed
                    noClipIndex = 1
                end
                setupScaleform("instructional_buttons")
            end

            if IsControlPressed(0, config.controls.goForward) then
                yoff = config.offsets.y
            end
            
            if IsControlPressed(0, config.controls.goBackward) then
                yoff = -config.offsets.y
            end
            
            if IsControlPressed(0, config.controls.turnLeft) then
                SetEntityHeading(noclipEntity, GetEntityHeading(noclipEntity)+config.offsets.h)
            end
            
            if IsControlPressed(0, config.controls.turnRight) then
                SetEntityHeading(noclipEntity, GetEntityHeading(noclipEntity)-config.offsets.h)
            end
            
            if IsControlPressed(0, config.controls.goUp) then
                zoff = config.offsets.z
            end
            
            if IsControlPressed(0, config.controls.goDown) then
                zoff = -config.offsets.z
            end
            
            local newPos = GetOffsetFromEntityInWorldCoords(noclipEntity, 0.0, yoff * (currentSpeed + 0.3), zoff * (currentSpeed + 0.3))
            local heading = GetEntityHeading(noclipEntity)
            SetEntityVelocity(noclipEntity, 0.0, 0.0, 0.0)
            SetEntityRotation(noclipEntity, 0.0, 0.0, 0.0, 0, false)
            SetEntityHeading(noclipEntity, heading)
            SetEntityCoordsNoOffset(noclipEntity, newPos.x, newPos.y, newPos.z, noclipActive, noclipActive, noclipActive)
    end
end)