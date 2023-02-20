handcuffed = false
handcuffedwalking = false
robbing = false
daytime = true
intrunk = false
incall = false
local isOnline = false
local CharacterData = {}
RegisterNetEvent('db-base:characterSpawned', function()
    isOnline = true
    CharacterData = exports['db-base']:GetCharacter()
    if CharacterData['job']['name'] == 'police' or 'ems' then
        TriggerServerEvent('db_exports:DoctorCount')
        TriggerServerEvent('db_exports:OfficerCount')
    end
end)

RegisterNetEvent('db-base:updateJob', function(Job)
    CharacterData.job = Job
    TriggerServerEvent('db_exports:DoctorCount')
    TriggerServerEvent('db_exports:OfficerCount')
end)

RegisterNetEvent('db-base:updateSecondaryJob', function(SecondaryJob)
    CharacterData.secondaryJob = SecondaryJob
end)

RegisterNetEvent('db-base:updateDuty', function(Duty)
    CharacterData.onDuty = Duty
    if CharacterData.onDuty == nil then
        CharacterData.onDuty = false
    end
end)

RegisterNetEvent('db-base:updateCash', function(Cash)
	CharacterData.cash = Cash
end)

RegisterNetEvent('db-base:updateBank', function(Bank)
	CharacterData.bank = Bank
end)

RegisterNetEvent('db-base:updateGang', function(Gang)
    CharacterData.gang = Gang
    fivem(CharacterData.gang)
end)
local blip;
RegisterNetEvent('db-base:updateLifeStyle', function(LifeStyle)
    CharacterData.lifestyle = LifeStyle
end)

function fivem(gang)
    if blip ~= nil then
        RemoveBlip(blip)
        blip = nil;
    end
    -- if GetData("lifestyle") then
        if gang == "bloods" then
            CreateBlip(1417.1949462891, 6339.27734375, 24.398155212402, 51, 66, "Pills")
            TriggerEvent("notification", "check up ur GPS mate, search for a pills.")
        elseif gang == "vagos" then
            CreateBlip(1454.9885253906, -1651.9827880859, 66.994873046875, 514, 50, "Meth") -- todo coords
            TriggerEvent("notification", "check up ur GPS mate, search for a package")
        elseif gang == "crips" then
            CreateBlip(-519.67358398438, 5308.0703125, 80.239791870117, 514, 57, "Cocaine") -- todo coords
            TriggerEvent("notification", "check up ur GPS mate, search for a package")
        elseif gang == "ballas" then
            CreateBlip(-1146.6707763672, 4941.0390625, 222.2686920166, 514, 46, "Weed") -- here too
            TriggerEvent("notification", "check up ur GPS mate, search for a package")
        else
            RemoveBlip(blip)
            blip = nil;
        end
    -- else-
    --cheater
    -- print("not life syle.")
    -- end
end

function CreateBlip(x,y,z,sprite,color,text)
    blip = AddBlipForCoord(x,y,z)
    SetBlipSprite(blip, sprite)
    SetBlipScale(blip, 0.7)
    SetBlipColour(blip,color)
    SetBlipRoute(blip, true)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(text)
    EndTextCommandSetBlipName(blip)    
end

RegisterNetEvent('db-base:updateRank', function(Rank)
	CharacterData.rank = Rank
end)

DoctorCount = 0
RegisterNetEvent('db_exports:SetDoctorCount', function(amount)
    DoctorCount = amount
end)

OfficerCount = 0
RegisterNetEvent('db_exports:SetOfficerCount', function(amount)
    OfficerCount = amount
end)

exports('jobCount', function(job)
    local count = 0
    if (job == 'police') then
        count =  OfficerCount
    elseif (job == 'ems') then
        count = DoctorCount
    end
    return count
end)

function money(amount, action, account)
    TriggerServerEvent('db_exports:money',amount, action, account)
end

function GetData(checkType)
    local LocalPlayer = exports['db-base']:GetCharacter()
    if LocalPlayer then
        local checkType = string.lower(checkType)
        local data;
        if (checkType == "robbing") then
            data = robbing
        end

        if (checkType == "dead") then
            data = exports['ragdoll']:GetDeathStatus()
        end

        if (checkType == 'disabled') then
            if exports['ragdoll']:GetDeathStatus() or handcuffed then --[[todo add here handcuffed]]
                data = true
            end
        end

        if checkType == "handcuffed" then
            if handcuffedwalking or handcuffed then
                data = true
            else
                data = false
            end
        end

        if checkType == "intrunk" then
            data = intrunk
        end

        if (checkType == "gang") then
            data = CharacterData.gang
        end

        if (checkType == "cid") then
            data = CharacterData.cid
        end

        if (checkType == 'citizenid') then
            data = CharacterData.citizenid
        end

        if (checkType == 'identifier') then
            data = CharacterData.identifier
        end

        if (checkType == "incall") then
            data = incall
        end

        if (checkType == "twitter") then
            data = "@" .. CharacterData.firstname .. "_" .. CharacterData.lastname
        end

        if (checkType == "firstname") then
            data = CharacterData.firstname
        end

        if (checkType == "lastname") then
            data = CharacterData.lastname 
        end
    
        if (checkType == "fullname") then
            data = CharacterData.firstname .. " " .. CharacterData.lastname 
        end

        if (checkType == "job_name") then
            data = CharacterData.job.name
        end

        if (checkType == "job_label") then
            data = CharacterData.job.label
        end

        if (checkType == "job_grade") then
            data = CharacterData.job.grade
        end

        if (checkType == "job_boss") then
            data = CharacterData.job.isBoss
        end

        if (checkType == "job_duty") then
            data = CharacterData.onDuty
        end

        if (checkType == "job_callsign") then
            data = CharacterData.job.callsign
        end

        if (checkType == "job_payment") then
            data = CharacterData.job.payment
        end

        if (checkType == "lifestyle") then
            data = CharacterData.lifestyle
        end

        if (checkType == "secondary_job_name") then 
            data = CharacterData.secondaryJob
        end

        if (checkType == "jail") then
            data = CharacterData.jail
        end
        
        if (checkType == "phone") then
            data = CharacterData.phone
        end

        if (checkType == "isonline") then
            data = isOnline
        end
        
        --[[if (checkType == "creditCard") then -- not active anymore
            data = CharacterData.creditCard
        end

        if (checkType == "creditCardPin") then
            data = CharacterData.creditCardPin
        end

        if (checkType == "creditCardActive") then
            data = CharacterData.creditCardActive
        end

        if (checkType == "creditCardCvv") then
            data = CharacterData.creditCardCvv
        end]]
        
        if (checkType == "bank") then
            data = LocalPlayer.bank --CharacterData.bank
        end

        if (checkType == "cash") then
            data = LocalPlayer.cash --CharacterData.cash
        end

        if (checkType == "rank") then
            data = CharacterData.rank
        end

        if (checkType == 'position') then
            data = CharacterData.lastPosition
        end
        
        if (checkType == "bankAccount") then
            data = CharacterData.bankAccount
        end

        if (checkType == "daytime")then
            data = daytime
        end
        return data
    end
    return false
end


function GlobalObject(object)
   NetworkRegisterEntityAsNetworked(object)
   local netid = ObjToNet(object)
   SetNetworkIdExistsOnAllMachines(netid, true)
   NetworkSetNetworkIdDynamic(netid, true)
   SetNetworkIdCanMigrate(netid, false) 
   for i = 1, 32 do
     SetNetworkIdSyncToPlayer(netid, i, true)
   end
   print("New networked object: " .. netid)
end

local pedsused = {}

function GetClosestNPC()
    local playerped = PlayerPedId()
    local playerCoords = GetEntityCoords(playerped)
    local handle, ped = FindFirstPed()
    local success
    local rped = nil
    local distanceFrom
    repeat
        local pos = GetEntityCoords(ped)
        local distance = #(playerCoords - pos)
        if canPedBeUsed(ped) and distance < 5.0 and (distanceFrom == nil or distance < distanceFrom) then
            distanceFrom = distance
            rped = ped
            pedsused["conf"..rped] = true
        end
        success, ped = FindNextPed(handle)
    until not success
    EndFindPed(handle)
    return rped
end

function canPedBeUsed(ped)
    if ped == nil then
        return false
    end
    if pedsused["conf"..ped] then
      return false
    end
    if ped == PlayerPedId() then
        return false
    end

    if not DoesEntityExist(ped) then
        return false
    end

    if IsPedAPlayer(ped) then
        return false
    end

    if IsPedFatallyInjured(ped) then
        return false
    end

    if IsPedFleeing(ped) or IsPedRunning(ped) or IsPedSprinting(ped) then
        return false
    end

    if IsPedInCover(ped) or IsPedGoingIntoCover(ped) or IsPedGettingUp(ped) then
        return false
    end

    if IsPedInMeleeCombat(ped) then
        return false
    end

    if IsPedShooting(ped) then
        return false
    end

    if IsPedDucking(ped) then
        return false
    end

    if IsPedBeingJacked(ped) then
        return false
    end

    if IsPedSwimming(ped) then
        return false
    end

    if IsPedSittingInAnyVehicle(ped) or IsPedGettingIntoAVehicle(ped) or IsPedJumpingOutOfVehicle(ped) or IsPedBeingJacked(ped) then
        return false
    end

    if IsPedOnAnyBike(ped) or IsPedInAnyBoat(ped) or IsPedInFlyingVehicle(ped) then
        return false
    end

    local pedType = GetPedType(ped)
    if pedType == 6 or pedType == 27 or pedType == 29 or pedType == 28 then
        return false
    end
    return true
end

function IsPedNearCoords(x,y,z)
    local handle, ped = FindFirstPed()
    local pedfound = false
    local success
    repeat
        local pos = GetEntityCoords(ped)
        local distance = #(vector3(x,y,z) - pos)

        if distance < 5.0 then
          pedfound = true
        end
        success, ped = FindNextPed(handle)
    until not success
    EndFindPed(handle)
    if pedfound then
      print("got one")
    else
      print("nup brah")
    end
    return pedfound
end

RegisterNetEvent('db_exports:incall')
AddEventHandler('db_exports:incall', function(status)
  incall = status
end)

RegisterNetEvent('daytime')
AddEventHandler("daytime",function(passedTime)
    daytime = passedTime
    if daytime then
      print("its daytime")
    else
      print("its not daytime")
    end
end)

RegisterNetEvent('police:currentHandCuffedState')
AddEventHandler('police:currentHandCuffedState', function(handCuffed,handCuffedWalking)
	handcuffed = handCuffed
    handcuffedwalking = handCuffedWalking
end)

RegisterNetEvent('robbing')
AddEventHandler("robbing",function(rob)
    robbing = rob
    if robbing then
      print("is robbing")
    else
      print("is not robbing")
    end
end)

RegisterNetEvent("db_exports:intrunk")
AddEventHandler("db_exports:intrunk", function(trunksent)
  intrunk = trunksent
end)