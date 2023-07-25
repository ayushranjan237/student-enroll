// reducers.js
import { combineReducers } from "redux";

const nameReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NAME":
      return action.payload;
    default:
      return state;
  }
};

const ageReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_AGE":
      return action.payload;
    default:
      return state;
  }
};

const enrollmentCompleteReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_ENROLLMENT_COMPLETE":
      return true;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  name: nameReducer,
  age: ageReducer,
  enrollmentComplete: enrollmentCompleteReducer,
});

export default rootReducer;
