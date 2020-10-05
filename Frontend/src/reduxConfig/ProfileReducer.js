import actionTypes from "./actionTypes";
import { initialState } from "./storeObject";
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROFILE_UPDATE_OLD_DETAILS:
      return {
        ...state,
        profile: {
          ...state.profile,
          oldDetails: {
            ...state.profile.oldDetails,
            ...action.payload,
          },
        },
      };
    case actionTypes.PROFILE_LOAD_DETAILS: {
      console.log("In Profile load");
      return {
        ...state,
        signup: {
          ...action.payload,
        },
        profile: {
          ...state.profile,
          oldDetails: {
            ...state.profile.oldDetails,
            ...action.payload,
          },
        },
      };
    }
    case actionTypes.PROFILE_EDIT_STATE:
      console.log("In Profile edit state");

      return {
        ...state,
        profile: {
          ...state.profile,
          editstate: !state.profile.editstate,
          disabled: !state.profile.disabled,
        },
      };

    case actionTypes.PROFILE_CANCEL_EDIT:
      console.log("In Profile cancel edit");

      return {
        ...state,
        signup: {
          ...state.profile.oldDetails,
        },
      };

    case actionTypes.SIGNUP_NAME:
      return {
        ...state,
        signup: {
          ...state.signup,
          name: action.payload,
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
          things_loved: action.payload,
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
          blog_ref: action.payload,
        },
      };
    default:
      return initialState;
      break;
  }
};

export default ProfileReducer;
