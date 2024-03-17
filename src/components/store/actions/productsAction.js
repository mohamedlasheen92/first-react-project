import axiosInstance from "../../axiosConfig/AxiosConfig";

export default function productsAction() {

  return (dispatch) => {

    axiosInstance.get("/products")
      .then((result) => {
        dispatch({ type: "SET_PRODUCTS", payload: result.data })

      }).catch((err) => {
        console.log(err);
      });



  }

}