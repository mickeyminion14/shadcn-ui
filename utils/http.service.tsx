import axios, { AxiosResponse } from "axios";

class HttpService {
  private readonly baseURL: string;

  constructor(baseURL: string) {
    // Set the base URL for the requests
    this.baseURL = baseURL;
  }

  // Method for making GET requests
  async get<T>(endpoint: string, params: any = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(
        `${this.baseURL}${endpoint}`,
        { params }
      );
      return response.data;
    } catch (error) {
      // Handle error, e.g., log it or throw a custom exception
      throw error;
    }
  }

  // Method for making POST requests
  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(
        `${this.baseURL}${endpoint}`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Method for making PUT requests
  async put<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put(
        `${this.baseURL}${endpoint}`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Method for making DELETE requests
  async delete<T>(endpoint: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete(
        `${this.baseURL}${endpoint}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default HttpService;
