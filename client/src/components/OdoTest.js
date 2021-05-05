import React from "react";
import { render } from "react-dom";
import Odometer from "react-odometerjs";

import "odometer/themes/odometer-theme-default.css";

class OdoTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      odometerValue: 0
    };
  }
  
  componentDidMount() {
    this.setState({ odometerValue: this.props.totalCarbon});
  }

  render() {
    const { odometerValue } = this.state;
    return (
      <div id="odo">

        <Odometer format="d" duration={1000} value={this.props.totalCarbon} />
      </div>
    );
  }
}

render(<OdoTest />, document.getElementById("root"));
export default OdoTest;
