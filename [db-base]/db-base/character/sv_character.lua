DBCore = DBCore or {}
-- DBCore["CharactersData"] = {}
function SetCharacterData(source, cid, player)
    local self = {}
    local JobData = json.decode(player.job)
    local needsData = json.decode(player.metaData)
    local GangData = player.gang
    local LifeData = player.lifestyle
    local SecondaryJobData = player.secondaryJob
    local selTable = {
        job = JobData,
        gang = GangData,
        metaData = needsData,
        secondaryJob = SecondaryJobData,
    }
    self.source = source
    self.cid = cid
    self.identifier = player.identifier
    self.citizenid = player.citizenid
    self.name = player.name
    self.firstname = player.firstname
    self.lastname = player.lastname
    self.cash = player.cash
    self.bank = player.bank
    self.rank = player.rank
    -- self.slotname = player.slotname [[gb]]
    self.dob = player.dob
    self.position = player.position
    self.sex = player.sex
    self.phone = player.phone
    self.jail = player.jail
    self.twitter = player.twitter
    self.bloodtype = player.bloodtype
    self.bankAccount = player.banknumber 
    self.fullname = self.firstname..' '..self.lastname
    self.update = function(sel)
        if selTable[sel] then
            exports['db_database']:execute('UPDATE characters SET '..sel..' = @data WHERE identifier = @identifier AND cid = @cid', {
                ['@identifier'] = self.identifier,
                ['@cid'] = cid,
                ['@data'] = json.encode(selTable[sel]),
            })
        else
            print(sel..' not exist')
        end
    end
    self.updateCharacterData = function()
        AddLog(source, 'base', 'Character Functions Updated')
        TriggerClientEvent('db-base:characterData', source, self)
    end
    self.needs = function() 
        return needsData
    end
    self.job = function()
        return JobData
    end
    self.setJob = function(job, grade)
        if DBFramework.Jobs[job] ~= nil then
            JobData.name = job;
            JobData.label = DBFramework.Jobs[job].label;
            JobData.grade = DBFramework.Jobs[job].grades[grade].grade;
            JobData.isBoss = DBFramework.Jobs[job].grades[grade].isBoss or false;
            JobData.onduty = DBFramework.Jobs[job].onduty ~= nil and DBFramework.Jobs[job].onduty or true
            JobData.callsign = "None";
            JobData.payment = DBFramework.Jobs[job].grades[grade].payment;
            AddLog(source, 'base', JobData.label..' Job Seted To '..self.name)
            exports['db_database']:execute('UPDATE characters SET job = @job WHERE identifier = @identifier AND cid = @cid', {
                ['@identifier'] = self.identifier,
                ['@cid'] = cid,
                ['@job'] = json.encode(JobData),
            })
            --DBFramework.Jobs[job].grades[grade].grade for grade name or grade
            TriggerClientEvent('db-base:updateJob', source, JobData)
            self.updateCharacterData()
            return true
        end
        return false
    end

    self.gang = function()
        return GangData
    end

    self.setGang = function(gang)
        if Gangs.Ranks[gang] ~= nil then
            GangData = gang
            AddLog(source, 'base', GangData..' Gang Seted To '..self.name)
            exports['db_database']:execute('UPDATE characters SET gang = @gang WHERE identifier = @identifier AND cid = @cid', {
                ['@identifier'] = self.identifier,
                ['@cid'] = cid,
                ['@gang'] = GangData,
            })
            TriggerClientEvent('db-base:updateGang', source, GangData)
            self.updateCharacterData()
        end
    end

    self.setLifeStyle = function(life)
        if LifeStyle["s"][life] ~= nil then
            LifeData = LifeStyle["s"][life]["label"]
            AddLog(source, 'base', LifeData..' LifeStyle Seted To '..self.name)
            exports['db_database']:execute('UPDATE characters SET lifestyle = @life WHERE identifier = @identifier AND cid = @cid', {
                ['@identifier'] = self.identifier,
                ['@cid'] = cid,
                ['@life'] = LifeData,
            })
            TriggerClientEvent('db-base:updateLifeStyle', source, LifeData)
            self.updateCharacterData()
        end
    end

    self.LifeStyle = function()
        return LifeData;
    end

    self.setSecondaryJob = function(shittyJob)
        if SecondaryJob.Ranks[shittyJob] ~= nil then
            SecondaryJobData = shittyJob
            AddLog(source, 'base', SecondaryJobData.label..' Secondary Job Seted To '..self.name)
            exports['db_database']:execute('UPDATE characters SET secondaryJob = @SecondaryJob WHERE identifier = @identifier AND cid = @cid', {
                ['@identifier'] = self.identifier,
                ['@cid'] = cid,
                ['@SecondaryJob'] = SecondaryJobData,
            })
            TriggerClientEvent('db-base:updateSecondaryJob', source, SecondaryJobData)
            self.updateCharacterData()
        end
    end

    self.secondaryJob = function()
        return SecondaryJobData
    end

    self.setCallSign = function(text)
        JobData.callsign = text
        exports['db_database']:execute('UPDATE characters SET job = @job WHERE identifier = @identifier AND cid = @cid', {
            ['@identifier'] = self.identifier,
            ['@cid'] = cid,
            ['@job'] = json.encode(JobData),
        })
        self.updateCharacterData()
    end
    self.setDuty = function(bool)
        JobData.onduty = bool
        exports['db_database']:execute('UPDATE characters SET job = @job WHERE identifier = @identifier AND cid = @cid', {
            ['@identifier'] = self.identifier,
            ['@cid'] = cid,
            ['@job'] = json.encode(JobData),
        })
        self.updateCharacterData()
    end

    self.setPayment = function(amount)
        if amount and type(amount) == number then
            JobData.payment = amount
            exports['db_database']:execute("UPDATE `characters` SET `job` = @job WHERE `cid` = @cid", {['@cid'] = self.cid, ['@job'] = json.encode(JobData)}, function(done)
            end)
        end
    end

    self.savePlayersMoney = function()
        AddLog(source, 'base', "Players Moneys Saved")
        exports['db_database']:execute('UPDATE characters SET cash = @cash, bank = @bank WHERE identifier = @identifier AND cid = @cid', { ['@identifier'] = self.identifier, ['@cid'] = self.cid, ['@cash'] = self.cash, ['@bank'] = self.bank})
    end

    self.addMoney = function(amount, account)
        local account = account:lower()
        local amount = tonumber(amount)
        if self[account] ~= nil then
            self[account] = self[account] + amount
            AddLog(source, 'money', '$'..amount..' Added To '..self.name..' At '..account)
            TriggerClientEvent("cash:updatebitch", self.source, self[account], amount, "add")
            if self[account] == 'cash' then
                TriggerClientEvent('db-base:updateCash', self.source, self['cash'] + amount)
            elseif self[account] == 'bank' then
                TriggerClientEvent('db-base:updateBank', self.source, self['bank'] + amount)
            end
            self.updateCharacterData()
            self.savePlayersMoney()
        end
    end

    self.giveMoney = function(amount, account)
        local account = account:lower()
        local amount = tonumber(amount)
        if self[account] ~= nil then
            self[account] = self[account] + amount
            AddLog(source, 'money', '$'..amount..' Added To '..self.name..' At '..account)
            TriggerClientEvent("cash:updatebitch",self.source, self[account], amount, "add")
            if self[account] == 'cash' then
                TriggerClientEvent('db-base:updateCash', self.source, self['cash'] + amount)
            elseif self[account] == 'bank' then
                TriggerClientEvent('db-base:updateBank', self.source, self['bank'] + amount)
            end
            self.updateCharacterData()
            self.savePlayersMoney()
        end
    end

    self.removeMoney = function(amount, account)
        local account = account:lower()
        local amount = tonumber(amount)
        if amount < -1 then return end
        if self[account] ~= nil then
            if self[account] - amount < -1 then
                TriggerClientEvent('notification', source, 'You dont have enough money',2)
            else
                self[account] = self[account] - amount
                AddLog(source, 'money', '$'..amount..' Removed To '..self.name..' At '..account)
                TriggerClientEvent("cash:updatebitch", self.source, self[account], amount, "remove")
                if self[account] == 'cash' then
                    TriggerClientEvent('db-base:updateCash', self.source, self['cash'] - amount)
                elseif self[account] == 'bank' then
                    TriggerClientEvent('db-base:updateBank', self.source, self['bank'] - amount)
                end
                self.updateCharacterData()
                self.savePlayersMoney()
            end
        end
    end

    self.setMoney = function(amount, account)
        local account = account:lower()
        local amount = tonumber(amount)
        if amount > -1 then
            if self[account] ~= nil then
                self[account] = amount
                AddLog(source, 'money', self.name..' '..account..' seted to $'..amount)
                TriggerClientEvent("cash:updatebitch", self.source, self[account], amount,  "add")
                if self[account] == 'cash' then
                    TriggerClientEvent('db-base:updateCash', self.source, amount)
                elseif self[account] == 'bank' then
                    TriggerClientEvent('db-base:updateBank', self.source, amount)
                end    
                self.updateCharacterData()
                self.savePlayersMoney()
            end
        else
            TriggerClientEvent('notification', source, 'Cash Error Goto YM Please.',2)
        end
    end

    self.setRank = function(rank) self.rank = rank DBCore.setRank(source, rank) end
    self.TriggerEvent = function(eventName, ...) TriggerClientEvent(eventName, source, ...) end
    self.kick = function(msg) DropPlayer(source, msg) end
    self.get = function(key) return self[key] end
    self.set = function(key, value) self[key] = value end
    self.clearInventory = function() return DBCore.clearInventory(self.citizenid) end
    return self
end

DBCore["GetCitizenId"] = function(src)
    if DBCore["Characters"][src] then
        return DBCore["Characters"][src]["citizenid"];
    end
    return nil;
end

--[[TODO ADD
    ADD HERE EXPORTS LIKE: SETCHARACETERDATA().SET/GET/SETJOB/JOB/ALL THIS SHIT
]]
