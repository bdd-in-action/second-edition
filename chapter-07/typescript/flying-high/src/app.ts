import * as express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.send('BDD In Action Chapter 7')
})

export = app
