import React from "react";
import { connect } from "react-redux";

function Home(props) {
  return props.user ? (
    <div>
      <h1 style={{ color: "yellow", fontSize: "4rem" }}>
        Welcome {props.user} !
      </h1>
    </div>
  ) : (
    <h1 style={{ color: "yellow", fontSize: "4rem" }}>Please Login first :)</h1>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Home);
