import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';

function App() {
  return (<section>
    <Pokedex />
    {
      pokemons.map((pokemon) => <Pokemon pokemonList={pokemon} />)
    }
  </section>);
}

export default App;
