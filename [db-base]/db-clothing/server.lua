RPC.register("PriceWithTaxString", function(pSource, amount, reason)
    local source = source
    local _char = exports["db-base"]:GetCharacter(source)
    return {text = amount.param, total = amount.param}
end)

RPC.register("getCurrentCash", function(pSource)
    local source = source
    local _char = exports["db-base"]:GetCharacter(source)
    return _char.cash
end)

RPC.register("dontwearlacoste, purchase", function(pSource, amount,amountwithouttax,paymentType)
    local source = source
    local _char = exports["db-base"]:GetCharacter(source)
    local amt = amount.param
    if amountwithouttax.param then amt = amountwithouttax.param end
    if paymentType.param == "cash" then
        if _char.cash > amt then
            _char.removeMoney(amt, "cash")
            return true
        else
            return false
        end
    elseif paymentType.param == "bank" then
        if _char.bank > amt then
            _char.removeMoney(amt, "bank")
            return true
        else
            return false
        end
    end
end)

local function checkExistenceClothes(data, cb)
    exports.db_database:execute("SELECT id FROM character_current WHERE id = @id AND cid = @cid", {["id"] = data[1], ['cid'] = data[2]}, function(result)
        local exists = result and result[1] and true or false
        cb(exists)
    end)
end

local function checkExistenceFace(data, cb)
    exports.db_database:execute("SELECT cid FROM character_face WHERE id = @id AND cid = @cid", {["id"] = data[1], ['cid'] = data[2]}, function(result)
        local exists = result and result[1] and true or false
        cb(exists)
    end)
end

RegisterServerEvent("db-clothing:insert_character_current")
AddEventHandler("db-clothing:insert_character_current",function(data)
    local src = source
    local user = exports["db-base"]:GetCharacter(src)
    local userData = {user.identifier, user.cid}

    checkExistenceClothes(userData, function(exists)
        local values = {
            ["id"] = userData[1],
            ["cid"] = userData[2],
            ["model"] = json.encode(data.model),
            ["drawables"] = json.encode(data.drawables),
            ["props"] = json.encode(data.props),
            ["drawtextures"] = json.encode(data.drawtextures),
            ["proptextures"] = json.encode(data.proptextures),
        }

        if not exists then
            local cols = "id, cid, model, drawables, props, drawtextures, proptextures"
            local vals = "@id, @cid, @model, @drawables, @props, @drawtextures, @proptextures"

            exports.db_database:execute("INSERT INTO character_current ("..cols..") VALUES ("..vals..")", values, function()
            end)
            return
        end    

        local set = "model = @model,drawables = @drawables,props = @props,drawtextures = @drawtextures,proptextures = @proptextures"
        exports.db_database:execute("UPDATE character_current SET "..set.." WHERE id = @id AND cid = @cid", values)
    end)
end)

RegisterServerEvent("db-clothing:insert_character_face")
AddEventHandler("db-clothing:insert_character_face",function(data)
    local src = source
    local user = exports["db-base"]:GetCharacter(src)
    local userData = {user.identifier, user.cid}
    checkExistenceFace(userData, function(exists)
        if data.headBlend == "null" or data.headBlend == nil then
            data.headBlend = '[]'
        else
            data.headBlend = json.encode(data.headBlend)
        end
        local values = {
            ["id"] = userData[1],
            ["cid"] = userData[2],
            ["hairColor"] = json.encode(data.hairColor),
            ["headBlend"] = data.headBlend,
            ["headOverlay"] = json.encode(data.headOverlay),
            ["headStructure"] = json.encode(data.headStructure),
        }

        if not exists then
            local cols = "id, cid, hairColor, headBlend, headOverlay, headStructure"
            local vals = "@id, @cid, @hairColor, @headBlend, @headOverlay, @headStructure"

            exports.db_database:execute("INSERT INTO character_face ("..cols..") VALUES ("..vals..")", values, function()
            end)
            return
        end

        local set = "hairColor = @hairColor,headBlend = @headBlend, headOverlay = @headOverlay,headStructure = @headStructure"
        exports.db_database:execute("UPDATE character_face SET "..set.." WHERE id = @id AND cid = @cid", values )
    end)
end)

RegisterServerEvent("db-clothing:get_character_face")
AddEventHandler("db-clothing:get_character_face",function(pSrc)
    local src = source or pSrc
    local user = exports["db-base"]:GetCharacter(src)
    local identifier = user.identifier
    local cid = user.cid
    exports.db_database:execute("SELECT cc.model, cf.hairColor, cf.headBlend, cf.headOverlay, cf.headStructure FROM character_face cf INNER JOIN character_current cc on cc.id = cf.id AND cc.cid = cf.cid WHERE cf.id = @id AND cf.cid = @cid", {['id'] = identifier, ['cid'] = cid}, function(result)
        if (result ~= nil and result[1] ~= nil) then
            local temp_data = {
                hairColor = json.decode(result[1].hairColor),
                headBlend = json.decode(result[1].headBlend),
                headOverlay = json.decode(result[1].headOverlay),
                headStructure = json.decode(result[1].headStructure),
            }
            local model = tonumber(result[1].model)
            if model == 1885233650 or model == -1667301416 then
                TriggerClientEvent("db-clothing:setpedfeatures", src, temp_data)
            end
        else
            TriggerClientEvent("db-clothing:setpedfeatures", src, false)
            TriggerClientEvent("db-clothing:newCharacterSpawned", src)
        end
	end)
end)


RegisterServerEvent("db-clothing:get_character_current")
AddEventHandler("db-clothing:get_character_current",function(pSrc)
    local src = pSrc
    local user = exports["db-base"]:GetCharacter(src)
    if user ~= nil then
        exports.db_database:execute("SELECT * FROM character_current WHERE id = @id AND cid = @cid", {['id'] = user.identifier, ['cid'] = user.cid}, function(result)
            if (result ~= nil and result[1] ~= nil) then
                local temp_data = {
                    model = result[1].model,
                    drawables = json.decode(result[1].drawables),
                    props = json.decode(result[1].props),
                    drawtextures = json.decode(result[1].drawtextures),
                    proptextures = json.decode(result[1].proptextures),
                }
                TriggerClientEvent("db-clothing:setclothes", src, temp_data,0, src)
            end
        end)
    else
        TriggerClientEvent('notification', src, 'do /logout and goto YM please.',2)
    end
end)

RegisterServerEvent("db-clothing:checkIt")
AddEventHandler("db-clothing:checkIt", function()
    local src = source
    local _char = exports["db-base"]:GetCharacter(src)
    local id = _char.identifier
    local cid = _char.cid
    exports.db_database:execute("SELECT count(model) FROM character_current WHERE id = @identifier AND cid =  @cid LIMIT 1", {
        ['identifier'] = id,
        ['cid'] = cid,
    }, function(result)
        local isService = false;
        if result == 0 then
            exports.db_database:execute("select count(cid) assExist from character_current where id = @identifier AND cid =  @cid", {['identifier'] = id, ['cid'] = cid}, function(clothingCheck)
                local existsClothing = clothingCheck[1].assExist
                TriggerClientEvent('db-clothing:setclothes',src,{},existsClothing)
            end)
            return
        else
            TriggerEvent("db-clothing:get_character_current", src)
        end
        TriggerClientEvent("db-clothing:inService",src,isService)
    end)
end)

-- RegisterServerEvent("db-clothing:checkIt3")
-- AddEventHandler("db-clothing:checkIt3",function()
--     local src = source
--     local user = exports["db-base"]:GetCharacter(src)
--     local userData = {user.identifier, user.cid}
--     checkExistenceClothes(userData, function(exists)
--         if exists then
--             TriggerEvent('db-clothing:get_character_current', src)
--         else
--             TriggerClientEvent("db-clothing:nitzan", src)
--         end
--     end)
-- end)

RegisterServerEvent("db-clothing:retrieve_tats")
AddEventHandler("db-clothing:retrieve_tats", function(pSrc)
    local src = (not pSrc and source or pSrc)
	local char = exports["db-base"]:GetCharacter(src)
	exports.db_database:execute("SELECT * FROM character_tattoos WHERE identifier = @identifier AND cid = @cid", {['identifier'] = char.identifier, ['cid'] = char.cid}, function(result)
        if(#result == 1) then
			TriggerClientEvent("db-clothing:settattoos", src, json.decode(result[1].tattoos))
		else
			local tattooValue = "{}"
			exports.db_database:execute("INSERT INTO character_tattoos (identifier, cid, tattoos) VALUES (@identifier, @cid, @tattoo)", {['identifier'] = char.identifier, ['cid'] = char.cid, ['tattoo'] = tattooValue})
			TriggerClientEvent("db-clothing:settattoos", src, {})
		end
	end)
end)

RegisterServerEvent("db-clothing:set_tats")
AddEventHandler("db-clothing:set_tats", function(tattoosList)
	local src = source
	local char = exports["db-base"]:GetCharacter(src)
	exports.db_database:execute("UPDATE character_tattoos SET tattoos = @tattoos WHERE identifier = @identifier AND cid = @cid", {['tattoos'] = json.encode(tattoosList), ['identifier'] = char.identifier, ['cid'] = char.cid})
end)


RegisterServerEvent("db-clothing:get_outfit")
AddEventHandler("db-clothing:get_outfit",function(slot)
    if not slot then return end
    local src = source

    local user = exports["db-base"]:GetCharacter(src)
    local identifier = user.identifier
    local cid = user.cid

    

    exports.db_database:execute("SELECT * FROM character_outfits WHERE id = @id and cid = @cid and slot = @slot", {
        ['id'] = identifier,
        ['cid'] = cid,
        ['slot'] = slot
    }, function(result)
        if result and result[1] then
            if result[1].model == nil then
                TriggerClientEvent("notification", src, "Can not use.",2)
                return
            end

            local data = {
                model = result[1].model,
                drawables = json.decode(result[1].drawables),
                props = json.decode(result[1].props),
                drawtextures = json.decode(result[1].drawtextures),
                proptextures = json.decode(result[1].proptextures),
                hairColor = json.decode(result[1].hairColor)
            }

            TriggerClientEvent("db-clothing:setclothes", src, data,0)

            local values = {
                ["id"] = identifier,
                ["cid"] = cid,
                ["model"] = data.model,
                ["drawables"] = json.encode(data.drawables),
                ["props"] = json.encode(data.props),
                ["drawtextures"] = json.encode(data.drawtextures),
                ["proptextures"] = json.encode(data.proptextures),
            }

            local set = "model = @model, drawables = @drawables, props = @props,drawtextures = @drawtextures,proptextures = @proptextures"
            exports.db_database:execute("UPDATE character_current SET "..set.." WHERE id = @id and cid = @cid",values)
        else
            TriggerClientEvent("notification", src, "No outfit on slot " .. slot,2)
            return
        end
	end)
end)

RegisterServerEvent("db-clothing:set_outfit")
AddEventHandler("db-clothing:set_outfit",function(slot, name, data)
    if not slot then return end
    local src = source

    local user = exports["db-base"]:GetCharacter(src)
    local identifier = user.identifier
    local cid = user.cid

    

    exports.db_database:execute("SELECT slot FROM character_outfits WHERE id = @id and cid = @cid and slot = @slot", {
        ['id'] = identifier,
        ['cid'] = cid,
        ['slot'] = slot
    }, function(result)
        if result and result[1] then
            local values = {
                ['id'] = identifier,
                ['cid'] = cid,
                ["slot"] = slot,
                ["name"] = name,
                ["model"] = json.encode(data.model),
                ["drawables"] = json.encode(data.drawables),
                ["props"] = json.encode(data.props),
                ["drawtextures"] = json.encode(data.drawtextures),
                ["proptextures"] = json.encode(data.proptextures),
                ["hairColor"] = json.encode(data.hairColor),
            }

            local set = "model = @model,name = @name,drawables = @drawables,props = @props,drawtextures = @drawtextures,proptextures = @proptextures,hairColor = @hairColor"
            exports.db_database:execute("UPDATE character_outfits SET "..set.." WHERE id = @id and cid = @cid and slot = @slot",values)
        else
            local cols = "id, cid, model, name, slot, drawables, props, drawtextures, proptextures, hairColor"
            local vals = "@id, @cid, @model, @name, @slot, @drawables, @props, @drawtextures, @proptextures, @hairColor"

            local values = {
                ['id'] = identifier,
                ['cid'] = cid,
                ["name"] = name,
                ["slot"] = slot,
                ["model"] = data.model,
                ["drawables"] = json.encode(data.drawables),
                ["props"] = json.encode(data.props),
                ["drawtextures"] = json.encode(data.drawtextures),
                ["proptextures"] = json.encode(data.proptextures),
                ["hairColor"] = json.encode(data.hairColor)
            }

            exports.db_database:execute("INSERT INTO character_outfits ("..cols..") VALUES ("..vals..")", values, function()
                TriggerClientEvent("notification", src, name .. " stored in slot " .. slot,3)
            end)
        end
	end)
end)


RegisterServerEvent("db-clothing:remove_outfit")
AddEventHandler("db-clothing:remove_outfit",function(slot)
    local src = source
    local user = exports["db-base"]:GetCharacter(src)
    local identifier = user.identifier
    local cid = user.cid
    local slot = slot
    
    exports.db_database:execute( "DELETE FROM character_outfits WHERE id = @id and cid = @cid AND slot = @slot", {['id'] = identifier, ['cid'] = cid,  ["slot"] = slot } )
    TriggerClientEvent("notification", src,"Removed slot " .. slot .. ".",3)
end)

RegisterServerEvent("db-clothing:list_outfits")
AddEventHandler("db-clothing:list_outfits",function()
    local src = source
    local user = exports["db-base"]:GetCharacter(src)
    local cid = {user.identifier, user.cid}
    exports.db_database:execute("SELECT slot, name FROM character_outfits WHERE id = @id and cid = @cid", {['id'] = cid[1], ['cid'] = cid[2]}, function(skincheck)
        TriggerClientEvent("db-clothing:FUCKOFFHEREBRO",src, skincheck)
        -- for i = 1, #skincheck do
        --     TriggerClientEvent('db-context:sendMenu', src, {
        --         {
        --             id = skincheck[i].slot,
        --             header = "Outfit Name: " ..skincheck[i].name,
        --             txt = "slot | "..skincheck[i].slot,
        --             params = {
        --                 event = "db-clothing:list:outfits",
        --                 args = {
        --                     slot = skincheck[i].slot
        --                 }
        --             }
        --         },
        --     })
        -- end
	end)
end)

RegisterServerEvent("db-clothing:attempt:change", function(pSlot, pNewName)
    local pSrc = source
    local user = exports["db-base"]:GetCharacter(pSrc)
    local cid = {user.identifier, user.cid}

    exports.db_database:execute('UPDATE character_outfits SET name = @name WHERE id = @id AND cid = @cid slot = @slot', {
        ['@name'] = pNewName,
        ['@id'] = cid[1],
        ['@cid'] = cid[2],
        ['@slot'] = pSlot
    }, function()
    end)

    TriggerClientEvent("notification", pSrc, "You have successfully re-named a outfit")
    Citizen.Wait(100)
    TriggerClientEvent("db-clothing:return", pSrc)
end)

RegisterServerEvent("db-clothing:options:oufits", function(pSlot)
    local src = source
    TriggerClientEvent('db-context:sendMenu', src, {
		{
			id = 1,
			header = "< Go Back",
			txt = "",
			params = {
				event = "db-clothing:return"
			}
		},
		{
			id = 2,
			header = "Use Outfit",
			txt = "Change your current clothes to this saved outfit",
			params = {
				event = "db-clothing:use:outfit",
				args = {
					slot = pSlot
				}
			}
			
		},
        {
			id = 3,
			header = "Delete Outfit",
			txt = "Delete the outfit from the wardrobe",
			params = {
				event = "db-clothing:remove:outfit",
				args = {
					slot = pSlot
				}
			}
			
		},
        {
			id = 4,
			header = "Rename Outfit",
			txt = "Change the name of the current outfit selected",
			params = {
				event = "db-clothing:attempt:change",
				args = {
					slot = pSlot
				}
			}
			
		},
	})
end)

RegisterServerEvent("clothing:checkMoney")
AddEventHandler("clothing:checkMoney", function(askingPrice)
    local src = source
    local target = exports["db-base"]:GetCharacter(src)

    if not askingPrice then
        askingPrice = 0
    end

    if (tonumber(target.cash) >= askingPrice) then
        target.removeMoney(askingPrice, 'cash')
        TriggerClientEvent("notification",src, "You Paid $"..askingPrice,3)
        TriggerClientEvent("db-clothing:hasEnough",src,menu)
    else
        TriggerClientEvent("notification",src, "You need $"..askingPrice.." + Tax.",2)
    end
end)