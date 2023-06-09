import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './apps/middlewares/globalErrorHandler';
import routers from './apps/routes/routers';
import httpStatus from 'http-status';

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

//handle Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found 😟 does not exist ‼️',
    errorMessages: [
      {
        path: req.originalUrl, //showing notfound route
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
