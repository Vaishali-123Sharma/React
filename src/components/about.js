import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./profile";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent - constructor");
  }

  componentDidMount() {
    //console.log("Parent - componentDidMount");
  }

  render() {
    //console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is a about us page</p>
        <Profile />
      </div>
    );
  }
}

export default About;

/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
