import React from "react";
import { Link } from "react-router-dom";

let formName, formEmail, formCompany, formPhone, formPassword;

function Signup(props) {

  // on form submission this function will run
  const submission = (e) => {
    e.preventDefault();

    // making a POST request to register a user in the database
    fetch("https://603dc72748171b0017b2da58.mockapi.io/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formName.value,
        email: formEmail.value,
        phone: formPhone.value,
        company: formCompany.value,
        password: formPassword.value,
      }),
    })
      .then((res) => {
        // redirecting userto login page
        props.history.push("/login");
        return res.json();
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <form onSubmit={(e) => submission(e)}>
        <h1 className="signup_heading">Signup</h1>
        <div className="signup_form-elem">
          <label>Name</label>
          <input
            placeholder="Enter name"
            type="text"
            required
            area-required="true"
            ref={(el) => (formName = el)}
          ></input>
        </div>
        <div className="signup_form-elem">
          <label>Email</label>
          <input
            placeholder="Enter email"
            type="email"
            required
            area-required="true"
            ref={(el) => (formEmail = el)}
          ></input>
        </div>
        <div className="signup_form-elem">
          <label>Phone</label>
          <input
            placeholder="Enter phone"
            type="text"
            required
            area-required="true"
            ref={(el) => (formPhone = el)}
          ></input>
        </div>
        <div className="signup_form-elem">
          <label>Company</label>
          <input
            placeholder="Enter company name"
            type="text"
            required
            area-required="true"
            ref={(el) => (formCompany = el)}
          ></input>
        </div>
        <div className="signup_form-elem">
          <label>Password</label>
          <input
            placeholder="Enter password"
            type="password"
            required
            area-required="true"
            ref={(el) => (formPassword = el)}
          ></input>
        </div>
        <div className="signup_bottom">
          <button type="submit">Sign up</button>
          <p>
            Already a memeber ?{" "}
            <Link style={{ color: "#fff" }} to="/login">
              Login
            </Link>
          </p>
        </div>
        <small>Using HTML form validation</small>
      </form>
    </div>
  );
}

export default Signup;
