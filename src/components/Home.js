import React from "react";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div>
      <h1 style={{ color: "yellow", fontSize: "4rem" }}>
        Welcome {props.user} !
      </h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Home);
