import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { Server } from 'http'
import { infologger, errorlogger } from './shared/console'

// connectivity
async function server() {
  let server: Server
  try {
    await mongoose.connect(config.database_url as string)
    infologger.info('♻️  Database connected✅')

    server = app.listen(config.port, () => {
      infologger.info(`Application app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Failed connect to database 🚫', err)
  }

  process.on('unhandleRejection', error => {
    console.log('unhandle detected!! w re close server')

    if (server) {
      server.close(() => {
        errorlogger.error('Server closed ', error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
server()
