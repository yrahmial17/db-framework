RegisterNUICallback("updateSettings", function(data)
    local scoreboard = data["SettingsData"]["scoreboard"] == true and 1 or 0;
    local bg = data["SettingsData"]["bg"] == true and 1 or 0;
    local slotColor = data["SettingsData"]["slotColor"] == true and 1 or 0;
    local opacity = data["SettingsData"]["opacity"] == true and 1 or 0;
    local darkBG = data["SettingsData"]["bg-dark"] == true and 1 or 0;
    SetResourceKvpInt("YM-Multicharacter:char-1", data["SettingsData"]["char"] == true and 1 or 0)
    SetResourceKvpInt("YM-Multicharacter:char-2", data["SettingsData"]["char2"] == true and 1 or 0)
    SetResourceKvpInt("YM-Multicharacter:char-3", data["SettingsData"]["char3"] == true and 1 or 0)
    SetResourceKvpInt("YM-Multicharacter:char-4", data["SettingsData"]["char4"] == true and 1 or 0)
    SetResourceKvpInt("YM-Multicharacter:scoreboard", scoreboard)
    SetResourceKvpInt("YM-Multicharacter:bg", bg)
    SetResourceKvpInt("YM-Multicharacter:slotColor", slotColor)
    SetResourceKvpInt("YM-Multicharacter:opacity", opacity)
    SetResourceKvpInt("YM-Multicharacter:darkBG", darkBG)
    UpdateSettings()
end)

function UpdateSettings()
    local char = GetResourceKvpInt("YM-Multicharacter:char-1") == 1 and true or false
    local char2 = GetResourceKvpInt("YM-Multicharacter:char-2") == 1 and true or false
    local char3 = GetResourceKvpInt("YM-Multicharacter:char-3") == 1 and true or false
    local char4 = GetResourceKvpInt("YM-Multicharacter:char-4") == 1 and true or false
    local scoreboard = GetResourceKvpInt('YM-Multicharacter:scoreboard') == 1 and true or false;
    local bg = GetResourceKvpInt('YM-Multicharacter:bg') == 1 and true or false;
    local color = GetResourceKvpInt('YM-Multicharacter:slotColor') == 1 and true or false;
    local opacity = GetResourceKvpInt('YM-Multicharacter:opacity') == 1 and true or false;
    local darkBG = GetResourceKvpInt('YM-Multicharacter:darkBG') == 1 and true or false;
    SendNUIMessage(
        {
            ["action"] = "updateSettings";
            ["char"] = char;
            ["char2"] = char2;
            ["char3"] = char3;
            ["char4"] = char4;
            ["scoreboard"] = scoreboard;
            ["bg"] = bg;
            ["slotColor"] = color;
            ["opacity"] = opacity;
            ["darkBG"] = darkBG;
        }
    );
end
