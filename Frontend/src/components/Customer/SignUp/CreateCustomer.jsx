import React, { Component } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import CustomInput from "../../Common/CustomInput/CustomInput";
import CustomButton from "../../Common/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import "./CreateCustomer.styles.css";
import Constants from "../../../Config/Constants";
import routeConstants from "../../../Config/routeConstants";
import signupReducer from "../../../reduxConfig/SignUpReducer";
import {
  nameHandler,
  emailHandler,
  passwordHandler,
  confirmPasswordHandler,
  birthdayHandler,
  phoneHandler,
  userTypeHandler,
  thingsLovedHandler,
  findMeHandler,
  blogsHandler,
} from "../../../reduxConfig/SignUpActions";
import { connect } from "react-redux";

//Define a Login Component
class CreateUser extends Component {
  nameHandler = (e) => {
    console.log("name ");
    this.props.nameHandler(e.target.value);
  };
  emailHandler = (e) => {
    console.log("name ");
    this.props.emailHandler(e.target.value);
    console.log(e.target.value);
  };
  passwordHandler = (e) => {
    console.log(e.target.value);
    this.props.passwordHandler(e.target.value);
  };
  confirmPasswordHandler = (e) => {
    console.log(e.target.value);
    this.props.confirmPasswordHandler(e.target.value);
  };
  birthdayHandler = (e) => {
    this.props.birthdayHandler(e.target.value);
  };

  phoneHandler = (e) => {
    this.props.phoneHandler(e.target.value);
  };
  userTypeHandler = (e) => {
    this.props.userTypeHandler(e.target.value);
  };
  thingsLovedHandler = (e) => {
    this.props.thingsLovedHandler(e.target.value);
  };
  findMeHandler = (e) => {
    this.props.findMeHandler(e.target.value);
  };
  blogsHandler = (e) => {
    this.props.blogsHandler(e.target.value);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.props;
    console.log("handlesubmit");
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const userdetails = {
        NAME: this.props.name,
        EMAIL: this.props.email,
        PASSWORD: this.props.password,
        BIRTHDAY: this.props.birthday,
        PHONE: this.props.phone,
        THINGS_LOVED: this.props.thingsLoved,
        FIND_ME: this.props.findMe,
        BLOG_REF: this.props.blogs,
      };

      console.log(userdetails);

      axios
        .post(
          `${Constants.BACKEND_SERVER.URL}/customer${routeConstants.POST_CUSTOMER_SIGNUP}`,
          userdetails
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          window.alert("Invalid Details. Please Re-enter");
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    //redirect based on successful login
    let redirectVar = null;
    if (cookie.load("cookie")) {
      redirectVar = <Redirect to="/login" />;
    }
    return (
      <div>
        {/* {redirectVar} */}
        <div className="signUp">
          <h1>New User?</h1>
          <h2>Create an account </h2>
          <br></br>
          <h5> with Email and Password</h5>
          <br></br>
          <div className="signUpForm">
            <form onSubmit={this.handleSubmit}>
              <div className="inputs">
                Name:
                <input
                  type="text"
                  label="Name"
                  name="name"
                  //value={this.props.name}
                  onChange={this.nameHandler}
                  required
                />
                <br></br>
                Email:
                <input
                  type="email"
                  label="Email"
                  name="email"
                  //value={this.props.email}
                  onChange={this.emailHandler}
                  required
                />
                <br></br>
                Password:
                <input
                  type="password"
                  label="Password"
                  name="password"
                  //value={this.props.password}
                  onChange={this.passwordHandler}
                  required
                />
                <br></br>
                Confirm Password:
                <input
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  //value={this.props.confirmPassword}
                  onChange={this.confirmPasswordHandler}
                  required
                />
                <br></br>
                Phone:
                <input
                  type="text"
                  label="Phone Number"
                  name="phone"
                  //value={this.props.phone}
                  onChange={this.phoneHandler}
                  required
                />
                <br></br>
                Birthday:
                <input
                  type="text"
                  label="Birthday YYYY-MM-DD"
                  name="birthday"
                  //value={this.props.birthday}
                  onChange={this.birthdayHandler}
                  required
                />
                <br></br>
                Things Loved:
                <input
                  type="text"
                  label="Things Loved"
                  name="thingsLoved"
                  //value={this.props.thingsLoved}
                  onChange={this.thingsLovedHandler}
                />
                <br></br>
                Find Me @:
                <input
                  type="text"
                  label="Find Me @"
                  name="findMe"
                  //value={this.props.findMe}
                  onChange={this.findMeHandler}
                />
                <br></br>
                Blogs:
                <input
                  type="text"
                  label="Blogs"
                  name="blogs"
                  //value={this.props.blogs}
                  onChange={this.blogsHandler}
                />
                <br></br>
              </div>
              <br></br>
              <button type="submit">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
//export Login Component

const mapStateToProps = (state) => {
  return {
    name: state.SignUpReducer.signup.name,
    email: state.SignUpReducer.signup.email_id,
    password: state.SignUpReducer.signup.password,
    confirmPassword: state.SignUpReducer.signup.confirmPassword,
    birthday: state.SignUpReducer.signup.birthday,
    about: state.SignUpReducer.signup.about,
    phone: state.SignUpReducer.signup.phone,
    userType: state.SignUpReducer.signup.user,
    thingsLoved: state.SignUpReducer.signup.thingsLoved,
    findMe: state.SignUpReducer.signup.findMe,
    blogs: state.SignUpReducer.signup.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // counterIncrement: (counter) => dispatch(counterIncrement(counter))
    nameHandler: (name) => dispatch(nameHandler(name)),
    emailHandler: (email_id) => dispatch(emailHandler(email_id)),
    passwordHandler: (password) => dispatch(passwordHandler(password)),
    confirmPasswordHandler: (confirmPassword) =>
      dispatch(confirmPasswordHandler(confirmPassword)),
    birthdayHandler: (birthday) => dispatch(birthdayHandler(birthday)),
    phoneHandler: (phone) => dispatch(phoneHandler(phone)),
    userTypeHandler: (userType) => dispatch(userTypeHandler(userType)),
    thingsLovedHandler: (thingsLoved) =>
      dispatch(thingsLovedHandler(thingsLoved)),
    findMeHandler: (findMe) => dispatch(findMeHandler(findMe)),
    blogsHandler: (blogs) => dispatch(blogsHandler(blogs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
