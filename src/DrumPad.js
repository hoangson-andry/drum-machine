import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.audioHandler = React.createRef();
  }

  componentDidUpdate() {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const padItem = this.props.padItem;

    return (
      <div className="drum-pad" id={padItem.id}>
        <audio
          className="clip"
          id={padItem.keyTrigger}
          src={padItem.url}
          ref={this.audioHandler}
        />
        {padItem.keyTrigger}
      </div>
    );
  }
}
