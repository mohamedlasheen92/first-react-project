import axiosInstance from "../../axiosConfig/AxiosConfig";

export default function productDetailsAction(_id) {

  return (dispatch) => {

    axiosInstance.get(`/products/${_id}`)
      .then((result) => {

        dispatch({ type: "SET_DETAILS", payload: result.data })


      }).catch((err) => {
        console.log(err);
      });





  }


}