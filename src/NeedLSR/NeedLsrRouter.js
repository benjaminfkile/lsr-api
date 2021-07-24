const express = require('express')
const lsrService = require('./NeedLsrService')
const lsrRouter = express.Router()
const jsonParser = express.json()

lsrRouter
    .route('/getNeedLSR')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        lsrService.getNeedLSR(knexInstance)
            .then((data) => {
                res.json(data)
            }).catch(next)
    })

lsrRouter
    .route('/postNeedLSR')
    .post(jsonParser, async (req, res, next) => {
        const knexInstance = req.app.get('db')
        let postBody = req.body
        postBody.timestamp = Date.now()
        lsrService.postNeedLSR(knexInstance, postBody)
            .then(() => {
                res.status(200).json({
                    success: { message: 'success' }
                })
            }).catch(() => {
                res.status(400).json({
                    error: { message: 'bad request' }
                })
            })
    })
module.exports = lsrRouter