import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const Pokemons = createContext();

export const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let id = 0
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => {
        setPokemons(res.data.results.map(pokemon => {
          id++;
          return {...pokemon, id: id}
        }));
      })
      .catch(() => {});
  }, []);

  return (
    <Pokemons.Provider value={[pokemons, setPokemons]}>
      {children}
    </Pokemons.Provider>
}