fx_version 'adamant'
game 'common'
name 'db_database'
description 'db_database for DB-Framework.'

server_scripts {
  'db-server.js',
  'db-server.lua',
}
client_script "@db-base/errors/client.lua"
client_script 'db-client.js'

files {
  'ui/index.html',
  'ui/js/app.js',
  'ui/css/app.css',
  'ui/fonts/*.woff',
  'ui/fonts/*.woff2',
  'ui/fonts/*.eot',
  'ui/fonts/*.ttf',
}

ui_page 'ui/index.html'
