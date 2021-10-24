import React from 'react';

const Display = props => {
  return (
    <div className="fiels-container" id="timer-1">
      <div className="field">
        <span className="value" data-value="hours">
          {props.time.h >= 10 ? props.time.h : '0' + props.time.h}
        </span>
        <span className="separator">:</span>
      </div>

      <div className="field">
        <span className="value" data-value="mins">
          {props.time.m >= 10 ? props.time.m : '0' + props.time.m}
        </span>
        <span className="separator">:</span>
      </div>

      <div className="field">
        <span className="value" data-value="secs">
          {props.time.s >= 10 ? props.time.s : '0' + props.time.s}
        </span>
      </div>
    </div>
  );
};

export default Display;
