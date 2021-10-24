import React from 'react';

const Buttons = props => {
  return (
    <div className="button-container">
      {props.status === 0 ? (
        <button className="btn btn-green" onClick={props.start}>
          Start
        </button>
      ) : (
        ''
      )}

      {props.status === 1 ? (
        <div>
          <button className="btn btn-red" onClick={props.stop}>
            Stop
          </button>
          <button className="btn btn-yellow" onClick={props.wait}>
            {props.status === 2 ? 'Continue' : 'Wait'}
          </button>
          <button className="btn btn-green" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}

      {props.status === 2 ? (
        <div>
          <button className="btn btn-red" onClick={props.stop}>
            Stop
          </button>
          <button className="btn btn-yellow" onClick={props.wait}>
            {props.status === 2 ? 'Continue' : 'Wait'}
          </button>
          <button className="btn btn-green" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}

      {props.status === 3 ? (
        <div>
          <button className="btn btn-red" onClick={props.stop}>
            Stop
          </button>
          <button className="btn btn-yellow" onClick={props.wait}>
            {props.status === 2 ? 'Continue' : 'Wait'}
          </button>
          <button className="btn btn-green" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Buttons;
