export interface GlobalResponse<T> {
    statusCode: number;
    message: string;
    data: T;
  }
  
  export interface IGlobalStatus {
    statusCode: number;
    message: string;
  }
  
  // _________________________
  export interface IResponse<T> {
      data: IResponseData<T>;
      status: number;
      headers: Headers;
    }
    
    export interface IResponseData<T> {
      data: T;
      result: string;
      message: string;
    }
    