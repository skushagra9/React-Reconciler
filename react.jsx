//just added for reference (React code)

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [state, setState] = useState(['USA', 'GERMANY', 'DENMARK']);
  const [count, setCount] = useState(0);

  const updateState = (newState) => {
    setState(newState);
  };

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={() => updateState(['USA', 'GERMANY'])}>Set State</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <div id="data-display">
        {state.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <p id="counter">{count}</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

