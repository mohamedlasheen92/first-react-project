// const initial = {
//   loader: false
// }


export default function loaderReducer(state = false, action) {

  switch (action.type) {

    case "SET_LOADER":
      return action.payload


    default:
      return state

  }

}