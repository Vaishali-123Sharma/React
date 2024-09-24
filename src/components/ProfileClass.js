import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      userInfo: {
        login: "dummyName",
        type: "India",
      },
    };
    //console.log("Child - Constructor" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Vaishali-123Sharma");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    //console.log("Child - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      //
    }
    if (this.state.count2 !== prevState.count2) {
      // code
    }
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    //console.log("ComponentWillUnmount");
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Class based components</h1>
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Name: {this.state.userInfo.login}</h2>
        <h2>Name: {this.state.userInfo.type}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Set Count
        </button>
        <h2>Count: {count}</h2>
      </div>
    );
  }
}
export default Profile;

/**
 *
 *  child constructor
 *  child render
 *  child componentDidMount
 *
 *  API call
 *  Set State
 *
 *  <UPDATE CYCLES>
 *  render
 *
 *
 */
