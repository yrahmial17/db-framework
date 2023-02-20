DBCore = DBCore or {}
local pUrl;
local ped;
local isFirst = false;
local loading = true
local Cam;
local charCam;
local citizenid;
local isDefault;
local drawable_names = {"face", "masks", "hair", "torsos", "legs", "bags", "shoes", "neck", "undershirts", "vest", "decals", "jackets"}
local prop_names = {"hats", "glasses", "earrings", "mouth", "lhand", "rhand", "watches", "braclets"}
local head_overlays = {"Blemishes","FacialHair","Eyebrows","Ageing","Makeup","Blush","Complexion","SunDamage","Lipstick","MolesFreckles","ChestHair","BodyBlemishes","AddBodyBlemishes"}
local face_features = {"Nose_Width","Nose_Peak_Hight","Nose_Peak_Lenght","Nose_Bone_High","Nose_Peak_Lowering","Nose_Bone_Twist","EyeBrown_High","EyeBrown_Forward","Cheeks_Bone_High","Cheeks_Bone_Width","Cheeks_Width","Eyes_Openning","Lips_Thickness","Jaw_Bone_Width","Jaw_Bone_Back_Lenght","Chimp_Bone_Lowering","Chimp_Bone_Lenght","Chimp_Bone_Width","Chimp_Hole","Neck_Thikness"}
local vehicle = nil
local vehicleBack = nil
local isTrainMoving = false;

function Init()
    -- Character_list(true) 
    SetCharacterLoginCam()
    spawnTrain()
    Wait(250)
    SetNuiFocus(true, true)
    SendNUIMessage({
        ["action"] = "characters-list",
    })
end
function SetCharacterLoginCam()
	charCam = CreateCam("DEFAULT_SCRIPTED_CAMERA", 1)
	local camCoords = {-3968.05, 2015.41, 502.3 }
    SetEntityCoordsNoOffset(PlayerPedId(), vector3(-3971.05, 2015.65, 500.92 ), false, false, false, false)
	SetCamRot(charCam, -14.0, 0.0, 250.0, 2)
	SetCamCoord(charCam, camCoords[1], camCoords[2], camCoords[3])
	StopCamShaking(charCam, true)
	SetCamFov(charCam, 50.0)
	SetCamActive(charCam, true)
	RenderScriptCams(true, false, 0, true, true)
end

Character_close = function(data)
    -- Init(data);
    SetNuiFocus(false, false);
    SendNUIMessage(
        {
            ["action"] = "characters-close";
        }
    )
end

RegisterNetEvent('db-multicharacters:setupCharacters')
AddEventHandler('db-multicharacters:setupCharacters', function(data)
    SendNUIMessage(
        {
            ["action"] = "setup";
            ["chars"] = data;
        }
    );
end)

-- RegisterNetEvent('db-base:SessionStarted')
-- AddEventHandler('db-base:SessionStarted', function()
--     print("[db-base] Init Session Started.")
--     InitSession();
-- end)

RegisterNetEvent('db-multicharacters:init')
AddEventHandler('db-multicharacters:init', function()
    SetNuiFocus(false, false)

    FreezeEntityPosition(PlayerPedId(), true)
    SetEntityCoords(PlayerPedId(), -812.23, 182.54, 76.74)
    Init(true);
    print("Done Init")
end)

RegisterNUICallback('createPed', function(fuck)
    local cid = tonumber(fuck.cid)
    resetPed()
    Wait(100);
    TriggerServerEvent("db-multicharacters:GetCharacter", cid)
    TriggerServerEvent("db-multicharacters:pedshit", cid)
    for i=1,25 do
        local posoffset = GetCamCoord(charCam)
        local setpos = VecLerp(posoffset.x,posoffset.y,posoffset.z, -3965.88,2014.55, 501.6, i/30, true)
        SetCamCoord(charCam, setpos)
        Wait(15)
    end
end)

RegisterNUICallback('PlayerList', function(fuck)
    TriggerServerEvent('db-multicharacters:GetPlayers')
end)

RegisterNetEvent("db-multicharacters:GetPlayers")
AddEventHandler("db-multicharacters:GetPlayers", function(id, players, max)
	if id and players then
        SendNUIMessage(
            {
                ["action"] = "PlayerList";
                ["id"] = id;
                ["players"] = players;
                ["max"] = max;
            }
        );
    end
end)

RegisterNetEvent("db-multicharacters:getPed", function(data)
    if ped ~= nil then
        SetEntityAsMissionEntity(ped, true, true);
        DeleteEntity(ped);
    end
    ped = nil
    local model = data.model ~= nil and tonumber(data.model) or 1885233650
    if model ~= nil then
        CreateThread(function()
            RequestModel(model)
            while not HasModelLoaded(model) do
                Wait(0)
            end
            ped = CreatePed(2, model, -3962.3964707031, 2013.4567805078, 500.91247558594, 67.434899902344, false, true)
            SetPedComponentVariation(ped, 0, 0, 0, 2)
            FreezeEntityPosition(ped, false)
            SetEntityInvincible(ped, true)
            PlaceObjectOnGroundProperly(ped)
            SetBlockingOfNonTemporaryEvents(ped, true)
            SetClothing(ped, data.drawables, data.props, data.drawtextures, data.proptextures)
            SetFace(ped, data.headBlend, data.hairColor, data.headStructure, data.headOverlay)
            local anim = "mp_player_int_uppergang_sign_b"	
            LoadAnim( anim )
            TaskPlayAnim( ped, anim, "mp_player_int_gang_sign_b", 8.0, 1.0, -1, 49, 0, 0, 0, 0 )        
        end)
    else
        CreateThread(function()
            local randommodels = {
                "mp_m_freemode_01",
                "mp_f_freemode_01",
            }
            local model = GetHashKey(randommodels[math.random(1, #randommodels)])
            RequestModel(model)
            while not HasModelLoaded(model) do
                Wait(0)
            end
            ped = CreatePed(2, model, -3962.3964707031, 2013.4567805078, 500.91247558594, 67.434899902344, false, true)
            SetPedComponentVariation(ped, 0, 0, 0, 2)
            FreezeEntityPosition(ped, false)
            SetEntityInvincible(ped, true)
            PlaceObjectOnGroundProperly(ped)
            SetBlockingOfNonTemporaryEvents(ped, true)
            local anim = "mp_player_int_uppergang_sign_b"	
            LoadAnim( anim )
            TaskPlayAnim( ped, anim, "mp_player_int_gang_sign_b", 8.0, 1.0, -1, 49, 0, 0, 0, 0 )        
        end)
    end
end)


RegisterNetEvent("db-multicharacters:GetCharacter", function(data)
    SendNUIMessage(
        {
            ["action"] = "select";
            ["chars"] = data;
        }
    );
end)

RegisterNUICallback('selectCharacter', function(data)
    local cid = tonumber(data.cid)
    resetPed()
    Character_close()
    TriggerServerEvent('db-multicharacters:charSelect', cid, false)
    SetNuiFocus(false, false);
    -- TriggerEvent("spawnselector", true)
    SetEntityVisible(PlayerPedId(), true)
    deleteTrain()
end)

RegisterNUICallback('deleteCharacter', function(data)
    local cid = tonumber(data.cid)
    resetPed()
    TriggerServerEvent('db-multicharacters:deleteChar', cid)
    Wait(300)
end)

RegisterNUICallback('createCharacter', function(data)
    local charData = data.charData
    resetPed()
    TriggerServerEvent('db-multicharacters:createCharacter', charData)
    Wait(300)
    TriggerServerEvent('db-multicharacters:charSelect', charData.cid, true)
    isFirst = true
    Character_close()
    SetNuiFocus(false, false);
    setClothingForChar()
end)


function setClothingForChar()
    SetEntityVisible(PlayerPedId(), true)
    SetEntityCoords(PlayerPedId(),-3963.54,2013.95, 499.92)
    SetEntityHeading(PlayerPedId(),64.71)
    SetGameplayCamRelativeHeading(180.0)
    SetGameplayCamRelativePitch(1.0, 1.0)
    Wait(100)
    for i=1,25 do
        local posoffset = GetCamCoord(charCam)
        local setpos = VecLerp(posoffset.x,posoffset.y,posoffset.z, -3965.88,2014.55, 501.6, i/30, true)
        SetCamCoord(charCam, setpos)
        Wait(15)
    end
    local gender = DBCore["LocalPlayer"]["sex"]
    if gender ~= "Male" then
        SetSkin(GetHashKey("mp_f_freemode_01"), true)
    else
        SetSkin(GetHashKey("mp_m_freemode_01"), true)
    end
    TriggerEvent("db-clothing:openClothing")
    TriggerEvent("db-clothing:inSpawn", true)
    SetEntityHeading(PlayerPedId(),64.71)
    SetGameplayCamRelativeHeading(180.0)
    SetGameplayCamRelativePitch(4.0, 1.0)
end

RegisterNetEvent("db-multicharacters:finishedClothing")
AddEventHandler("db-multicharacters:finishedClothing", function(endType)
    local playerped = PlayerPedId()
    local playerCoords = GetEntityCoords(playerped)
    local pos = vector3(-3965.88,2014.55, 501.6)
    local distance = #(playerCoords - pos)

    TriggerEvent("db-clothing:inSpawn", false)

    if distance <= 10 then
        SetEntityVisible(PlayerPedId(), true)
    	if endType == "Finished" then
            DoScreenFadeOut(450)
            Wait(450)
    		spawnChar()
            TriggerServerEvent("db-multicharacters:licenses") -- todo add licenses
    	else
    		InitSession(true)
    	end
    end	
end)

function defaultSet()
    SetTimecycleModifier('default')
    SetEntityVisible(PlayerPedId(), true)
end

function resetPed()
    if ped ~= nil then
        SetEntityAsMissionEntity(ped, true, true);
        DeleteEntity(ped);
    end
    ped = nil
end

function spawnTrain()
	local tempmodel = GetHashKey("metrotrain")
	RequestModel(tempmodel)
	while not HasModelLoaded(tempmodel) do
		RequestModel(tempmodel)
		Citizen.Wait(0)
	end
    local coords = vector3(-3948.49,2036.35,499.1)
    vehicle = CreateVehicle(tempmodel, coords, 160.0, false, false)
    FreezeEntityPosition(vehicle, true)
     
    local heading = GetEntityHeading(vehicle)
    local coords = GetOffsetFromEntityInWorldCoords(vehicle, 0.0, -11.0, 0.0)

    vehicleBack = CreateVehicle(tempmodel, coords, 158.0, false, false)
    FreezeEntityPosition(vehicleBack, true)
    AttachEntityToEntity(vehicleBack , vehicle , 51 , 0.0, -11.0, 0.0, 180.0, 180.0, 0.0, false, false, false, false, 0, true)

    Citizen.CreateThread(function()
    	isTrainMoving = true
	    for i=1,100 do
	    	local posoffset = GetOffsetFromEntityInWorldCoords(vehicle, 0.0, 0.0, 0.0)
	    	local setpos = VecLerp(-3948.49,2036.35,499.1, -3957.58,2008.75, 499.1, i/100, true)
	    	SetEntityCoords(vehicle,setpos)
	  		Wait(15)
	    end
	    isTrainMoving = false
	end)
end

function deleteTrain()
	if vehicle ~= nil then
		DeleteEntity(vehicle)
		DeleteEntity(vehicleBack)
	end
end

function VecLerp(x1, y1, z1, x2, y2, z2, l, clamp)
    if clamp then
        if l < 0.0 then l = 0.0 end
        if l > 1.0 then l = 1.0 end
    end
    local x = Lerp(x1, x2, l)
    local y = Lerp(y1, y2, l)
    local z = Lerp(z1, z2, l)
    return vector3(x, y, z)
end

function Lerp(a, b, t)
    return a + (b - a) * t
end

function spawnChar()
    deleteTrain()
    -- SetPlayerInvincible(PlayerPedId(), true)
    TriggerEvent("db-base:initial")
    TriggerServerEvent('db-multicharacters:visiable')
end

------------------------------------ Clothing shit------------------------------------------

function SetSkin(model, setDefault)
    SetEntityInvincible(PlayerPedId(),true)
    if IsModelInCdimage(model) and IsModelValid(model) then
        RequestModel(model)
        while (not HasModelLoaded(model)) do
            Citizen.Wait(0)
        end

        SetPlayerModel(PlayerId(), model)
        SetModelAsNoLongerNeeded(model)
        player = GetPlayerPed(-1)
        FreezePedCameraRotation(player, true)
        
        if (model ~= `mp_f_freemode_01` and model ~= `mp_m_freemode_01`) then
            SetPedRandomComponentVariation(GetPlayerPed(-1), true)
        else
            isDefault = true
            SetPedHeadBlendData(player, 0, 0, 0, 15, 0, 0, 0, 1.0, 0, false)
            SetPedComponentVariation(player, 11, 0, 11, 0)
            SetPedComponentVariation(player, 8, 0, 1, 0)
            SetPedComponentVariation(player, 6, 1, 2, 0)
            SetPedHeadOverlayColor(player, 1, 1, 0, 0)
            SetPedHeadOverlayColor(player, 2, 1, 0, 0)
            SetPedHeadOverlayColor(player, 4, 2, 0, 0)
            SetPedHeadOverlayColor(player, 5, 2, 0, 0)
            SetPedHeadOverlayColor(player, 8, 2, 0, 0)
            SetPedHeadOverlayColor(player, 10, 1, 0, 0)
            SetPedHeadOverlay(player, 1, 0, 0.0)
            SetPedHairColor(player, 1, 1)
        end
        
    end
    SetEntityInvincible(PlayerPedId(),false)
end

function SetClothing(ped, drawables, props, drawTextures, propTextures)
    for i = 1, #drawable_names do
        if drawables[0] == nil then
            if drawable_names[i] == "undershirts" and drawables[tostring(i-1)][2] == -1 then
                SetPedComponentVariation(ped, i-1, 15, 0, 2)
            else
                SetPedComponentVariation(ped, i-1, drawables[tostring(i-1)][2], drawTextures[i][2], 2)
            end
        else
            if drawable_names[i] == "undershirts" and drawables[i-1][2] == -1 then
                SetPedComponentVariation(ped, i-1, 15, 0, 2)
            else
                SetPedComponentVariation(ped, i-1, drawables[i-1][2], drawTextures[i][2], 2)
            end
        end
    end

    for i = 1, #prop_names do
        local propZ = (drawables[0] == nil and props[tostring(i-1)][2] or props[i-1][2])
        ClearPedProp(ped, i-1)
        SetPedPropIndex(ped,i-1,propZ,propTextures[i][2], true)
    end
end

function SetFace(player, head, haircolor, headStructure, headOverlay)
    if head then
        SetPedHeadBlendData(player,
            tonumber(head['shapeFirst']),
            tonumber(head['shapeSecond']),
            tonumber(head['shapeThird']),
            tonumber(head['skinFirst']),
            tonumber(head['skinSecond']),
            tonumber(head['skinThird']),
            tonumber(head['shapeMix']),
            tonumber(head['skinMix']),
            tonumber(head['thirdMix']),
        false)
    end

    if headStructure then
        for i = 1, #face_features do
            SetPedFaceFeature(player, i-1, headStructure[i])
        end
    end

    if haircolor then
        SetPedHairColor(player, tonumber(haircolor[1]), tonumber(haircolor[2]))
    end

    if headOverlay then
        if json.encode(headOverlay) ~= "[]" then
            for i = 1, #head_overlays do
                SetPedHeadOverlay(player,  i-1, tonumber(headOverlay[i].overlayValue),  tonumber(headOverlay[i].overlayOpacity))
            end
    
            SetPedHeadOverlayColor(player, 0, 0, tonumber(headOverlay[1].firstColour), tonumber(headOverlay[1].secondColour))
            SetPedHeadOverlayColor(player, 1, 1, tonumber(headOverlay[2].firstColour), tonumber(headOverlay[2].secondColour))
            SetPedHeadOverlayColor(player, 2, 1, tonumber(headOverlay[3].firstColour), tonumber(headOverlay[3].secondColour))
            SetPedHeadOverlayColor(player, 3, 0, tonumber(headOverlay[4].firstColour), tonumber(headOverlay[4].secondColour))
            SetPedHeadOverlayColor(player, 4, 2, tonumber(headOverlay[5].firstColour), tonumber(headOverlay[5].secondColour))
            SetPedHeadOverlayColor(player, 5, 2, tonumber(headOverlay[6].firstColour), tonumber(headOverlay[6].secondColour))
            SetPedHeadOverlayColor(player, 6, 0, tonumber(headOverlay[7].firstColour), tonumber(headOverlay[7].secondColour))
            SetPedHeadOverlayColor(player, 7, 0, tonumber(headOverlay[8].firstColour), tonumber(headOverlay[8].secondColour))
            SetPedHeadOverlayColor(player, 8, 2, tonumber(headOverlay[9].firstColour), tonumber(headOverlay[9].secondColour))
            SetPedHeadOverlayColor(player, 9, 0, tonumber(headOverlay[10].firstColour), tonumber(headOverlay[10].secondColour))
            SetPedHeadOverlayColor(player, 10, 1, tonumber(headOverlay[11].firstColour), tonumber(headOverlay[11].secondColour))
            SetPedHeadOverlayColor(player, 11, 0, tonumber(headOverlay[12].firstColour), tonumber(headOverlay[12].secondColour))
        end
    end
end

function LoadAnim(dict)
    while not HasAnimDictLoaded(dict) do
      RequestAnimDict(dict)
      Wait(10)
    end
end


local playerHolding = {}
local isNear = false
Citizen.CreateThread(function()
	exports["db-polyzone"]:AddBoxZone("spawnZone", vector3(-3962.55, 2014.91, 500.91), 31.2, 20.2,  {
		name="spawnZone",
        heading=340,
        minZ=498.51,
        maxZ=506.31
    })

end)


local listening = false

function checkPlayers()

    listening = true
    
    Citizen.CreateThread(function()
        while listening do
            local tempTable = {}
            local players = GetActivePlayers()
            local ped = PlayerPedId()
            for index,value in pairs(players) do
                local target = GetPlayerPed(value)
                if(target ~= ped) then
                    local targetCoords = GetEntityCoords(GetPlayerPed(value), 0)
                    local distance = #(vector3(-3963.54,2013.95, 499.92) - vector3(targetCoords["x"], targetCoords["y"], targetCoords["z"]))
                    if(distance < 10.0) then
                        tempTable[#tempTable+1] = value
                    end
                end
            end

            playerHolding = {}
            playerHolding = shallowCopy(tempTable)
            Citizen.Wait(1000)
        end
        playerHolding = {}
    end)


    Citizen.CreateThread(function()
        while listening do
            for index,value in ipairs(playerHolding) do
                if(value ~= nil) then
                    NetworkConcealPlayer(value,true,false)
                end
            end
            DisableAllControlActions(0)
            DisableAllControlActions(1)
            Citizen.Wait(0)
        end
    end)
end

AddEventHandler("db-polyzone:enter", function(name)
    if name ~= "spawnZone" then return end
    checkPlayers()
end)
AddEventHandler("db-polyzone:exit", function(name)
    if name ~= "spawnZone" then return end
    listening = false
end)


function shallowCopy(original) -- nopixel becuase of liron(gay).
    local copy = {}
    for key, value in pairs(original) do
        copy[key] = value
    end
    return copy
end