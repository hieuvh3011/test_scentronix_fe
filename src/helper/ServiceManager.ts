import axios, { AxiosError } from "axios";
import environment from "../../public/env/environment";
export class ServicesManager {
  public static DEFAULT_URL = `${environment.base_url}`;

  public static PREADMISSION_URL = `${this.DEFAULT_URL}/pre-admissions`;

  baseUrl!: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getAxiosInstance = (formData = false) => {
    const instance = axios.create({
      baseURL: this.baseUrl,
      timeout: 1000 * 100,
    });
    instance.interceptors.request.use(
      async (config) => {
        const cloneConfig = { ...config };

        if (cloneConfig.headers) {
          if (!!formData) {
            cloneConfig.headers["Content-Type"] = `multipart/form-data`;
          }
          cloneConfig.headers["Content-Type"] = `application/json`;
          cloneConfig.headers["x-timezone-offset"] = new Date().getTimezoneOffset();
        }

        return cloneConfig;
      },
      (error) => Promise.reject(error),
    );

    instance.interceptors.response.use(
      async (response) => {
        return response;
      },
      (error: AxiosError) => ServicesManager._responseErrorHandler(error),
    );
    return instance;
  };

  private static _responseErrorHandler = async (error: AxiosError) => {
    return Promise.reject(error.response);
  };
}

export default ServicesManager;
