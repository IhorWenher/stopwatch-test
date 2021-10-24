import './App.css';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import Display from './Components/Display';
import Buttons from './Components/Buttons';
import { interval } from 'rxjs';

function App() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState(null);
  const [status, setStatus] = useState(0);
  // 0 - not started,
  // 1 - started,
  // 2 - waited,
  // 3 - reseted

  const start = () => {
    run();
    setStatus(1);
    setInterv(interval(1000).subscribe(run));
  };

  useEffect(() => {
    if (status === 3) {
      start();
    }
  }, [start, status]);

  let updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    interv.unsubscribe();
    setTime({ s: 0, m: 0, h: 0 });
    setStatus(0);
  };

  const wait = () => {
    if (status === 1) {
      interv.unsubscribe();
      setStatus(2);
    } else {
      start();
    }
  };

  const debouncedWait = debounce(wait, 300);

  const reset = () => {
    interv.unsubscribe();
    setTime({ s: 0, m: 0, h: 0 });
    setStatus(3);
  };

  const debouncedReset = debounce(reset, 300);

  return (
    <div className="container">
      <div className="stopwatch">
        <Display time={time} />
        <Buttons
          status={status}
          wait={debouncedWait}
          reset={debouncedReset}
          stop={stop}
          start={start}
        />
      </div>
    </div>
  );
}

export default App;
