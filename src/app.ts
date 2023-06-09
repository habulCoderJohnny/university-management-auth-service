import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './apps/middlewares/globalErrorHandler';
import routers from './apps/routes/routers';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1', routers);

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandle promised rejection'))
// })
// throw new ApiError(400, 'Ore Baba Error ')
// next('Ore Baba Error') // Error
// res.send('Hello from server world! 💯')

//global error handler
app.use(globalErrorHandler);
export default app;
