import actionTypes from "./actionTypes";

import { initialState } from "./storeObject";

const signupReducer = (state = initialState, action) => {
  console.log("Signup reducer");
  switch (action.type) {
    case actionTypes.SIGNUP_NAME:
      return {
        ...state,
        signup: {
          ...state.signup,
          name: action.payload,
        },
      };
    case actionTypes.SIGNUP_EMAIL:
      return {
        ...state,
        signup: {
          ...state.signup,
          email_id: action.payload,
        },
      };
    case actionTypes.SIGNUP_PASSWORD:
      return {
        ...state,
        signup: {
          ...state.signup,
          password: action.payload,
        },
      };
    case actionTypes.SINGUP_CONFIRM_PASSWORD:
      return {
        ...state,
        signup: {
          ...state.signup,
          confirmPassword: action.payload,
        },
      };
    case actionTypes.SIGNUP_BIRTHDAY:
      return {
        ...state,
        signup: {
          ...state.signup,
          birthday: action.payload,
        },
      };

    case actionTypes.SIGNUP_PHONE:
      return {
        ...state,
        signup: {
          ...state.signup,
          phone: action.payload,
        },
      };
    case actionTypes.SIGNUP_USERTYPE:
      return {
        ...state,
        signup: {
          ...state.signup,
          userType: action.payload,
        },
      };
    case actionTypes.SIGNUP_THINGS_LOVED:
      return {
        ...state,
        signup: {
          ...state.signup,
          thingsLoved: action.payload,
        },
      };
    case actionTypes.SIGNUP_FIND_ME:
      return {
        ...state,
        signup: {
          ...state.signup,
          findMe: action.payload,
        },
      };
    case actionTypes.SIGNUP_BLOGS:
      return {
        ...state,
        signup: {
          ...state.signup,
          blogs: action.payload,
        },
      };
    default:
      return initialState;
      break;
  }
};

export default signupReducer;
