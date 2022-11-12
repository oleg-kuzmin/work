import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleCnange = this.handleCnange.bind(this);
  }

  handleCnange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleCnange}
          name="firstName"
          value={this.state.firstName}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={this.handleCnange}
          name="lastName"
          value={this.state.lastName}
        />
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}

export default App;

import { useState } from "react";

function YourComponentName() {
  const [checked, setChecked] = useState(true);
  return <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />;
}
