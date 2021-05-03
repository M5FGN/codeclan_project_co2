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
    this.setState({ odometerValue: 1000 });
  }

  render() {
    const { odometerValue } = this.state;
    return (
      <div>

        <Odometer format="d" duration={1000} value={odometerValue} />
      </div>
    );
  }
}

render(<OdoTest />, document.getElementById("root"));
export default OdoTest;
