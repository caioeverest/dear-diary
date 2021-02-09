import fs from 'fs'
import express from 'express'
import bodyParser from 'body-parser'
import Config from '../config'
import logger from '../logger'
import serverRenderer from '../controller'

const app = express()
const router = express.Router()
const jsHeader = { 'Content-Type': 'application/javascript' }

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


router.get('/health', (req, res) => {
  return res.status(200).send({ message: 'i\'m fine 8-)' })
})

router.get('/', serverRenderer)

router.get(`/public/app-bundle.js`, (req, res) => {
  res.writeHead(200, jsHeader)
  return fs.createReadStream(`${process.cwd()}/public/app-bundle.js`).pipe(res)
})

router.get(`/public/require.js`, (req, res) => {
  res.writeHead(200, jsHeader)
  return fs.createReadStream(`${process.cwd()}/public/require.js`).pipe(res)
})

const server = app.listen(Config.http.port, () => {
  app.use(router)
  logger.info(`Server started running on port ${Config.http.port}`) // eslint-disable-line
})

const signals = {
  SIGHUP: 1,
  SIGINT: 2,
  SIGTERM: 15,
}

const shutdown = (signal, value) => {
  logger.info('Shutting down the server')
  server.close(() => {
    logger.info(`server stopped by ${signal} with value ${value}`)
    process.exit(128 + value)
  })
}

Object.keys(signals).forEach((signal) => {
  process.on(signal, () => {
    logger.info(`process received a ${signal} signal`)
    shutdown(signal, signals[signal])
  })
})

export default server
