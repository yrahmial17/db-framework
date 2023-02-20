DBCore = DBCore or {};
DBCore["init_loaded"] = false;

Citizen.CreateThread(function()
    while true do
        Wait(400)
        if NetworkIsSessionStarted() then
            TriggerEvent("db-base:SessionStarted")
            -- DBCore["Initialize"]()
            return
        end
        -- Wait(400)
    end
end)
DBCore["Initialize"] = function()
    -- loading()
    DBCore["SessionStarted"]()
    
    -- TriggerServerEvent("db-base:SessionStarted")
end
DBCore["SessionStarted"] = function()
    local loaded = false;
    TriggerEvent("whenyouworkinghardfthenyourmoneystartexpandin", false)
    Citizen.CreateThread(function()
        TriggerEvent("inSpawn",true)
		SetEntityCoordsNoOffset(PlayerPedId(), vector3(-3972.28, 2017.22, 500.92), false, false, false, false)
		FreezeEntityPosition(PlayerPedId(), true)
        while not HasCollisionForModelLoaded(GetHashKey("sp_01_station")) or not HasCollisionLoadedAroundEntity(PlayerPedId()) or not HasModelLoaded(GetHashKey("sp_01_station")) do
            RequestCollisionAtCoord(-3972.28, 2017.22, 500.92)
            print("Loading Collision")
            Wait(0)
        end    
        TriggerServerEvent('db-multicharacters:GetCharacters');
        print("map "..HasModelLoaded(GetHashKey("sp_01_station")) == 1 and "loaded" or "not loaded")
        if HasModelLoaded(GetHashKey("sp_01_station")) then
            Init()
            Wait(250)
            DoScreenFadeIn(250)
        else
            print("Not Loaded.\nreapet load maybe(?)")
        end
    end)
end

function loading()
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
    TriggerEvent("loading:disableLoading")
    DoScreenFadeOut(250)
    Wait(400)
end

RegisterNetEvent("db-base:SessionStarted")
AddEventHandler("db-base:SessionStarted", function()
    DBCore["SessionStarted"]()
end)

RegisterNUICallback('play', function()
    DoScreenFadeOut(500)
    Wait(500)
    TriggerEvent("db-base:spawnInitialized")
    Wait(3000)
    DoScreenFadeIn(1500)
    return
end)

DBCore["InitialSpawn"] = function() -- First spawn ever.
    CreateThread(function()
        DisableAllControlActions(0)
        local ped = PlayerPedId()
        -- SetEntityVisible(ped, true)
        FreezeEntityPosition(PlayerPedId(), false)
        ClearPedTasksImmediately(ped)
        RemoveAllPedWeapons(ped)
        EnableAllControlActions(0)
        TriggerEvent("db-base:initial:finishedLoading")
    end)
end

RegisterNetEvent("db-base:initial")
AddEventHandler("db-base:initial", function()
    DBCore["InitialSpawn"]()
end)


RegisterNetEvent("db-base:initial:finishedLoading")
AddEventHandler("db-base:initial:finishedLoading", function()
    characterSpawned()
end)

function characterSpawned() -- First spawn events
    print("[db-base] Character Successfully Spawned")
    TriggerServerEvent("db-clothing:checkIt")
    TriggerServerEvent("db-clothing:retrieve_tats")
    TriggerServerEvent("db-base:licenses")
    -- TriggerEvent("whenyouworkinghardfthenyourmoneystartexpandin", true)
    TriggerEvent("player:receiveItem","idcard",1,true)
    TriggerEvent("player:receiveItem","mobilephone",1)
    Wait(550)
    TriggerEvent("db-apartments:firstApartments")
end

function InitPlayer()
    CreateThread(function()
        DisableAllControlActions(0)
        DoScreenFadeOut(450) 
        local ped = PlayerPedId()
        -- SetEntityVisible(ped, true)
        FreezeEntityPosition(PlayerPedId(), false)
        ClearPedTasksImmediately(ped)
        RemoveAllPedWeapons(ped)
        EnableAllControlActions(0)
        TriggerEvent("db-base:initial:player")
    end)
end

RegisterNetEvent("db-base:initialPlayer")
AddEventHandler("db-base:initialPlayer", function()
    InitPlayer()
end)


RegisterNetEvent("db-base:initial:player")
AddEventHandler("db-base:initial:player", function()
    characterLoaded()
end)

function characterLoaded()
    TriggerEvent("AttachWeapons")
    TriggerServerEvent("db-clothing:retrieve_tats")
    TriggerServerEvent("db-base:licenses")
    TriggerServerEvent("db-weapons:getAmmo")
    TriggerServerEvent("db-clothing:checkIt")
    TriggerServerEvent("apartments:load")
    -- TriggerEvent("whenyouworkinghardfthenyourmoneystartexpandin", true)
    Wait(450)
    DoScreenFadeIn(450)
	print("[db-base] Character Successfully Loaded.")
end
