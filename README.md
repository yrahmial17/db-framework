# db-framework
Advanced FiveM RolePlay Framework.
for more information join us: https://discord.gg/aFHTgKWH
DM YM#9894 for help
DB Framework server running on 0.30MS!

[self-vars] :
[1]   _char.source -- returns player id
[2]   _char.cid -- returns character id.
[3]   _char.identifier -- returns character identifier.
[4]   _char.citizenid -- returns character citizenid.
[5]   _char.name -- returns steam name.
[6]   _char.firstname -- returns character firstname.
[7]   _char.lastname -- returns character last name.
[8]   _char.cash -- returns character cash.
[9]   _char.bank -- returns character bank.
[10]  _char.rank -- returns character rank(user, admin, developer, owner).
[11]  _char.dob -- returns character birthday.
[12]  _char.position -- returns character last position.
[13]  _char.sex -- returns character gender.
[14]  _char.phone -- returns character phone number.
[15]  _char.new -- returns if character is new.
[16]  _char.bankAccount -- returns character bank account number.
[17]  _char.bloodtype -- returns character blood type.
[18]  _char.twitter -- returns character twitter name.
[19]  _char.fullname -- returns character full name.
---------------------------- functions ----------------------------
[self-functions] :
[1]   _char.needs() -- returns character needs.
[1.1] _char.needs().hunger -- returns character hunger.
[1.2] _char.needs().thirst -- returns character thirst.
[2]   _char.job() -- returns character job.
[2.1] _char.job().name -- returns character job name.
[2.2] _char.job().isBoss -- returns if character isBoss.
[2.3] _char.job().grade -- returns character job grade.
[2.4] _char.job().label -- returns character job label.
[2.5] _char.job().onduty -- returns if character is onduty.
[2.6] _char.job().callsign -- returns character job callsign (default none).
[2.7] _char.job().payment -- returns character job payment.
[3]   _char.gang() -- returns character gang.
[4]   _char.setGang(gang) -- sets charcter gang.
[5]   _char.setJob (job, grade) -- sets job.
[6]   _char.setDuty (bool) -- sets duty.
[7]   _char.setPayment (amount) -- sets payment for character/job.
[8]   _char.addMoney (amount, account) -- adds cash/bank money.
[9]   _char.giveMoney (amount, account) -- gives cash/bank money.
[10]  _char.removeMoney (amount, account) -- removes cash/bank money.
[11]  _char.setMoney (amount, account) -- sets cash/bank money.
[12]  _char.setRank (rank) -- sets character group.
[13]  _char.TriggerEvent (eventName, ...) -- sends trigger client event.
[14]  _char.kick (msg) -- disconnects the character.
[15]  _char.get (key) -- returns key.
[16]  _char.set (key, value) -- sets the key and value to some self function.
[17]  _char.clearInventory () -- deleting all character inventory.
[18]  _char.LifeStyle() -- returns character lifestyle type.
[19]  _char.setLifeStyle(lifestyle type) -- sets character lifestyle.
[20]  _char.secondaryJob() -- returns character secondary job.
[21]  _char.setSecondaryJob(secondaryjob name) -- sets character secondary job.
[22]  _char.setCallSign(callsign) -- sets character call sign.

