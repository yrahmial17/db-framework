fx_version "adamant"
game "gta5"
author "YM#9894"
description "DB-Base | Built By YM#9894"
version "1.0.0"
ui_page "multichar_ui/interface.html"
client_scripts {
	"functions/cl_functions.lua",
	"core/cl_core.lua",
	"initial/cl_initial.lua",
	"multichar/client.lua",
	"multichar/settings.lua",
	"blips/cl_blips.lua",
	"character/cl_character.lua",
	"events/cl_events.lua",
	"gameplay/cl_gameplay.lua",
	"admin/cl_admin.lua",
	"logs/cl_logs.lua",
	"errors/client.lua",
	"commands/cl_commands.lua",
}

server_scripts {
	"functions/sv_functions.lua",
	"core/sv_init.lua",
	"queue/queue.lua",
	"initial/sv_initial.lua",
	"initial/sv_loadFramework.lua",
	"initial/sv_connectionManager.lua",
	"character/sv_character.lua",
	"character/sv_offlineCharacter.lua",
	"database/db.lua",
	"multichar/server.lua",
	"events/sv_events.lua",
	-- "gameplay/sv_gameplay.lua",
	"admin/sv_admin.lua",
	"logs/sv_logs.lua",
	"errors/server.lua",
	"commands/sv_commands.lua",
}

shared_scripts {
	"secondaryjob/whenuworkinghardthenurmoneystartexpanding.lua",
	"gangs/ranks.lua",
	"lifestyles/ymontop.lua",
	"shared/shared.lua"
}

files {
	"multichar_ui/interface.html",
	"multichar_ui/interface.js",
	"multichar_ui/style.css",
}

server_export "DiscordLog"
server_export "AddLog"
export "FetchVehProps"
export "SetVehProps"