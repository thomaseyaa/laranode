const UserRepository = require("../Repository/UserRepository")

module.exports = class UserController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async getUsers() {
        const users = new UserRepository(this.req, this.res);
        const result = await users.getUsersData();
        console.log(result);
        return result;
    }

    async postUser(name, email, password){
        const user = new UserRepository(this.req, this.res);
        const result = await user.postUserData(name, email, password);
        console.log(result);
        return result;
    }
}
