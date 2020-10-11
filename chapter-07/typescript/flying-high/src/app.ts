import * as express from 'express'

export = function flyingHigh() {
    const app = express()

    app.get('/', (request, response) => {
        response.send('BDD In Action Chapter 7')
    })

    return app
}
