import axiosClient from "../../axios-client.js";

export class ProductService {
  static BASE_URL = '/products'

  static store(data) {
    return axiosClient.post(this.BASE_URL, data)
  }
}
