var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_PROTOCOL: '"http://"',
    API_PREFIX: '"/v1"',
    API_ROOT: '"api.kongroo.dev"',
    ADMIN_PROTOCOL: '"http://"',
    ADMIN_ROOT: '"localhost:8081"',
    ADMIN_PREFIX: '""'
})
