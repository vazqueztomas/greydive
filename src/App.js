import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import data from'./data/db.json'

function App() {
 const navigate = useNavigate()
  return (
    <div className="App">
      <Header/>
      <div className='botonera'>
      <p>Clientes: </p>
      {data.map((el, id) => 
        <button className = 'boton' onClick = {() => {
          navigate(`/client/${el.cliente}/${id}`)
        }}>{el.cliente}</button>
        )}
        </div>
    </div>
  );
}

export default App;
