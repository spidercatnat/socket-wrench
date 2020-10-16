import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HelloWorld } from "../../components";
import { connect } from "../../context";

const Home = connect(
  class extends Component {
    render() {
      const {
        props: { passedDownFromProvider },
      } = this;
      return (
        <>
          <HelloWorld topic="VOLUME" transform={value => value + 3} {...{ passedDownFromProvider }} /> <br /> <br />
          <HelloWorld topic="PAN" {...{ passedDownFromProvider }} /> <br /> <br />
          <Link to="/about">About</Link>
        </>
      );
    }
  }
);

export { Home };
