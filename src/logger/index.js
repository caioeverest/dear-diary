import * as winston from 'winston'
import config from '../config'

export default winston.createLogger({
  format: winston.format.json(),
  defaultMeta: {
    'app': config.appInfo.app,
    'version': config.appInfo.version,
  },
  transports: [new winston.transports.Console()],
})
