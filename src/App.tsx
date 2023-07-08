import React from 'react';
import './App.css';

export function User() {
  return (
      <div>
        <h3>What to learn</h3>
        <div>
          <input/>
          <button>+</button>
        </div>
        <ul>
          <li><input checked={true} type="checkbox"/>CSS & HTML</li>
          <li><input checked={true} type="checkbox"/>JS</li>
          <li><input checked={false} type="checkbox"/>REACT</li>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </ul>
      </div>
  )
}

function App() {
  return (
      <div className="App">
        <User/>
      </div>
  );
}

export default App
