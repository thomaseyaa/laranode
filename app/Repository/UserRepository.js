const Db = require("../../bootstrap/Db")

module.exports = class UserRepository {
    constructor(req, res) {
        this.db = new Db();
        this.req = req
        this.res = res
    }

    async getUsersData() {
        const query = await this.db.connection.query("SELECT * FROM users");
        const values = query.rows;
        if(values.length == 0){
            this.res.write('No user in the database');
            this.res.end();
        }
        else{
            this.res.write(JSON.stringify(values));
            this.res.end();
            return values;
        }
    }

    async postUserData(name, email, password) {
        const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *'
        const values = [name, email, password]
        try {
            const res = await this.db.connection.query(query, values)
            console.log(res);
            this.res.write(JSON.stringify(res.rows));
        } catch(err) {
            console.log(err.stack)
        }
        this.res.end()
    }
}