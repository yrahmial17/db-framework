local enabled = false
local player = false
local newCharacter = false
local cam = false
local customCam = false
local oldPed = false
local startingMenu = false
local currentFadeStyle = 255
local actionDress = false
local drawable_names = {"face", "masks", "hair", "torsos", "legs", "bags", "shoes", "neck", "undershirts", "vest", "decals", "jackets"}
local prop_names = {"hats", "glasses", "earrings", "mouth", "lhand", "rhand", "watches", "braclets"}
local head_overlays = {"Blemishes","FacialHair","Eyebrows","Ageing","Makeup","Blush","Complexion","SunDamage","Lipstick","MolesFreckles","ChestHair","BodyBlemishes","AddBodyBlemishes"}
local face_features = {"Nose_Width","Nose_Peak_Hight","Nose_Peak_Lenght","Nose_Bone_High","Nose_Peak_Lowering","Nose_Bone_Twist","EyeBrown_High","EyeBrown_Forward","Cheeks_Bone_High","Cheeks_Bone_Width","Cheeks_Width","Eyes_Openning","Lips_Thickness","Jaw_Bone_Width","Jaw_Bone_Back_Lenght","Chimp_Bone_Lowering","Chimp_Bone_Lenght","Chimp_Bone_Width","Chimp_Hole","Neck_Thikness"}
local tatCategory = GetTatCategs()
local tattooHashList = CreateHashList()
local isService = false
local passedClothing = true

local currentPrice = 0
local currentPriceWithoutTax = 0

local MenuData = {
    clothing_shop = {
        text = "To buy clothes",
        displayName = "Clothing Store",
        basePrice = 100
    },
    barber_shop = {
        text = "Fix your ugly mug",
        displayName = "Barber Shop",
        basePrice = 100
    },
    tattoo_shop = {
        text = "Become edgy",
        displayName = "Tattoo Parlor",
        basePrice = 50
    }
}

local listening = false

function RefreshUI()
    hairColors = {}
    for i = 0, GetNumHairColors()-1 do
        local outR, outG, outB= GetPedHairRgbColor(i)
        hairColors[i] = {outR, outG, outB}
    end

    makeupColors = {}
    for i = 0, GetNumMakeupColors()-1 do
        local outR, outG, outB= GetPedMakeupRgbColor(i)
        makeupColors[i] = {outR, outG, outB}
    end

    SendNUIMessage({
        type="colors",
        hairColors=hairColors,
        makeupColors=makeupColors,
        hairColor=GetPedHair()
    })
    SendNUIMessage({
        type = "menutotals",
        drawTotal = GetDrawablesTotal(),
        propDrawTotal = GetPropDrawablesTotal(),
        textureTotal = GetTextureTotals(),
        headoverlayTotal = GetHeadOverlayTotals(),
        skinTotal = GetSkinTotal(),
        fadeTotal = GetFadeTotal(),
    })
    SendNUIMessage({
        type = "barber_shop",
        headBlend = GetPedHeadBlendData(),
        headOverlay = GetHeadOverlayData(),
        headStructure = GetHeadStructureData()
    })
    SendNUIMessage({
        type = "clothing_shopdata",
        drawables = GetDrawables(),
        props = GetProps(),
        drawtextures = GetDrawTextures(),
        proptextures = GetPropTextures(),
        skin = GetSkin(),
        currentFade = currentFadeStyle,
        oldPed = oldPed,
    })
    SendNUIMessage({
        type = "tattoo_shop",
        totals = tatCategory,
        values = GetTats()
    })
end

function GetSkin()
    for i = 1, #frm_skins do
        if (GetHashKey(frm_skins[i]) == GetEntityModel(PlayerPedId())) then
            return {name="skin_male", value=i}
        end
    end
    for i = 1, #fr_skins do
        if (GetHashKey(fr_skins[i]) == GetEntityModel(PlayerPedId())) then
            return {name="skin_female", value=i}
        end
    end
    return false
end

function GetDrawables()
    drawables = {}
    local model = GetEntityModel(PlayerPedId())
    local mpPed = false
    if (model == `mp_f_freemode_01` or model == `mp_m_freemode_01`) then
        mpPed = true
    end
    for i = 0, #drawable_names-1 do
        if mpPed and drawable_names[i+1] == "undershirts" and GetPedDrawableVariation(player, i) == -1 then
            SetPedComponentVariation(player, i, 15, 0, 2)
        end
        drawables[i] = {drawable_names[i+1], GetPedDrawableVariation(player, i)}
    end
    return drawables
end

function GetProps()
    props = {}
    for i = 0, #prop_names-1 do
        props[i] = {prop_names[i+1], GetPedPropIndex(player, i)}
    end
    return props
end

function GetDrawTextures()
    textures = {}
    for i = 0, #drawable_names-1 do
        table.insert(textures, {drawable_names[i+1], GetPedTextureVariation(player, i)})
    end
    return textures
end

function GetPropTextures()
    textures = {}
    for i = 0, #prop_names-1 do
        table.insert(textures, {prop_names[i+1], GetPedPropTextureIndex(player, i)})
    end
    return textures
end

function GetDrawablesTotal()
    drawables = {}
    for i = 0, #drawable_names - 1 do
        drawables[i] = {drawable_names[i+1], GetNumberOfPedDrawableVariations(player, i)}
    end
    return drawables
end

function GetPropDrawablesTotal()
    props = {}
    for i = 0, #prop_names - 1 do
        props[i] = {prop_names[i+1], GetNumberOfPedPropDrawableVariations(player, i)}
    end
    return props
end

function GetTextureTotals()
    local values = {}
    local draw = GetDrawables()
    local props = GetProps()

    for idx = 0, #draw-1 do
        local name = draw[idx][1]
        local value = draw[idx][2]
        values[name] = GetNumberOfPedTextureVariations(player, idx, value)
    end

    for idx = 0, #props-1 do
        local name = props[idx][1]
        local value = props[idx][2]
        values[name] = GetNumberOfPedPropTextureVariations(player, idx, value)
    end
    return values
end

function SetClothing(drawables, props, drawTextures, propTextures)
    for i = 1, #drawable_names do
        if drawables[0] == nil then
            if drawable_names[i] == "undershirts" and drawables[tostring(i-1)][2] == -1 then
                SetPedComponentVariation(player, i-1, 15, 0, 2)
            else
                SetPedComponentVariation(player, i-1, drawables[tostring(i-1)][2], drawTextures[i][2], 2)
            end
        else
            if drawable_names[i] == "undershirts" and drawables[i-1][2] == -1 then
                SetPedComponentVariation(player, i-1, 15, 0, 2)
            else
                SetPedComponentVariation(player, i-1, drawables[i-1][2], drawTextures[i][2], 2)
            end
        end
    end

    for i = 1, #prop_names do
        local propZ = (drawables[0] == nil and props[tostring(i-1)][2] or props[i-1][2])
        ClearPedProp(player, i-1)
        SetPedPropIndex(
            player,
            i-1,
            propZ,
            propTextures[i][2], true)
    end
end

function GetSkinTotal()
  return {
    #frm_skins,
    #fr_skins
  }
end

local toggleClothing = {}
function ToggleProps(data)
    local name = data["name"]

    selectedValue = has_value(drawable_names, name)
    if (selectedValue > -1) then
        if (toggleClothing[name] ~= nil) then
            SetPedComponentVariation(
                player,
                tonumber(selectedValue),
                tonumber(toggleClothing[name][1]),
                tonumber(toggleClothing[name][2]), 2)
            toggleClothing[name] = nil
        else
            toggleClothing[name] = {
                GetPedDrawableVariation(player, tonumber(selectedValue)),
                GetPedTextureVariation(player, tonumber(selectedValue))
            }

            local value = -1
            if name == "undershirts" or name == "torsos" then
                value = 15
                if name == "undershirts" and GetEntityModel(PlayerPedId()) == GetHashKey('mp_f_freemode_01') then
                    value = -1
                end
            end
            if name == "legs" then
                value = 14
            end

            SetPedComponentVariation(
                player,
                tonumber(selectedValue),
                value, 0, 2)
        end
    else
        selectedValue = has_value(prop_names, name)
        if (selectedValue > -1) then
            if (toggleClothing[name] ~= nil) then
                SetPedPropIndex(
                    player,
                    tonumber(selectedValue),
                    tonumber(toggleClothing[name][1]),
                    tonumber(toggleClothing[name][2]), true)
                toggleClothing[name] = nil
            else
                toggleClothing[name] = {
                    GetPedPropIndex(player, tonumber(selectedValue)),
                    GetPedPropTextureIndex(player, tonumber(selectedValue))
                }
                ClearPedProp(player, tonumber(selectedValue))
            end
        end
    end
end

function disableCam()
    RenderScriptCams(false, true, 250, 1, 0)
    DestroyCam(cam, false)

    FreezeEntityPosition(PlayerPedId(), false)
end

function SaveToggleProps()
    for k in pairs(toggleClothing) do
        local name  = k
        selectedValue = has_value(drawable_names, name)
        if (selectedValue > -1) then
            SetPedComponentVariation(
                player,
                tonumber(selectedValue),
                tonumber(toggleClothing[name][1]),
                tonumber(toggleClothing[name][2]), 2)
            toggleClothing[name] = nil
        else
            selectedValue = has_value(prop_names, name)
            if (selectedValue > -1) then
                SetPedPropIndex(
                    player,
                    tonumber(selectedValue),
                    tonumber(toggleClothing[name][1]),
                    tonumber(toggleClothing[name][2]), true)
                toggleClothing[name] = nil
            end
        end
    end
end

function LoadPed(data)
    SetSkin(data.model, true)
    SetClothing(data.drawables, data.props, data.drawtextures, data.proptextures)
    Citizen.Wait(500)
    SetPedHairColor(player, tonumber(data.hairColor[1]), tonumber(data.hairColor[2]))
    SetPedHeadBlend(data.headBlend)
    SetHeadStructure(data.headStructure)
    SetHeadOverlayData(data.headOverlay)
    setFacialDecoration(data.fadeStyle)
    return
end

exports('LoadPed', LoadPed)

function GetCurrentPed()
    player = PlayerPedId()
    return {
        model = GetEntityModel(PlayerPedId()),
        hairColor = GetPedHair(),
        headBlend = GetPedHeadBlendData(),
        headOverlay = GetHeadOverlayData(),
        headStructure = GetHeadStructure(),
        drawables = GetDrawables(),
        props = GetProps(),
        drawtextures = GetDrawTextures(),
        proptextures = GetPropTextures(),
        fadeStyle = currentFadeStyle
    }
end

exports('GetCurrentPed', GetCurrentPed)

function PlayerModel(data)
    local skins = nil
    if (data['name'] == 'skin_male') then
        skins = frm_skins
    else
        skins = fr_skins
    end
    local skin = skins[tonumber(data['value'])]
    rotation(180.0)
    SetSkin(GetHashKey(skin), true)
    Citizen.Wait(1)
    rotation(180.0)
end

local function ToggleClothingToLoadPed()
    local ped = PlayerPedId()
    local drawables = GetDrawablesTotal()

    for num, _ in pairs(drawables) do
        if drawables[num][2] > 1 then
            component = tonumber(num)
            SetPedComponentVariation(ped, component, 1, 0, 0)
            Wait(250)
            SetPedComponentVariation(ped, component, 0, 0, 0)
            break
        end
    end
end

local inSpawn = false
AddEventHandler("db-clothing:inSpawn", function(pInSpawn)
    inSpawn = pInSpawn
end)

function SetSkin(model, setDefault)
    -- TODO: If not isCop and model not in copModellist, do below.
    -- Model is a hash, GetHashKey(modelName)
    SetEntityInvincible(PlayerPedId(),true)
    if IsModelInCdimage(model) and IsModelValid(model) then
        RequestModel(model)
        while (not HasModelLoaded(model)) do
            Citizen.Wait(0)
        end
        SetPlayerModel(PlayerId(), model)
        SetModelAsNoLongerNeeded(model)
        player = PlayerPedId()
        FreezePedCameraRotation(player, true)
        SetPedMaxHealth(player, 200)
        ToggleClothingToLoadPed()
        SetPedDefaultComponentVariation(player)
        if inSpawn then
            SetEntityHealth(player, GetEntityMaxHealth(player))
        end
        if setDefault and model ~= nil and not isCustomSkin(model) and (model == `mp_f_freemode_01` or model == `mp_m_freemode_01`) then
            SetPedHeadBlendData(player, 0, 0, 0, 15, 0, 0, 0, 1.0, 0, false)
            SetPedComponentVariation(player, 11, 0, 1, 0)
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
    TriggerEvent("Animation:Set:Reset")
end


RegisterNUICallback('updateclothes', function(data, cb)
    toggleClothing[data["name"]] = nil
    selectedValue = has_value(drawable_names, data["name"])
    if (selectedValue > -1) then
        if data["name"] == "face" and tonumber(data["value"]) == -1 then
            return
        end
        SetPedComponentVariation(player, tonumber(selectedValue), tonumber(data["value"]), tonumber(data["texture"]), 2)
        cb({
            GetNumberOfPedTextureVariations(player, tonumber(selectedValue), tonumber(data["value"]))
        })
    else
        selectedValue = has_value(prop_names, data["name"])
        if (tonumber(data["value"]) == -1) then
            ClearPedProp(player, tonumber(selectedValue))
        else
            SetPedPropIndex(
                player,
                tonumber(selectedValue),
                tonumber(data["value"]),
                tonumber(data["texture"]), true)
        end
        cb({
            GetNumberOfPedPropTextureVariations(
                player,
                tonumber(selectedValue),
                tonumber(data["value"])
            )
        })
    end
end)

RegisterNUICallback('customskin', function(data, cb)
    if canUseCustomSkins() then
        local valid_model = isInSkins(data)
        if valid_model then
            SetSkin(GetHashKey(data), true)
        end
    end
end)

RegisterNUICallback('setped', function(data, cb)
    PlayerModel(data)
    RefreshUI()
    cb('ok')
end)

RegisterNUICallback('resetped', function(data, cb)
    LoadPed(oldPed)
    cb('ok')
end)


------------------------------------------------------------------------------------------
-- Barber

function GetPedHeadBlendData()
    local blob = string.rep("\0\0\0\0\0\0\0\0", 6 + 3 + 1) -- Generate sufficient struct memory.
    if not Citizen.InvokeNative(0x2746BD9D88C5C5D0, player, blob, true) then -- Attempt to write into memory blob.
        return nil
    end

    return {
        shapeFirst = string.unpack("<i4", blob, 1),
        shapeSecond = string.unpack("<i4", blob, 9),
        shapeThird = string.unpack("<i4", blob, 17),
        skinFirst = string.unpack("<i4", blob, 25),
        skinSecond = string.unpack("<i4", blob, 33),
        skinThird = string.unpack("<i4", blob, 41),
        shapeMix = string.unpack("<f", blob, 49),
        skinMix = string.unpack("<f", blob, 57),
        thirdMix = string.unpack("<f", blob, 65),
        hasParent = string.unpack("b", blob, 73) ~= 0,
    }
end

function SetPedHeadBlend(data)
    if data ~= nil then
        SetPedHeadBlendData(player,
            tonumber(data['shapeFirst']),
            tonumber(data['shapeSecond']),
            tonumber(data['shapeThird']),
            tonumber(data['skinFirst']),
            tonumber(data['skinSecond']),
            tonumber(data['skinThird']),
            tonumber(data['shapeMix']),
            tonumber(data['skinMix']),
            tonumber(data['thirdMix']),
            false)
    end
end

function GetHeadOverlayData()
    local headData = {}
    for i = 1, #head_overlays do
        local retval, overlayValue, colourType, firstColour, secondColour, overlayOpacity = GetPedHeadOverlayData(player, i-1)
        if retval then
            headData[i] = {}
            headData[i].name = head_overlays[i]
            headData[i].overlayValue = overlayValue
            headData[i].colourType = colourType
            headData[i].firstColour = firstColour
            headData[i].secondColour = secondColour
            headData[i].overlayOpacity = overlayOpacity
        end
    end
    return headData
end

function SetHeadOverlayData(data)
    if json.encode(data) ~= "[]" then
        for i = 1, #head_overlays do
            SetPedHeadOverlay(player,  i-1, tonumber(data[i].overlayValue),  tonumber(data[i].overlayOpacity))
            -- SetPedHeadOverlayColor(player, i-1, data[i].colourType, data[i].firstColour, data[i].secondColour)
        end

        SetPedHeadOverlayColor(player, 0, 0, tonumber(data[1].firstColour), tonumber(data[1].secondColour))
        SetPedHeadOverlayColor(player, 1, 1, tonumber(data[2].firstColour), tonumber(data[2].secondColour))
        SetPedHeadOverlayColor(player, 2, 1, tonumber(data[3].firstColour), tonumber(data[3].secondColour))
        SetPedHeadOverlayColor(player, 3, 0, tonumber(data[4].firstColour), tonumber(data[4].secondColour))
        SetPedHeadOverlayColor(player, 4, 2, tonumber(data[5].firstColour), tonumber(data[5].secondColour))
        SetPedHeadOverlayColor(player, 5, 2, tonumber(data[6].firstColour), tonumber(data[6].secondColour))
        SetPedHeadOverlayColor(player, 6, 0, tonumber(data[7].firstColour), tonumber(data[7].secondColour))
        SetPedHeadOverlayColor(player, 7, 0, tonumber(data[8].firstColour), tonumber(data[8].secondColour))
        SetPedHeadOverlayColor(player, 8, 2, tonumber(data[9].firstColour), tonumber(data[9].secondColour))
        SetPedHeadOverlayColor(player, 9, 0, tonumber(data[10].firstColour), tonumber(data[10].secondColour))
        SetPedHeadOverlayColor(player, 10, 1, tonumber(data[11].firstColour), tonumber(data[11].secondColour))
        SetPedHeadOverlayColor(player, 11, 0, tonumber(data[12].firstColour), tonumber(data[12].secondColour))
    end
end

function GetHeadOverlayTotals()
    local totals = {}
    for i = 1, #head_overlays do
        totals[head_overlays[i]] = GetNumHeadOverlayValues(i-1)
    end
    return totals
end

function GetPedHair()
    local hairColor = {}
    hairColor[1] = GetPedHairColor(player)
    hairColor[2] = GetPedHairHighlightColor(player)
    return hairColor
end

function GetHeadStructureData()
    local structure = {}
    for i = 1, #face_features do
        structure[face_features[i]] = GetPedFaceFeature(player, i-1)
    end
    return structure
end

function GetHeadStructure(data)
    local structure = {}
    for i = 1, #face_features do
        structure[i] = GetPedFaceFeature(player, i-1)
    end
    return structure
end

function SetHeadStructure(data)
    for i = 1, #face_features do
        SetPedFaceFeature(player, i-1, data[i])
    end
end


RegisterNUICallback('saveheadblend', function(data, cb)
    SetPedHeadBlendData(player,
    tonumber(data.shapeFirst),
    tonumber(data.shapeSecond),
    tonumber(data.shapeThird),
    tonumber(data.skinFirst),
    tonumber(data.skinSecond),
    tonumber(data.skinThird),
    tonumber(data.shapeMix) / 100,
    tonumber(data.skinMix) / 100,
    tonumber(data.thirdMix) / 100, false)
    cb('ok')
end)

RegisterNUICallback('savehaircolor', function(data, cb)
    SetPedHairColor(player, tonumber(data['firstColour']), tonumber(data['secondColour']))
end)

RegisterNUICallback('savefacefeatures', function(data, cb)
    local index = has_value(face_features, data["name"])
    if (index <= -1) then return end
    local scale = tonumber(data["scale"]) / 100
    SetPedFaceFeature(player, index, scale)
    cb('ok')
end)

RegisterNUICallback('saveheadoverlay', function(data, cb)
    if data["name"] == "fadeStyle" then
      setFacialDecoration(tonumber(data["value"]))
    else
      local index = has_value(head_overlays, data["name"])
      SetPedHeadOverlay(player,  index, tonumber(data["value"]), tonumber(data["opacity"]) / 100)
    end
    cb('ok')
end)

RegisterNUICallback('saveheadoverlaycolor', function(data, cb)
    local index = has_value(head_overlays, data["name"])
    local success, overlayValue, colourType, firstColour, secondColour, overlayOpacity = GetPedHeadOverlayData(player, index)
    local sColor = tonumber(data['secondColour'])
    if (sColor == nil) then
        sColor = tonumber(data['firstColour'])
    end
    SetPedHeadOverlayColor(player, index, colourType, tonumber(data['firstColour']), sColor)
    cb('ok')
end)


----------------------------------------------------------------------------------
-- UTIL SHIT


function has_value (tab, val)
    for index = 1, #tab do
        if tab[index] == val then
            return index-1
        end
    end
    return -1
end

function EnableGUI(enable, menu, pPriceText, pPrice,disableDestroyCams)
    enabled = enable
    SendNUIMessage({
        type = "enableclothing_shop",
        enable = enable,
        menu = menu,
        priceText = pPriceText,
        price = pPrice,
        isService = isService
    })
    SetNuiFocus(enable, enable)

    if (not enable and not startingMenu) then
        SaveToggleProps()
        oldPed = {}
        DestroyAllCams(true)
        RenderScriptCams(false, true, 1, true, true)
    end
end

function CustomCamera(position,ending)
    if startingMenu and position == "torso" then return end
    if not enabled then return end
    if customCam  then
        FreezePedCameraRotation(player, false)
        SetCamActive(cam, false)
        if not ending and not startingMenu then
            RenderScriptCams(false,  false,  0,  true,  true)
            if (DoesCamExist(cam)) then
               DestroyCam(cam, false)
            end
        end
        customCam = false
    else
        if (DoesCamExist(cam)) then
            DestroyCam(cam, false)
        end

        local pos = GetEntityCoords(player, true)
        if not startingMenu then
            SetEntityRotation(player, 0.0, 0.0, 0.0, 1, true)
        end

        FreezePedCameraRotation(player, true)

        cam = CreateCam('DEFAULT_SCRIPTED_CAMERA', true)
        SetCamCoord(cam, player)
        SetCamRot(cam, 0.0, 0.0, 0.0)

        SetCamActive(cam, true)
        RenderScriptCams(true,  false,  0,  true,  true)

        SwitchCam(position)
        customCam = true
    end
end

function rotation(dir)
    local pedRot = GetEntityHeading(PlayerPedId())+dir
    SetEntityHeading(PlayerPedId(), pedRot % 360)
end

function TogRotation()
    local pedRot = GetEntityHeading(PlayerPedId())+90 % 360
    SetEntityHeading(PlayerPedId(), math.floor(pedRot / 90) * 90.0)
end

function SwitchCam(name)
    if name == "cam" then
        TogRotation()
        return
    end

    local pos = GetEntityCoords(player, true)
    local bonepos = false
    if (name == "head") then
        bonepos = GetPedBoneCoords(player, 31086)
        if startingMenu then
            bonepos = vector3(bonepos.x - 0.7, bonepos.y + 0.0, bonepos.z + 0.05)
        else
            bonepos = vector3(bonepos.x - 0.1, bonepos.y + 0.4, bonepos.z + 0.05)
        end
        
    end
    if (name == "torso") then
        bonepos = GetPedBoneCoords(player, 11816)
        bonepos = vector3(bonepos.x - 0.4, bonepos.y + 2.2, bonepos.z + 0.2)
    end
    if (name == "leg") then
        bonepos = GetPedBoneCoords(player, 46078)

        if startingMenu then
            bonepos = vector3(bonepos.x - 0.9, bonepos.y + 0.0, bonepos.z-0.2)
        else
            bonepos = vector3(bonepos.x - 0.1, bonepos.y + 1, bonepos.z)
        end

    end

    SetCamCoord(cam, bonepos.x, bonepos.y, bonepos.z)
    if startingMenu and name ~= "torso" then
        SetCamRot(cam, 0.0, 0.0, 250.0)
    else
        SetCamRot(cam, 0.0, 0.0, 180.0)
    end
    
end

RegisterNetEvent("clothing:close")
AddEventHandler("clothing:close", function()
    EnableGUI(false, false)
end)

RegisterNUICallback('escape', function(data, cb)
    disableCam()
    local shouldSave = data['save'] or false
    local newFadeStyle = data["fadeStyle"] or 255
    local paymentType = data["paymentType"] or "cash"
    if shouldSave and currentPrice > 0 then
        local purchaseSuccess = RPC.execute("dontwearlacoste, purchase", currentPrice, currentPriceWithoutTax, paymentType)
        if not purchaseSuccess then 
            TriggerEvent("notification", "You don't have enough money!")
            shouldSave = false
        end
    end
    if not startingMenu then
        TriggerServerEvent("hud:SetMeta")
    end
    Save(shouldSave, true, newFadeStyle)
    if (newCharacter) then
        newCharacter = false;
        -- DoScreenFadeOut(1000)
        -- TriggerServerEvent("db-clothing:checkIt")
        -- TriggerServerEvent("apartments:load")
        -- TriggerEvent('db-clothing:enable', true)
    end
    cb('ok')
end)

RegisterNUICallback('togglecursor', function(data, cb)
    if not startingMenu then
        CustomCamera("torso")
        SetNuiFocus(false, false)
        FreezePedCameraRotation(player, false)
    end
    cb('ok')
end)

RegisterNUICallback('rotate', function(data, cb)
    if (data["key"] == "left") then
        rotation(20)
    else
        rotation(-20)
    end
    cb('ok')
end)

RegisterNUICallback('switchcam', function(data, cb)
    CustomCamera(data['name'])
    cb('ok')
end)

RegisterNUICallback('toggleclothes', function(data, cb)
    ToggleProps(data)
    cb('ok')
end)


------------------------------------------------------------------------
-- Tattooooooos


-- currentTats [[collectionHash, tatHash], [collectionHash, tatHash]]
-- loop tattooHashList [categ] find [tatHash, collectionHash]

function GetTats()
    local tempTats = {}
    if currentTats == nil then return {} end
    for i = 1, #currentTats do
        for key in pairs(tattooHashList) do
            for j = 1, #tattooHashList[key] do
                if tattooHashList[key][j][1] == currentTats[i][2] then
                    tempTats[key] = j
                end
            end
        end
    end
    return tempTats
end

function SetTats(data)
    currentTats = {}
    for k, v in pairs(data) do
        for categ in pairs(tattooHashList) do
            if k == categ then
                local something = tattooHashList[categ][tonumber(v)]
                if something ~= nil then
                    table.insert(currentTats, {something[2], something[1]})
                end
            end
        end
    end
    ClearPedDecorations(PlayerPedId())
    for i = 1, #currentTats do
        ApplyPedOverlay(PlayerPedId(), currentTats[i][1], currentTats[i][2])
    end
end

RegisterNUICallback('settats', function(data, cb)
    SetTats(data["tats"])
    cb('ok')
end)


--------------------------------------------------------------------
-- Main menu

function OpenMenu(name, pPriceText, pPrice)
    player = PlayerPedId()
    oldPed = GetCurrentPed()
    local isAllowed = false
    if(oldPed.model == 1885233650 or oldPed.model == -1667301416) then isAllowed = true end
    if((oldPed.model ~= 1885233650 or oldPed.model ~= -1667301416) and (name == "clothing_shop" or name == "tattoo_shop")) then isAllowed = true end
    if isAllowed then
        FreezePedCameraRotation(player, true)
        RefreshUI()
        EnableGUI(true, name, pPriceText, pPrice)
        TriggerEvent("inmenu", true)
    else
        TriggerEvent("notification", "You are not welcome here!");
    end
end

function Save(save, close, newFadeStyle)
    if save then
        currentFadeStyle = newFadeStyle 
        data = GetCurrentPed()
        if (GetCurrentPed().model == GetHashKey("mp_f_freemode_01") or GetCurrentPed().model == GetHashKey("mp_m_freemode_01")) and startingMenu then
            -- nothing 
        else
            passedClothing = true
        end
        

        if not startingMenu or passedClothing then
            TriggerServerEvent("db-clothing:insert_character_current", data)
            TriggerServerEvent("db-clothing:insert_character_face", data)
            TriggerServerEvent("db-clothing:set_tats", currentTats)
            TriggerEvent("db-multicharacters:finishedClothing","Finished")
        elseif not passedClothing then 
            passedClothing = true
            Wait(2000)
            OpenMenu("barber_shop")
            return
        end
        
    else
        TriggerEvent("db-multicharacters:finishedClothing","Old")
        LoadPed(oldPed)
    end

    if close then
        EnableGUI(false, false)
    end

    TriggerEvent("inmenu", false)
    TriggerEvent("ressurection:relationships:norevive")
    TriggerEvent("gangs:setDefaultRelations")
    TriggerEvent("facewear:update")
    TriggerEvent('db-weapons:getAmmo')
    CustomCamera('torso',true)
    -- TriggerEvent("e-blips:updateAfterPedChange",exports["db_exports"]:GetData("myjob"))
    startingMenu = false
end

local showBarberShopBlips = false
local showTattooShopBlips = false

RegisterNetEvent('db-clothing:saveCharacterClothes')
AddEventHandler('db-clothing:saveCharacterClothes', function()
    local data = GetCurrentPed()
    TriggerServerEvent("db-clothing:insert_character_current", data)
end)

RegisterNetEvent('hairDresser:ToggleHair')
AddEventHandler('hairDresser:ToggleHair', function()
   showBarberShopBlips = not showBarberShopBlips
   for _, item in pairs(barberShops) do
        if not showBarberShopBlips then
            if item.blip ~= nil then
                RemoveBlip(item.blip)
            end
        else
            item.blip = AddBlipForCoord(item[1], item[2], item[2])
            SetBlipSprite(item.blip, 71)
            SetBlipColour(item.blip, 1)
            SetBlipAsShortRange(item.blip, true)
            BeginTextCommandSetBlipName("STRING")
            AddTextComponentString("Barber Shop")
            EndTextCommandSetBlipName(item.blip)
        end
    end
end)

RegisterNetEvent('tattoo:ToggleTattoo')
AddEventHandler('tattoo:ToggleTattoo', function()
   showTattooShopBlips = not showTattooShopBlips
   for _, item in pairs(tattoosShops) do
        if not showTattooShopBlips then
            if item.blip ~= nil then
                RemoveBlip(item.blip)
            end
        else
            item.blip = AddBlipForCoord(item[1], item[2], item[2])
            SetBlipSprite(item.blip, 75)
            SetBlipColour(item.blip, 1)
            SetBlipAsShortRange(item.blip, true)
            BeginTextCommandSetBlipName("STRING")
            AddTextComponentString("Tattoo Shop")
            EndTextCommandSetBlipName(item.blip)
        end
    end
end)

function addBlips()
    showBarberShopBlips = true
    TriggerEvent('hairDresser:ToggleHair')
end

RegisterNetEvent("db-clothing:inService")
AddEventHandler("db-clothing:inService", function(service)
    isService = service
end)

RegisterNetEvent("db-clothing:hasEnough")
AddEventHandler("db-clothing:hasEnough", function(menu)
    if menu == "tattoo_shop" then
        TriggerServerEvent("db-clothing:retrieve_tats")
        while currentTats == nil do
            Citizen.Wait(1)
        end
    end

    OpenMenu(menu)
end)

RegisterNetEvent("db-clothing:setclothes")
AddEventHandler("db-clothing:setclothes", function(data, alreadyExist)
  player = PlayerPedId()
  if not data.model and alreadyExist <= 0 then return end
  if not data.model and alreadyExist >= 1 then return end
  model = data.model
  model = model ~= nil and tonumber(model) or false

  if not IsModelInCdimage(model) or not IsModelValid(model) then return end
  SetSkin(model, false)
  Citizen.Wait(500)
  SetClothing(data.drawables, data.props, data.drawtextures, data.proptextures)
  Citizen.Wait(500)
  TriggerEvent("facewear:update")
  TriggerServerEvent("db-clothing:get_character_face", nil, data.fadeStyle)
  TriggerServerEvent("db-clothing:retrieve_tats")
  TriggerServerEvent("hud:SetMeta")
  TriggerEvent("Animation:Set:Reset")
--   TriggerEvent("e-blips:updateAfterPedChange", exports["isPed"]:isPed("myjob"))
end)

RegisterNetEvent('db-clothing:newCharacterSpawned')
AddEventHandler('db-clothing:newCharacterSpawned', function(sex)
    if not exports["db-inventory"]:hasEnoughOfItem("idcard",1,false) then
        TriggerEvent("player:receiveItem","idcard",1,true)
    end
    if not exports["db-inventory"]:hasEnoughOfItem("mobilephone",1,false)then
        TriggerEvent("player:receiveItem","mobilephone",1)
    end
    startingMenu = true
    newCharacter = true
    if sex ~= 'Male' then
        SetSkin("mp_f_freemode_01", true)
    else
        SetSkin("mp_m_freemode_01", true)
    end
    OpenMenu("clothing_shop", '', 0)
end)

RegisterNetEvent("db-clothing:nitzan", function()
    SetSkin("mp_f_freemode_01", true)
    local LocalPlayer = exports["db-base"]:GetCharacter()
    local gender = LocalPlayer.sex
    if gender ~= 'Male' then
        SetSkin("mp_f_freemode_01", true)
    else
        SetSkin("mp_m_freemode_01", true)
    end
end)

RegisterNetEvent("db-clothing:SetDefaultClothes")
AddEventHandler("db-clothing:SetDefaultClothes", function(shit)
    if shit == "Male" then
        SetSkin("mp_m_freemode_01", true)
    else
        SetSkin("mp_f_freemode_01", true)
    end
    Save(true, true, true)
end)

RegisterNetEvent('dontwearlacoste')
AddEventHandler('dontwearlacoste', function() -- todo: find use for thatshit
    CreateThread(function()
        TriggerEvent("notification","Looks like you picked a character, nice job! You have a Hotel booked in the city, type /taxi to call a Taxi.", 1, 10000)
        SetNewWaypoint(-310.10516357422, 221.54559326172)
        local dstHt = #(vector3(GetEntityCoords(PlayerPedId())) - vector3(-310.10516357422, 221.54559326172, 87.928550720215))
    
        while dstHt > 50.0 do
            dstHt = #(vector3(GetEntityCoords(PlayerPedId())) - vector3(-310.10516357422, 221.54559326172, 87.928550720215))
            Wait(1500)
        end
        TriggerEvent("notification","Theres the Hotel, finally, go inside and check it out. Be sure to save your clothing in the dresser by typing '/outfitadd 1 New Outfit' when you are near it. (/phone for Phone, F1 for Actions, K for inventory - most shops will show you what to do.)")
        Wait(15000)
        TriggerEvent("notification", "Welcome to the Hotel!")
    end)
end)

RegisterNetEvent("db-clothing:AdminSetModel")
AddEventHandler("db-clothing:AdminSetModel", function(model)
    local hashedModel = GetHashKey(model)
    if not IsModelInCdimage(hashedModel) or not IsModelValid(hashedModel) then return end
    SetSkin(hashedModel, true)
end)

RegisterNetEvent("db-clothing:defaultReset")
AddEventHandler("db-clothing:defaultReset", function()
    local LocalPlayer = exports["db-base"]:GetCharacter("LocalPlayer")
    local gender = LocalPlayer.sex
    Citizen.Wait(1000)
    if gender ~= "Male" then
        SetSkin(`mp_f_freemode_01`, true)
    else
        SetSkin(`mp_m_freemode_01`, true)
    end
    OpenMenu("clothing_shop")
    startingMenu = true
    passedClothing = false
end)

RegisterNetEvent("db-clothing:settattoos")
AddEventHandler("db-clothing:settattoos", function(playerTattoosList)
    currentTats = playerTattoosList
    SetTats(GetTats())
end)

RegisterNetEvent("db-clothing:setpedfeatures")
AddEventHandler("db-clothing:setpedfeatures", function(data)
    player = PlayerPedId()
    if data == false then
        SetSkin(GetEntityModel(PlayerPedId()), true)
        return
    end
    local head = data.headBlend
    local haircolor = data.hairColor
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
    SetHeadStructure(data.headStructure)
    SetPedHairColor(player, tonumber(haircolor[1]), tonumber(haircolor[2]))
    SetHeadOverlayData(data.headOverlay)
    currentFadeStyle = data.fadeStyle
    setFacialDecoration(currentFadeStyle)
end)

function isFreemodeModel(pModelHash)
  return pModelHash == `mp_f_freemode_01` or pModelHash == `mp_m_freemode_01`
end

function GetFadeTotal()
  local data = getFacialDecorationsData()
  return #data
end

function getFacialDecorationsData()
  local playerPed = PlayerPedId()
  local playerModel = GetEntityModel(playerPed)
  if isFreemodeModel(playerModel) then
    return FADE_CONFIGURATIONS[playerModel == `mp_m_freemode_01` and "male" or "female"]
  else
    return {}
  end
end

function setFacialDecoration(pFadeStyle)
  local fadeStyle = tonumber(pFadeStyle) or 255
  local playerPed = PlayerPedId()
  local playerModel = GetEntityModel(playerPed)
  ClearPedFacialDecorations(playerPed)
  if fadeStyle and fadeStyle > 0 and fadeStyle ~= 255 and isFreemodeModel(playerModel) then
    local facialDecoration = FADE_CONFIGURATIONS[playerModel == `mp_m_freemode_01` and "male" or "female"][fadeStyle]
    Wait(1)
    SetPedFacialDecoration(playerPed, facialDecoration[1], facialDecoration[2])
  end
end

function DisplayHelpText(str)
    SetTextComponentFormat("STRING")
    AddTextComponentString(str)
    DisplayHelpTextFromStringLabel(0, 0, 1, -1)
end

RegisterNetEvent('db-clothing:outfits')
AddEventHandler('db-clothing:outfits', function(pAction, pId, pName)
    if pAction == 1 then
        TriggerServerEvent("db-clothing:set_outfit",pId, pName, GetCurrentPed())
    elseif pAction == 2 then
        TriggerServerEvent("db-clothing:remove_outfit",pId)
    elseif pAction == 3 then 
        TriggerEvent('item:deleteClothesDna')
        TriggerEvent('db-sounds:client:PlayOnOne','Clothes1', 0.6)
        TriggerServerEvent("db-clothing:get_outfit", pId)
    else
        TriggerEvent("hud:save")
        TriggerServerEvent("db-clothing:list_outfits")
    end
end)

RegisterNetEvent('db-clothing:FUCKOFFHEREBRO')
AddEventHandler('db-clothing:FUCKOFFHEREBRO', function(skincheck)
    local menuData = {}
    local takenSlots = {}
    for i = 1, #skincheck do
        local slot = tonumber(skincheck[i].slot)
        takenSlots[slot] = true
        menuData[#menuData + 1] = {
            title = slot .. " | " .. skincheck[i].name,
            description = '',
            key = slot,
            children = {
                { title = "Change Outfit", action = "db-ui:clothing:changeOutfit", key = slot},
                { title = "Delete Outfit", action = "db-ui:clothing:deleteOutfit", key = slot},
            }
        }
    end
    if #menuData >= 0 then
        if #menuData < 10 then
            local emptySlot = -1
            for i=1,10 do
                if emptySlot == -1 and takenSlots[i] == nil then
                    emptySlot = i
                end
            end
            menuData[#menuData + 1] = {
                title = "Save Current Outfit",
                description = '',
                key = emptySlot,
                action = "db-ui:clothing:addOutfitPrompt"
            }
        end
        exports['db-ui']:showContextMenu(menuData)
    else
        TriggerEvent("notification", "No saved outfits", 2)
    end
end)

RegisterNetEvent("db-clothing:use:outfit")
AddEventHandler("db-clothing:use:outfit", function(data)
    TriggerServerEvent("db-clothing:get_outfit", data[2])
end)

RegisterNetEvent("db-clothing:remove:outfit")
AddEventHandler("db-clothing:remove:outfit", function(data)
    TriggerServerEvent("db-clothing:remove_outfit", data[2])
end)

RegisterNetEvent("db-clothing:return", function()
    TriggerEvent("hud:save")
    TriggerServerEvent("db-clothing:list_outfits")
end)

RegisterUICallback("db-ui:clothing:deleteOutfit", function(data, cb)
    cb({ data = {}, meta = { ok = true, message = 'done' } })

    TriggerEvent('db-clothing:remove:outfit', { true, data.key })
end)

RegisterUICallback("db-ui:clothing:changeOutfit", function(data, cb)
    cb({ data = {}, meta = { ok = true, message = 'done' } })
    TriggerEvent('db-clothing:use:outfit', { true, data.key })
end)

RegisterNetEvent('db-clothing:outfit')
AddEventHandler('db-clothing:outfit', function(args,sentType)
    if sentType == 1 then
        local id = args[2]
        TriggerEvent("db-clothing:outfits", sentType, id)
    elseif sentType == 2 then
        local id = args[2]
        TriggerEvent('item:deleteClothesDna')
        TriggerEvent('db-sounds:client:PlayOnOne','Clothes1', 0.6)
        TriggerEvent("db-clothing:outfits", sentType, id)
    end
end)


RegisterUICallback("db-ui:clothing:addOutfitPrompt", function(data, cb)
    cb({ data = {}, meta = { ok = true, message = '' } })
    exports['db-ui']:openApplication('textbox', {
        callbackUrl = 'db-ui:clothing:addOutfit',
        header = "Add Outfit",
        key = 1,
        items = {
            {
                icon = "pencil-alt",
                label = "Outfit Number",
                name = "outfitSlot",
            },
            {
                icon = "pencil-alt",
                label = "Outfit Name",
                name = "outfitName",
            },
        },
        show = true,
    })
end)

RegisterNetEvent("fuckliron(ugay)", function()
    exports['db-ui']:openApplication('textbox', {
        callbackUrl = 'db-ui:clothing:addOutfit',
        header = "Add Outfit",
        key = 1,
        items = {
            {
                icon = "pencil-alt",
                label = "Outfit Number",
                name = "outfitSlot",
            },
            {
                icon = "pencil-alt",
                label = "Outfit Name",
                name = "outfitName",
            },
        },
        show = true,
    })
end)

RegisterUICallback("db-ui:clothing:addOutfit", function(data, cb)
    cb({ data = {}, meta = { ok = true, message = '' } })
    exports['db-ui']:closeApplication('textbox')
    local outfitSlot = data[1].value
    local outfitName = data[2].value
    if outfitName == nil then outfitName = "Outfit" end
    TriggerServerEvent("db-clothing:set_outfit", outfitSlot, outfitName, GetCurrentPed())
end)

RegisterNetEvent('db-clothing:enable')
AddEventHandler('db-clothing:enable', function(status)
    actionDress = status
end)

RegisterCommand("outfitadd", function(source, args, rawCommand)
    if actionDress == true then
        if args[1] and args[2] then
            TriggerEvent('db-clothing:outfits', 1, args[1], args[2])
        else
            TriggerEvent('notification', "You need to do something like /outfitadd 1 party | 1 being the slot id, party is the name of your outfit",3)
        end
    else
        TriggerEvent('notification', "You are not near a closet",2)
    end
end, false)

RegisterCommand("outfits", function(source, args, rawCommand)
    if actionDress == true then
        TriggerEvent('db-clothing:outfits', 4)
    else
        TriggerEvent('notification', "You are not near a closet",2)
    end
end, false)

RegisterNetEvent("db-clothing:list:outfits")
AddEventHandler("db-clothing:list:outfits", function(data)
    TriggerServerEvent("db-clothing:options:oufits", data.slot)
end)


RegisterNetEvent("db-clothing:use:outfit")
AddEventHandler("db-clothing:use:outfit", function(data)
    TriggerServerEvent("db-clothing:get_outfit", data.slot)
end)

RegisterNetEvent("db-clothing:remove:outfit")
AddEventHandler("db-clothing:remove:outfit", function(data)
    TriggerServerEvent("db-clothing:remove_outfit", data.slot)
end)


RegisterNetEvent("db-clothing:return", function()
    TriggerEvent("hud:save")
    TriggerServerEvent("db-clothing:list_outfits")
end)

RegisterNetEvent("db-clothing:attempt:change", function(data)
    local pNewName = exports["db-applications"]:KeyboardInput({
        header = "New outfit name",
        rows = {
            {
                id = 0,
                txt = "What do you want to rename it to?"
            },
        }
    })
    if pNewName then
        TriggerServerEvent('db-clothing:attempt:change',  data.slot, pNewName[1].input)
    else
        TriggerEvent("notification", "Name cannot be blank",2)
    end
end)
local Clothing = {
    {-162.658, -303.397, 39.733},
    {75.950, -1392.891, 29.376},
    {-822.194, -1074.134, 11.328},
    {-1450.711, -236.83, 49.809},
    {4.254, 6512.813, 31.877},
    {615.180, 2762.933, 44.088},
    {1196.785, 2709.558, 38.222},
    {-3171.453, 1043.857, 20.863},
    {-1100.959, 2710.211, 19.107},
    {-1192.9453125, -772.62481689453, 17.3254737854},
    {-707.33416748047, -155.07914733887, 37.415187835693},
    {1683.45667, 4823.17725, 42.1631294},
    {-712.215881, -155.352982, 37.4151268},
    {121.76, -224.6, 54.56},
    {-1207.5267333984, -1456.9530029297, 4.3763856887817}
}

local showClothes = true

RegisterNetEvent('clothing:blips')
AddEventHandler('clothing:blips', function()
    showClothes = not showClothes
   for _, item in pairs(Clothing) do
        if not showClothes then
            if item.blip ~= nil then
                RemoveBlip(item.blip)
            end
        else
            item.blip = AddBlipForCoord(item[1], item[2], item[3])
            SetBlipSprite(item.blip, 73)
            SetBlipScale(item.blip, 0.7)
			SetBlipColour(item.blip, 3)
            SetBlipAsShortRange(item.blip, true)
            BeginTextCommandSetBlipName("STRING")
            AddTextComponentString("Clothing Store")
            EndTextCommandSetBlipName(item.blip)
        end
    end
end)

Citizen.CreateThread(function()
    showClothes = false
    TriggerEvent('clothing:blips')
end)

RegisterCommand("g1", function(source, args, rawCommand)
    TriggerEvent("facewear:adjust",2,false)
end, false)

RegisterCommand("g0", function(source, args, rawCommand)
    TriggerEvent("facewear:adjust",2,true)
end, false)

RegisterCommand("m1", function(source, args, rawCommand)
    if exports["db-inventory"]:hasEnoughOfItem("mask",1) then
        TriggerEvent("inventory:removeItem", "mask", 1)
        TriggerEvent("facewear:adjust",4,false)   
    else 
        TriggerEvent("notification", "You don't have a mask",2)
    end 
end, false)

RegisterCommand("m0", function(source, args, rawCommand)
    TriggerEvent("facewear:adjust",4,true)
end, false)

RegisterCommand("vest", function(source, args, rawCommand)
    if GetPedDrawableVariation(PlayerPedId(), 9) ~= 0 then
        TriggerEvent("facewear:adjust",7,true)
    elseif GetPedDrawableVariation(PlayerPedId(), 9) == 0 or GetPedDrawableVariation(PlayerPedId(), 9) == -1 then
        TriggerEvent("facewear:adjust",7,false)
    end
end, false)

RegisterCommand("h1", function(source, args, rawCommand)
    TriggerEvent("facewear:adjust",6,false)
end, false)

RegisterCommand("h0", function(source, args, rawCommand)
    TriggerEvent("facewear:adjust",6,true)
end, false)

-- LoadPed(data) Sets clothing based on the data structure given, the same structure that GetCurrentPed() returns
-- GetCurrentPed() Gives you the data structure of the currently worn clothes

Citizen.CreateThread(function()
    addBlips()
    SetNuiFocus(false, false)


    while true do
        Wait(0)
        if enabled then
            if (IsControlJustReleased(1, 25)) then
                SetNuiFocus(true, true)
                FreezePedCameraRotation(player, true)
            end
            if (IsControlJustReleased(1, 202)) then
                SetNuiFocus(true, true)
                FreezePedCameraRotation(player, true)
            end
            InvalidateIdleCam()
        end
    end
end)

local function listenForKeypress(zoneName, zoneData, isFree)
    listening = true
    Citizen.CreateThread(function()
        -- local priceWithTax = {total = zoneData.basePrice + 50, text = "FUCK"}
        local priceWithTax = RPC.execute("PriceWithTaxString", zoneData.basePrice, "Services")
        local currentCash = RPC.execute("getCurrentCash")

        while listening do
            if IsControlJustReleased(0, 38) then
                if zoneName == "tattoo_shop" then
                    -- TODO: Make this not retarded, use RPC please FOR THE LOVE OF FUCKING GOD
                    TriggerServerEvent("db-clothing:retrieve_tats")
                    while currentTats == nil do
                        Citizen.Wait(0)
                    end
                end
                currentPrice = isFree and 0 or priceWithTax.total
                currentPriceWithoutTax = zoneData.basePrice
                priceWithTax.text = isFree and 0 or priceWithTax.text
                OpenMenu(zoneName, priceWithTax.text, currentPrice)

                exports["db-ui"]:hideInteraction()
            end
            Wait(0)
        end
    end)
end

RegisterNetEvent('lironbuildhesfirstrigger')
AddEventHandler('lironbuildhesfirstrigger', function()
    OpenMenu("clothing_shop", '', 0)
    startingMenu = true
end)

RegisterNetEvent('db-clothing:openClothing')
AddEventHandler('db-clothing:openClothing', function(pDontShowBarber, pShouldCost, pStartingMenu)
    if pShouldCost ~= nil and pShouldCost then
        local priceWithTax = RPC.execute("PriceWithTaxString", MenuData.clothing_shop.basePrice, "Services")
        currentPrice = priceWithTax.total
        currentPriceWithoutTax = MenuData.clothing_shop.basePrice
        priceWithTax.text = priceWithTax.text
        OpenMenu("clothing_shop", priceWithTax.text, currentPrice)
        startingMenu = pStartingMenu
    else
        currentPrice = 0
        currentPriceWithoutTax = 0
        OpenMenu("clothing_shop", '', 0)
        startingMenu = pStartingMenu
    end
    passedClothing = pDontShowBarber or false
end)

RegisterNetEvent('db-clothing:openBarber', function(pShouldCost)
    if pShouldCost ~= nil and pShouldCost then
        local priceWithTax = RPC.execute("PriceWithTaxString", MenuData.barber_shop.basePrice, "Services")
        currentPrice = priceWithTax.total
        currentPriceWithoutTax = MenuData.barber_shop.basePrice
        priceWithTax.text = priceWithTax.text
        OpenMenu("barber_shop", priceWithTax.text, currentPrice)
        startingMenu = pStartingMenu
    else
        OpenMenu("barber_shop", '', 0)
    end
end)

AddEventHandler("db-polyzone:enter", function(zone, data)
    local currentZone = MenuData[zone]
    if currentZone then
        TriggerEvent("db-clothing:enable", true)
        exports["db-ui"]:showInteraction(("[E] %s"):format(currentZone.text))
        listenForKeypress(zone, currentZone, ((data and data.isFree) and true or false))
    end
end)

AddEventHandler("db-polyzone:exit", function(zone)
    local currentZone = MenuData[zone]
    if currentZone then
        listening = false
        TriggerEvent("db-clothing:enable", false)
        exports["db-ui"]:hideInteraction()
    end
end)

local hairTied = false
local currentHairStyle = nil
local supportedModels = {
  [`mp_f_freemode_01`] = 4,
  [`mp_m_freemode_01`] = 2,
}
AddEventHandler("db-inventory:itemUsed", function(item)
  if item ~= "hairtie" then return end
  local hairValue = supportedModels[GetEntityModel(PlayerPedId())]
  if hairValue == nil then return end
  TriggerEvent("animation:PlayAnimation", "hairtie")
  Wait(1000)
  if not hairTied then
    hairTied = true
    local draw = GetPedDrawableVariation(PlayerPedId(), 2)
    local text = GetPedTextureVariation(PlayerPedId(), 2)
    local pal = GetPedPaletteVariation(PlayerPedId(), 2)
    currentHairStyle = { draw, text, pal }
    SetPedComponentVariation(PlayerPedId(), 2, hairValue, text, pal)
  else
    hairTied = false
    SetPedComponentVariation(PlayerPedId(), 2, currentHairStyle[1], currentHairStyle[2], currentHairStyle[3])
  end
end)

local hasCgChainOn = false
local supportedCGChainModels = {
  [`mp_f_freemode_01`] = 121,
  [`mp_m_freemode_01`] = 152,
}
local equippingChain = false
local chainModels = {
    ["cgchain"] = "cg_chain",
    ["gsfchain"] = "gsf_chain",
}
AddEventHandler("db-inventory:itemUsed", function(pItem, pInfo)
  local model = chainModels[pItem]
  if not model then return end
  if equippingChain then return end
  local info = json.decode(pInfo)
  -- local chainValue = supportedCGChainModels[GetEntityModel(PlayerPedId())]
  -- if chainValue == nil then return end
  equippingChain = true
  TriggerEvent("animation:PlayAnimation", "veston")
  Wait(2600)
  if not hasCgChainOn then
    hasCgChainOn = true
    -- SetPedComponentVariation(PlayerPedId(), 7, chainValue, 0, 0)
    TriggerEvent("db-props:attachProp", model, 10706, -0.02, 0.02, -0.06, -366.0, 19.0, -163.0, true, true)
    Citizen.CreateThread(function()
      while hasCgChainOn do
        Citizen.Wait(math.random(10000, 120000))
        if info.diamond then
          local gemInfo = exports['db-clothing']:getGemData(info.diamond)
          TriggerServerEvent("db-fx:chain:blingDiamonds", GetEntityCoords(PlayerPedId()), "diamonds", gemInfo.count, 100)
        end
        Citizen.Wait(math.random(10000, 60000))
      end
    end)
    Citizen.CreateThread(function()
      while hasCgChainOn do
        Citizen.Wait(math.random(10000, 120000))
        if info.ruby then
          local gemInfo = exports['db-clothing']:getGemData(info.ruby)
          TriggerServerEvent("db-fx:chain:blingDiamonds", GetEntityCoords(PlayerPedId()), "ruby", gemInfo.count, 100)
        end
      end
    end)
    Citizen.CreateThread(function()
      while hasCgChainOn do
        Citizen.Wait(math.random(10000, 120000))
        if info.tanzanite then
          local gemInfo = exports['db-clothing']:getGemData(info.tanzanite)
          TriggerServerEvent("db-fx:chain:blingDiamonds", GetEntityCoords(PlayerPedId()), "tanzanite", gemInfo.count, 100, 0.25)
        end
      end
    end)
  else
    hasCgChainOn = false
    -- SetPedComponentVariation(PlayerPedId(), 7, -1, 0, 0)
    TriggerEvent("db-props:removeProp")
  end
  equippingChain = false
end)

RegisterNetEvent("db-inventory:itemCheck", function(item)
  local model = chainModels[item]
  if not model then return end
  local qty = exports["db-inventory"]:hasEnoughOfItem(item, 1)
  if qty then return end
  hasCgChainOn = false
  TriggerEvent("db-props:removeProp")
end)
local function hasChainAccess()
  return true
end
AddEventHandler("db-clothing:openCGChainCrafting", function()
  if not hasChainAccess() then return end
  TriggerEvent("server-inventory-open", "42087", "Craft")
end)
AddEventHandler("db-clothing:infuseChainWithGems", function()
  if not hasChainAccess() then return end
  local cid = exports["db_exports"]:GetData("citizenid")
  RPC.execute("db-clothing:infuseCGChain", cid)
end)
