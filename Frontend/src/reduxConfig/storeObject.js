export const initialState = {
  counter: 1,
  loggedIn: false,
  login: {
    email_id: "",
    password: "",
    authFlag: "",
  },
  signup: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    phone: "",
    userType: "1",
    thingsLoved: "",
    findMe: "",
    blogs: "",
  },
  profile: {
    _id: 0,
    MODIFIED: "",
    disabled: true,
    editstate: false,
    oldDetails: {},
  },
};
