import axios from "axios";

import store from "../store/store";
import loaderAction from "../store/actions/loaderAction";





const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com"
})

axiosInstance.interceptors.request.use((config) => {

  store.dispatch(loaderAction(true))

  config.params = {
    "api_key": "ds45ffds4f8e"
  }
  config.headers = {
    "token": "wke wke wke",
    "content_type": "application"
  }
  // console.log(config);

  return config

}, function (err) {
  console.log(err);

})

axiosInstance.interceptors.response.use((response) => {
  store.dispatch(loaderAction(false))

  // Related response



  return response;
}, (err) => {
  console.log(err);
})




export default axiosInstance