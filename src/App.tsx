import React from 'react';
import './App.css';
import {User} from "./User";

export function App() {
  return (
      <div className="App">
        <User title={'What to learn'}/>
        <User title={'Movies'}/>
        <User title={'Songs'}/>
      </div>
  );
}
