import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import data from'./data/db.json'
import Video from './Video';

function App() {
 const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <Header/>
      <button onClick = {(e) =>setChecked(0)}>Cliente 1</button>
      <button onClick = {(e) =>setChecked(1)}>Cliente 2</button>
      {checked === 0 ? <Video video = {data[0]}/> : <Video video = {data[1]}/>}
    </div>
  );
}

export default App;
