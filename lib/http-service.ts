import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "sonner";

class HttpService {
  private readonly baseURL: string;
  private readonly unauthorizedStatusCodes: Array<number> = [401];
  private readonly basicToken: string;
  private axiosInstance!: AxiosInstance;

  constructor() {
    this.baseURL = "https://isportdevapi.appskeeper.in/v1/admin/";
    this.basicToken = 'asdfjaksdjfieojwi';
    this.initAxios();
  }

  private initAxios() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: 300000
    });


    this.axiosInstance.interceptors.request.use(async (config: any) => {
      if (config.headers) {
        config.headers['platform'] = '2';
        config.headers['timezone'] = new Date().getTimezoneOffset();
        config.headers['language'] = 'en';
        config.headers['authorization'] = `Basic ${this.basicToken}`;

        const auth_token = localStorage.getItem('auth_token');
        if (auth_token && auth_token.length > 0) config.headers['access-token'] = `${auth_token}`;
        return config;
      }
      return config;
    });
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        this.errorHandler(error);
        throw error;
      }
    );
  }

  errorHandler = (error: AxiosError<{ message: string; statusCode: number }>) => {
    if (error && error.response) {
      const { message, statusCode } = error.response.data;
      if (this.unauthorizedStatusCodes.includes(statusCode)) {
        toast.info(message);
        console.log(message);
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      } else {
        toast.info(message);
      }
    } else {
      toast.info(error.message);
    }
    return error.response?.data || error;
  };


  post<T = any>(url: string, data: any, config?: AxiosRequestConfig<any>) {
    return this.axiosInstance.post<T>(url, data, config);
  }

  put<T = any>(url: string, data: any) {
    return this.axiosInstance.put<T>(url, data);
  }

  patch<T = any>(url: string, data: any) {
    return this.axiosInstance.patch<T>(url, data);
  }
  delete<T = any>(url: string) {
    return this.axiosInstance.delete<T>(url);
  }

}
export default HttpService;
