import Btnnav from "./components/btnnav";
import Pokedex from "./components/pokedex";

const App = () => {
  return (
    <div className="container">
      <Pokedex />
      <div>
        <Btnnav btnnav="Accéder au pc"/>
        <Btnnav btnnav="Les baies"/>
      </div>
    </div>
  );
}

export default App;