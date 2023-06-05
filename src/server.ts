import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { Server } from 'http'
import { infologger, errorlogger } from './shared/console'

process.on('uncaoughtException', err => {
  errorlogger.error(err)
  process.exit(1)
})

let serverStatus: Server

// connectivity
async function server() {
  try {
    await mongoose.connect(config.database_url as string)
    infologger.info('♻️  Database connected✅')

    serverStatus = app.listen(config.port, () => {
      infologger.info(`Application app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Failed connect to database 🚫', err)
  }

  process.on('unhandleRejection', error => {
    if (serverStatus) {
      serverStatus.close(() => {
        errorlogger.error('Server closed ', error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
server()
process.on('SIGTERM', () => {
  infologger.info('SIGTERM is received')
  if (serverStatus) {
    serverStatus.close()
  }
})
