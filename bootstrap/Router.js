module.exports = class Router {
    constructor(req, res) {
        this.req = req
        this.res = res
    }

    get(url, callback) {
        if(this.req.method === 'GET') {
            if(this.req.url == url) {
                return callback(this.req, this.res)
            }
        }
    }

    /* Je n'arrive pas a récuperer le paramètre :(
    get(url, callback) {
        if(this.req.method === 'GET') {
            if (url.includes(':')){
                urlId = url.split(':').findIndex(element => !element.includes('/'))+1
                const paramsId = req.params.urlId
                return callback(this.req, this.res)
            } else if (this.req.url == url){
                return callback(this.req, this.res)
            }
        }
    }*/

    post(url, callback) {
        if(this.req.method === 'POST') {
            if(this.req.url == url) {
                return callback(this.req, this.res)
            }
        }
    }

    postData(req) {
        return new Promise((resolve, reject) => {
            try {
                let body = ''
                req.on('data', (chunk) => {
                    body += chunk.toString()
                })
                req.on('end', () => {
                    resolve(body)
                })
            } catch (error) {
                reject(err)
            }
        })
    }
}