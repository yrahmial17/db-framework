local blips = {
    {id = "hosp1", name = "Pillbox", scale = 0.7, color = 2, sprite = 61, x = 314.60, y= -590.25, z= 43.28},
    {id = "jcenter", name = "Job Center", scale = 0.7, sprite = 351, color = 17, x=172.82783508301, y=-25.886083602905, z=68.34253692627},
    {id = "PDM", name = "Premium Deluxe Motorsports", scale = 0.7, color = 7, sprite = 326, x=-33.737, y=-1102.322, z= 26.422},
    {id = "bennys1", name = "Bennys", scale = 0.7, sprite = 72, color = 7, x=-36.69, y=-1047.11, z=28.37},
    {id = "bennys2", name = "Bennys", scale = 0.7, sprite = 72, color = 7, x=110.68, y=6626.92, z=31.78},
    {id = "ttruckjob", name = "Impound Lot", scale = 0.7, color = 17, sprite = 68, x = -191.57522583008, y=-1161.8831787109, z=23.671367645264},
    {id = "burgies", name = "Burger Shot", scale = 0.7, color = 8, sprite = 106, x = -1199.61, y = -899.79, z = 14.0},
    {id = 'Taxi', name = 'Taxi', scale = 0.7, color = 5, sprite = 56, x = -12.72, y = -143.3, z = 56.26},
    {id = "MRPD", name = "Mission Row Police Department", scale = 0.7, sprite = 60, color = 3, x = 432.2126, y = -981.8344, z = 30.71072 },
    {id = "SRPD", name = "Blaine County Sheriffs Office", scale = 0.7, sprite = 60, color = 3, x = 1856.148, y = 3682.553, z = 34.26754 },
    {id = "BCSO", name = "Police Department", scale = 0.7, sprite = 60, color = 3, x = -443.0547, y = 6016.782, z = 31.71227 },
    {id = "Bennys", name = "Bennys Motorsport", scale = 0.7, color = 3, sprite = 72, x = -211.8794, y= -1324.497, z= 30.2385},
    {id = "drift_school", name = "Overboost DriftSchool", scale = 0.7, color = 4, sprite = 52, x = -52.61, y= -2524.91, z= 7.41},
    {id = "Jewelry", name = "Jewelry", scale = 0.6, color = 3, sprite = 617, x=-631.38531494141, y=-237.69691467285, z= 38.079071044922},
    {id = "Gallery", name = "The Gallery", scale = 0.6, color = 28, sprite = 184, x=-432.56, y=41.04, z= 52.86},
    {id = "Tuner", name = "Tuner Shop", scale = 0.7, color = 7, sprite = 326, x=155.79, y = -3031.23, z = 7.04},
    {id = "Vehicle Rental", name = "Vehicle Rental", scale = 0.5, color = 2, sprite = 326, x=-281.39743041992, y=-888.72039794922, z= 31.318017959595},
    {id = "Jail", name = "Jail", scale = 0.7, color = 0, sprite = 188, x=1690.4107666016, y=2605.3041992188, z= 45.552829742432},
    {id = "news", name = "Weazel News", scale = 0.7, color = 74, sprite = 590, x = -598.30303955078, y = -929.34429931641, z = 23.86912727356},
    {id = "unicorn", name = "Vanilla Unicorn", scale = 0.6, color = 83, sprite = 121, x=112.47842407227, y=-1306.8358154297, z= 34.643177032471},
    {id = "digitalden", name = "Digital Den", scale = 0.8, color = 26, sprite = 619, x=1136.88, y=-474.85, z=66.44},
    {id = "RecycleCenter", name = "Recycling Center", scale = 0.7, color = 2, sprite = 467, x = 892.29370117188, y= -2171.9182128906, z= 32.286254882812},
    {id = "casino", name = "Diamond Casino", scale = 0.8, color = 26, sprite = 679, x=931.50604248047, y=42.151905059814, z=81.095710754395},
    {id = "hunting", name = "Legal Hunting Area", scale = 0.8, color = 3, sprite = 141, x=-838.5, y=4176.4, z=192.5 },
    {id = "scrapyard", name = "Scrapyard", scale = 0.5, color = 5, sprite = 566, x =-455.73, y = -1707.39, z = 18.8},
    {id = 'HayesAutos', name = 'Hayes Autos Repairs', scale = 0.7, color = 12, sprite = 478, x = -1416.86, y = -447.97, z = 35.91},
    {id = "deanworld", name = "Dean World", scale = 0.6, color = 59, sprite = 266, x=-1591.7, y=-1063.21, z=13.02},
    {id = "pizza", name = "Dickhead Pizza", scale = 0.6, color = 59, sprite = 267, x=443.72967529297, y=135.33685302734, z=100.03579711914},
    {id = "comic", name = "Comic Store", scale = 0.6, color = 65, sprite = 671, x=-143.81, y=230.28, z=94.94},
    {id = "WhiteWidow", name = "White Widow", scale = 0.6, color = 2, sprite = 140, x=200.90530395508, y=-239.56248474121, z=54.07052230835},
}

local circles = {
    { id = "hunting", name = "Legal Hunting Area", opacity = 80, radius = 1000.0, color = 1, sprite = 9, x=-838.5, y=4176.4, z=192.5 },
}

RegisterNetEvent("db-base:blips:start", function()
    Citizen.CreateThread(function()
        for k,v in ipairs(blips) do
            CreateBlip(v)
        end
        for k,v in ipairs(circles) do
            local blip = AddBlipForRadius(v.x,v.y,v.z,v.radius)
            SetBlipColour(blip,v.color)
            SetBlipAlpha(blip,v.opacity)
            SetBlipSprite(blip,9)
        end
    end)
end)

function CreateBlip(data)
    local blip = AddBlipForCoord(data.x, data.y, data.z)
    if data.sprite then
        SetBlipSprite(blip, data.sprite)
    end
    if data.range then
        SetBlipAsShortRange(blip, data.range)
    else
        SetBlipAsShortRange(blip, true)
    end
    if data.color then
        SetBlipColour(blip, data.color)
    end
    if data.display then
        SetBlipDisplay(blip, data.display)
    end
    if data.playername then
        SetBlipNameToPlayerName(blip, data.playername)
    end
    if data.showcone then
        SetBlipShowCone(blip, data.showcone)
    end
    if data.secondarycolor then
        SetBlipSecondaryColour(blip, data.secondarycolor)
    end
    if data.friend then
        SetBlipFriend(blip, data.friend)
    end
    if data.mission then
        SetBlipAsMissionCreatorBlip(blip, data.mission)
    end
    if data.route then
        SetBlipRoute(blip, data.route)
    end
    if data.friendly then
        SetBlipAsFriendly(blip, data.friendly)
    end
    if data.routecolor then
        SetBlipRouteColour(blip, data.routecolor)
    end
    if data.scale then
        SetBlipScale(blip, data.scale)
    else
        SetBlipScale(blip, 0.8)
    end
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(data.name)
    EndTextCommandSetBlipName(blip)
end