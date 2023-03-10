import axiosClient from "../../axios-client.js";

export class CategoryService {
  static BASE_URL = '/categories'

  static getCategories() {
    return axiosClient.get(this.BASE_URL)
  }

  static getCategoriesTree() {
    return axiosClient.get(this.BASE_URL, {
      params: {
        asTree: 1,
        withProducts: 1
      }
    })
  }
}
