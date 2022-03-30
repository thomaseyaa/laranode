require('dotenv').config()
const {DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD} = process.env

const host = DB_HOST;
const port = DB_PORT;
const database = DB_NAME;
const user = DB_USER;
const password = DB_PASSWORD;

module.exports = {
    host,
    port,
    database,
    user,
    password,
}
