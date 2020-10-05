import React, { Component } from "react";
import CustomInput from "../../Common/CustomInput/CustomInput";
import axios from "axios";
import RouteConstants from "../../../Config/routeConstants";
import "./CustomerProfile.styles.css";
import CustomButton from "../../Common/CustomButton/CustomButton";
import { Route } from "react-router";
import cookie from "react-cookies";
class UserProfile extends Component {
  state = {
    _id: 0,
    customer_name: "",
    birthday: "",
    about: "",
    contact_number: "",
    userType: "1",
    things_loved: "",
    find_me: "",
    blog_ref: "",

    MODIFIED: "",

    disabled: true,
    editstate: false,
    oldDetails: {},
  };

  handleChange = (e) => {
    //e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
    // console.log(this.state);
  };
  // handleAddressChange = (e) => {
  //     const { value, name } = e.target;
  //     this.setState((prevState) => ({
  //         ADDRESS: { ...prevState.ADDRESS, [name]: value },
  //     }));
  //     //console.log(this.state);
  // };
  componentWillMount() {
    console.log("in edit profile");
    let body;
    console.log(cookie.load("email"));
    axios
      .get(
        `${RouteConstants.BACKEND_URL}/customer${RouteConstants.GET_CUSTOMER_PROFILE}`,
        {
          params: {
            email_id: cookie.load("email"),
          },
        }
      )
      .then((res) => {
        console.log(this.state);
        this.setState(
          { oldDetails: { ...res.data[0] }, ...res.data[0] },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  handleEdit = (e) => {
    e.preventDefault();

    this.setState((prevstate) => ({
      editstate: !prevstate.editstate,
      disabled: !prevstate.disabled,
    }));
  };
  handleCancelEdit = (e) => {
    e.preventDefault();
    if (!this.state.editstate) {
      this.setState((prevstate) => ({
        // ADDRESS: { ...prevstate.oldData.ADDRESS },
        ...prevstate.oldData,
      }));
    }
  };
  handleSave = (e) => {
    e.preventDefault();
    const { disabled, editstate, oldDetails, ...userDetails } = this.state;

    const req = {
      ...userDetails,
    };
    console.log(req);
    axios
      .put(
        `${RouteConstants.BACKEND_URL}/customer${RouteConstants.UPDATE_CUSTOMER_PROFILE}`,
        req
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.alert("Changes Updated Successfully");
        }
      })
      .catch((err) => {
        window.alert("Unable to update changes");
      });
  };

  render() {
    return (
      <div className="profile">
        <form className="userdetails">
          <h2>Edit Profile Details</h2>
          <div className="option">
            Name:{" "}
            <input
              label={this.state.oldDetails.customer_name}
              disabled={this.state.disabled}
              value={this.state.customer_name}
              onChange={this.handleChange}
              name="customer_name"
            />
          </div>
          <div className="option">
            Birthday:{" "}
            <input
              label={this.state.oldDetails.birthday}
              disabled={this.state.disabled}
              value={this.state.birthday.split("T")[0]}
              onChange={this.handleChange}
              name="birthday"
              width="200px"
            />
          </div>
          <div className="option">
            Contact:{" "}
            <input
              label={this.state.oldDetails.contact_number}
              disabled={this.state.disabled}
              value={this.state.contact_number}
              onChange={this.handleChange}
              name="contact_number"
            />
          </div>
          <div className="option">
            Email:{" "}
            <input disabled value={this.state.email_id} name="email_id" />
          </div>
          <div className="option">
            Contact:{" "}
            <input
              label={this.state.oldDetails.contact_number}
              disabled={this.state.disabled}
              value={this.state.contact_number}
              onChange={this.handleChange}
              name="contact_number"
            />
          </div>

          <div className="option">
            About:{" "}
            <input
              label={this.state.oldDetails.about}
              disabled={this.state.disabled}
              value={this.state.about}
              onChange={this.handleChange}
              name="about"
            />
          </div>
          <div className="option">
            Things Loved:{" "}
            <input
              label={this.state.oldDetails.things_loved}
              disabled={this.state.disabled}
              value={this.state.things_loved}
              onChange={this.handleChange}
              name="things_loved"
            />
          </div>
          <div className="option">
            Find me @:{" "}
            <input
              label={this.state.oldDetails.find_me}
              disabled={this.state.disabled}
              value={this.state.find_me}
              onChange={this.handleChange}
              name="find_me"
            />
          </div>

          <div className="option">
            Blog References:{" "}
            <input
              label={this.state.oldDetails.blog_ref}
              disabled={this.state.disabled}
              value={this.state.blog_ref}
              onChange={this.handleChange}
              name="blog_ref"
            />
          </div>

          {/* {addresschange} */}
          <div
            className="option"
            style={{ justifyContent: "space-around", marginLeft: "20%" }}
          >
            <CustomButton type="submit" onClick={this.handleEdit}>
              Edit Details
              {/* {this.state.editstate ? "Cancel Edit" : "Edit Details"}{" "} */}
            </CustomButton>
            {/* <button type="submit" onClick={this.handleCancelEdit}>
              Restore Changes
              {this.state.editstate ? "Cancel Edit" : "Edit Details"}{" "}
            </button> */}
            <br />
            {/* </div>

          <div className="option"> */}
            <CustomButton type="submit" onClick={this.handleSave}>
              Save Changes
              {/* {this.state.editstate ? "Cancel Edit" : "Edit Details"}{" "} */}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default UserProfile;
