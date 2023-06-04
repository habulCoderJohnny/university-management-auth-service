import express, { Application } from 'express'
import cors from 'cors'
import usersRouter from './apps/modules/users/users.route'
import globalErrorHandler from './apps/middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', usersRouter)

// Testing
/* app.get('/', async (req: Request, res: Response) => {
  res.send('Hello from server world! 💯')
}) */

//global error handler
app.use(globalErrorHandler)
export default app
