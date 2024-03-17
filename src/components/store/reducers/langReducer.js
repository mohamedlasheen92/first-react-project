// const initial = {
//   lang: "en",

// }


export default function langReducer(state = "en", action) {

  switch (action.type) {
    case "SET_LANGUAGE":
      return action.payload

    default:
      return state

  }

}