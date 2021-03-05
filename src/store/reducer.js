const initialState = {
  loggedIn: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      let myState = { ...state };
      myState.loggedIn = true;
      myState.user = action.name;
      return myState;
    }

    default:
      return state;
  }
};

export default reducer;
