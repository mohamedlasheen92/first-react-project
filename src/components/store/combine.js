import { combineReducers } from "redux";
import langReducer from "./reducers/langReducer";
import loaderReducer from "./reducers/loaderReducer";
import productsReducer from "./reducers/productsReducer";
import productDetailsReducer from "./reducers/productDetails";




export default combineReducers({
  language: langReducer,
  loader: loaderReducer,
  products: productsReducer,
  productDetails: productDetailsReducer
})