import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from './components/List'
import AddToList from "./components/AddToList";


export interface IState {
  people:{
    name: string;
    url: string;
    age: number;
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([{
    name: "Superman",
    url: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
    age: 36,
    note:"He is a superfied man."
  }
]);



  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
