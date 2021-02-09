import generateBundle from './bundler'
import logger from '../logger'

const build = async () => {
  logger.info("Building bundle...")
  generateBundle('app', `${process.env.PWD}/src/ui/entrypoint.js`)
  logger.info("Bundle builded with success!")
}

build()
export default build
