import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { GetData } from './services/DataService';
function App() {
//     variable  function     initial value
  const [count, setCount] = useState(0)
  const [inputfield, setInputfield] = useState('')
  let pokemonData;
  return (
    <>
      <Button onClick={ () => setCount(count + 1) } variant="primary">Primary</Button>{" "}
      <p>{count}</p>
      <input onChange={(e) => {
        console.log(e.target.value)
        setInputfield(e.target.value)
      }}></input>
      <p>{inputfield}</p>

      <Button onClick={async () => {
        pokemonData = await GetData();
        console.log(pokemonData)
      }} variant="primary">Primary</Button>{" "}
    </>
  );
}
export default App;

