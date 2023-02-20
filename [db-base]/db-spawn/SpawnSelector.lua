local SpawnLocation = {}

local SPAWNS = {
    ["airport"] = vector3(-1037.74,-2738.04,20.1693),
    ["mrpd"] = vector3(425.06,-979.67,30.71),
    ["hospital"] = vector3(267.58,-630.11,42.02),
    ["mirror"] = vector3(1036.73,-756.16,57.77),
    ["sandy"] = vector3(1877.17,3705.23,33.22),
    ["prison"] = vector3(1845.817, 2585.836, 45.67247),
    ["motel"] = vector3(314.94, -236.77, 53.97),
    ["paleto"] = vector3(-123.46,6449.06,31.43),
    ["beach"] = vector3(-1735.97,-1113.86,13.06),
    ["mountzonah"] = vector3(-542.98, -207.35, 37.64),
    ["altaapartments"] = vector3(-260.39, -974.4, 31.22)
}

RegisterNUICallback('spawn', function(data, cb)
    -- TriggerServerEvent("db-clothing:checkIt")
    -- TriggerServerEvent("apartments:load")
    local SpawnName = data.location
    if SpawnName == "House" then
        local x = data.x
        local y = data.y
        local z = data.z
        CameraPos(x,y,z)
    end
    local LocalPlayer = exports['db-base']:GetCharacter()
    pos = LocalPlayer.lastPosition
    if SpawnName == "last" then 
        SPAWNS["last"] = vector3(pos.x,pos.y,pos.z) 
    end
    SpawnLocation = SPAWNS[SpawnName]
    if SpawnLocation then
        CameraPos(SpawnLocation.x,SpawnLocation.y,SpawnLocation.z)
    end
    SetEntityMaxHealth(PlayerPedId(), 200)
    SetEntityHealth(PlayerPedId(), 200)
    FreezeEntityPosition(PlayerPedId(), false)
end)

function CameraPos(x,y,z)
    DoScreenFadeOut(1000)
    local pos = {x = x, y = y, z = z}
    SetEntityCoords(PlayerPedId(), pos.x, pos.y, pos.z)
    SetTimecycleModifier('default')
    SetNuiFocus(false, false)
    Citizen.Wait(500)
    local cam2 = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", -1355.93,-1487.78,520.75, 300.00,0.00,0.00, 100.00, false, 0)
    PointCamAtCoord(cam2, pos.x,pos.y,pos.z+200)
    SetCamActiveWithInterp(cam2, cam, 900, true, true)
    Citizen.Wait(900)
    local cam = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", pos.x,pos.y,pos.z+200, 300.00,0.00,0.00, 100.00, false, 0)
    PointCamAtCoord(cam, pos.x,pos.y,pos.z+2)
    SetCamActiveWithInterp(cam, cam2, 3700, true, true)
    Citizen.Wait(3700)
    PlaySoundFrontend(-1, "Zoom_Out", "DLC_HEIST_PLANNING_BOARD_SOUNDS", 1)
    RenderScriptCams(false, true, 500, true, true)
    PlaySoundFrontend(-1, "CAR_BIKE_WHOOSH", "MP_LOBBY_SOUNDS", 1)
    FreezeEntityPosition(PlayerPedId(), false)
    Citizen.Wait(500)
    DoScreenFadeIn(1000)
    DestroyAllCams(false)
    RenderScriptCams(false, true, 1, true, true)
    FreezeEntityPosition(PlayerPedId(), false)
    SetCamActive(cam, false)
    DisplayHud(true)
    return true
end

RegisterNetEvent("spawnselector")
AddEventHandler("spawnselector", function(firstspawn, inJail)
    local data = {}            
    SendNUIMessage({
        action = "display",
        displayHouses = "Yes",
        -- housesArray = data,
        jail = inJail
    })
    SetTimecycleModifier('hud_def_blur')
    SetNuiFocus(true, true)
end)
