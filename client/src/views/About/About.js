import React, { Component } from "react";
import  { Link } from "react-router-dom";
import { HelloWorld } from "../../components";
import { connect } from "../../context";

const About = connect(
  class extends Component {
    render() {
      const {
        props: { passedDownFromProvider },
      } = this;
      return (
        <>
          <span>Navigate back, observe the state has been cached! </span>
          <Link to="/">Home</Link>
        </>
      );
    }
  }
);

export { About };
