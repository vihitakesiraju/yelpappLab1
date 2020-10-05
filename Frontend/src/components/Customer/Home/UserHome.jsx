import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterIncrement } from "../../../reduxConfig/LoginActions";
import { connect } from "react-redux";

class UserHome extends Component {
  componentWillMount = () => {};

  handleClick = (e) => {
    console.log("---");
    console.log(this.props);
    let temp = this.props.counterState;
    console.log("temp val before->" + temp);

    temp = temp + 1;
    console.log("temp val->" + temp);
    this.props.counterIncrement(temp);
    // useDispatch(loginAction);
  };
  render() {
    return (
      <div>
        <h1>In Home Page</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
