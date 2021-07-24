const express = require('express')
const lsrService = require('./LsrService')
const lsrRouter = express.Router()
const jsonParser = express.json()

lsrRouter
    .route('/getNeedLSR')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        lsrService.getNeedLSR(knexInstance)
            .then(data => {
                console.log(data)
            }).catch(next)
    })

lsrRouter
    .route('/postNeedLSR')
    .post(jsonParser, async (req, res, next) => {
        const knexInstance = req.app.get('db')
        try {
            lsrService.postNeedLSR(knexInstance, req.body)
        } catch {

        }
    })
module.exports = lsrRouter