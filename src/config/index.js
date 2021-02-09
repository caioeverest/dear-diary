const appPackage = require(`${process.env.PWD}/package.json`);

export default {
  http: {
    port: process.env.HTTP_PORT || 80
  },
  appInfo: {
    app: appPackage ? appPackage.name : 'dear-diary',
    version: appPackage ? appPackage.version : 'unknown',
  },
}
