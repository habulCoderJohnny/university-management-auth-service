import { IGenericErrorMessage } from './error';

//GENERIC
export type IGenericResponse<T> = {
  meta: {
    pageNo: number;
    limit: number;
    totalPg: number;
  };
  data: T;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
