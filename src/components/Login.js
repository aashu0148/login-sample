import React, { useState } from "react";
import "./LoginSignup.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

let errMsg, emailValid, passValid;
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const valid = (item, type) => {
    switch (type) {
      case "email": {
        setEmail(item.target.value);
        if (item.target.value.includes("@")) {
          errMsg.innerText = "";
          emailValid = true;
        } else {
          emailValid = false;
          errMsg.innerText = "email must contain '@'";
        }
        break;
      }
      case "password": {
        setPassword(item.target.value);
        if (item.target.value.length < 3) {
          errMsg.innerText = "password must contains 3 characters";
          passValid = false;
        } else {
          passValid = true;
          errMsg.innerText = "";
        }
        break;
      }
    }
  };

  const submission = (e) => {
    e.preventDefault();
    if (!(emailValid && passValid)) return;
    console.log("In submission");
    fetch(
      `https://603dc72748171b0017b2da58.mockapi.io/api/v1/login?email=${email}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        data.forEach((item) => {
          if (item.password === password) {
            props.addUser(item.name);
            props.history.push("/home");
            return;
          }
        });
        errMsg.innerText = "Invalid Credentials";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="login">
      <form onSubmit={(e) => submission(e)}>
        <h1 className="login_heading">Login</h1>
        <div className="login_form-elem">
          <label>Email</label>
          <input
            placeholder="Enter email"
            type="text"
            onChange={(e) => valid(e, "email")}
          ></input>
        </div>
        <div className="login_form-elem">
          <label>Password</label>
          <input
            placeholder="Enter password"
            type="password"
            onChange={(e) => valid(e, "password")}
          ></input>
        </div>

        <small
          style={{
            color: "red",
            fontWeight: "bold",
            letterSpacing: "1px",
            backdropFilter: "blur(10px)",
            fontSize: "0.9rem",
          }}
          ref={(el) => (errMsg = el)}
        ></small>

        <div className="login_bottom">
          <button type="submit">Login</button>
          <p>
            New here ?{" "}
            <Link style={{ color: "#fff" }} to="/signup">
              Sign up
            </Link>
          </p>
        </div>
        <small>Using custom form validation</small>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (name) => dispatch({ type: "ADD_USER", name }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
