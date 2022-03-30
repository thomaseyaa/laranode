const url = require("url");
const Router = require("../bootstrap/Router")
const UserController =  require("../app/Controllers/UserController")

module.exports = class routes {
    constructor(req, res) {
        this.req = req
        this.res = res
        const router = new Router(this.req, this.res)

        router.get("/", (req, res) => {
            console.log('Test route');
            res.write('Welcome to Laranode !');
            this.res.end();
        });

        router.get("/users", (req, res) => {
            console.log('Test get users');
            const userController = new UserController(req, res);
            userController.getUsers();
        });

        /*router.get("/users/:id", (req, res) => {
            console.log('Test get user');
            const userController = new UserController(this.req, this.res);
            userController.getUser(req.paramsId);
        });*/

        router.post("/users", async (req, res) => {
            console.log('Test post users');
            const userController = new UserController(this.req, this.res);
            const body = await router.postData(this.req);
            userController.postUser(body.name, body.email, body.password);
        });
    }
}