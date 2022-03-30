const { Client } = require('pg')
    const {host, port, database, user, password} = require('../config/app.js')

console.log(database)

module.exports = class Db {
    constructor() {
        this.connection = new Client({
            host     : host,
            port     : port,
            database : database,
            user     : user,
            password : password
        });
        this.connection.connect()
    }
}