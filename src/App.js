import React, { Component } from "react";
import DrumPad from "./DrumPad";
import FolkMe from "./Folkme";
import "./App.css";

const banks = [bankOne, bankTwo];

const volumeHandlerStyle = {
  "--min": 0,
  "--max": 100,
  "--val": 50,
  "--width": "100%",
  "--height": "1.5em",
  "--border-radius": "0.5em",
  "--track-height": "0.75em",
  "--track-border-width": "1px",
  "--track-border-color": "#000",
  "--track-border-style": "solid",
  "--track-color": "#202020",
  "--progress-height": "0.75em",
  "--progress-color": "#35cac5",
  "--thumb-width": "1.15em",
  "--thumb-height": "1.15em",
  "--thumb-border-radius": "40%",
  "--thumb-color": "#202020",
  "--thumb-border": "1px solid #000",
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankIndex: 0,
      volumeValue: 50,
      displayText: this.props.displayTextDefault,
    };
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="drum" id="drum-machine">
        <div className="drum-display" id="display">
          <h1>{this.state.displayText}</h1>
        </div>

        <div className="drum-control">
          <div className="drum-control-volumn">
            <i className="fas fa-volume-down"></i>
            <span> Volume</span>
            <span className="drum-control-volumn-value">
              {" "}
              {this.state.volumeValue}
            </span>
            <input type="range" style={volumeHandlerStyle} />
          </div>
          <div className="drum-control-bank">
            <div>
              {this.state.bankIndex ? "Smooth Piano Kit" : "Heater Kit"}
            </div>
            <label className="switch" title="Switch bank">
              <input
                type="checkbox"
                onChange={this.onBankChanged}
                ref={this.switchBank}
              />
              <span className="slider round" ref={this.switchBankLabel}></span>
            </label>
          </div>
        </div>

        <div className="drum-pads">
          {banks[this.state.bankIndex].map((item, idx) => {
            return (
              <DrumPad
                key={idx}
                padItem={item}
                updateDisplayText={this.updateDisplayText}
                volumeValue={this.state.volumeValue}
              />
            );
          })}
        </div>

        <div className="drum-footer">
          Made by <a href="http://about.phamvanlam.com"></a>.
        </div>

        <FolkMe
          targetURL="https://github.com/completejavascript/drum-machine"
          color="#fff"
          backgroundColor="#35cac5"
          position="right"
          size="100px"
          ariaLabel="View source on Github"
        />
      </div>
    );
  }
}
