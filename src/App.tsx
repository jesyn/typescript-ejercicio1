import './App.css';
import {personas} from "./modelo/personas";
import {quienEsMayor} from "./utiles/utiles";

function App() {
  // Las constantes edades, personas, y la funcion quienEsMayor no se encuentran tipificadas
  // No te olvides de renombrar los archivos para soportar los tipos
  const edades:number[] = [15, 16, 23, 16];

  return (
    <div className="App">
        <div>
            <h3>Personas</h3>
            {personas.map((persona,index) => (
              <div key={index}>{persona}</div>
            )) }
        </div>
        <div>
            <h3>Edades</h3>
            {edades.map((edad,index) => {return (
                <div key={index}>{edad}</div>
            )}) }
        </div>
        <div>
            <h3>Quien es Mayor</h3>
            <div >{quienEsMayor(personas[0], edades[0], personas[1], edades[1])}</div>
            <div >{quienEsMayor(personas[2], edades[2], personas[3], edades[3])}</div>
            <div >{quienEsMayor(personas[1], edades[1], personas[3], edades[3])}</div>
        </div>
    </div>
  );
}

export default App;
