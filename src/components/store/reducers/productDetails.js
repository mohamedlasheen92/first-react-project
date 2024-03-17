export default function productDetailsReducer(state = {}, action) {
  switch (action.type) {
    case "SET_DETAILS":

      return action.payload

    default:

      return state
  }
}