import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { infologger, errorlogger } from './shared/console'

// connectivity
async function server() {
  try {
    await mongoose.connect(config.database_url as string)
    infologger.info('♻️  Database connected✅')

    app.listen(config.port, () => {
      infologger.info(`Application app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Failed connect to database 🚫', err)
  }
}
server()
