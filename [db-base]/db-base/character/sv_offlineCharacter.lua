function SetOfflineCharacterData(player)
    if player ~= nil then
        local self = {}
        self.identifier = player.identifier
        self.cid = player.cid
        self.name = player.name
        self.cash = player.cash
        self.bank = player.bank
        self.banknumber = player.banknumber
        -- self.slotname = player.slotname
        self.firstname = player.firstname
        self.lastname = player.lastname
        --self.fullname = player.firstname..' '..player.lastname
        self.sex = player.sex
        self.dob = player.dob
        self.twitter = player.twitter
        self.duty = player.duty
        self.job = player.job
        self.position = player.position
        self.rank = player.rank
        self.bloodType = player.bloodtype
        self.stocks = player.stocks
        self.phone = player.phone
        self.needs = player.status
        return self
    end
end