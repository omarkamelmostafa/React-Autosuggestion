import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AutoCompleteText } from "./AutoCompleteText";
import  countries  from "./countries";
function App() {
  return (
    <div className="App">
      {/* <HideableText text='Dynamic Text!' /> */}
      <div className='App-Component'>
        <AutoCompleteText items={countries}/>
        <br />
        <AutoCompleteText items={['Omar', 'Kamel', 'Heisenberg', 'Believer', 'Walter White', 'Dolores', 'BOOM']}/>
      </div>
    </div>
  );
}

export default App;


