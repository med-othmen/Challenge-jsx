import React from 'react';
import './App.css';

import GoogleLink from './linktogoogle/googlelink'
import Parag from './paragraph/parapraph'
import Todolist from './listtodo/listtodo'

function App() {
  return (
    <div className="App">
      
      <GoogleLink />
     <Parag />
     <Todolist />
      
    </div>
  );
}

export default App;
