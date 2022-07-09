import React from 'react';
import sorry from './images/pokemon.gif';
import './App.css';
import Searchbar from './pages/HomePage/Searchbar';
import Router from './Routes/Router';
import { useEffect, useState } from 'react';
import { getPokemons, getPokemonData, searchPokemon } from './api';
import BuscarPokemonDetails from './pages/BuscaPokemonsDetails/BuscaPokemonDetails';
import { FavoriteProvider } from './Contexts/FavoritesContext';
const favoriteskey = 'f';

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState([]);

  const itemsPerPage = 12;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      // reults come after all promises
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      //calculate how many items per page (Pagination)
      setTotalPages(Math.ceil(data.count / itemsPerPage));
      setNotFound(false);
    } catch (error) {
      console.log('fetchpokemons error:', error);
    }
  };

  // when we set the page, fetch is called
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  //get info from localStorage
  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoriteskey)) || [];
    setFavorites(pokemons);
  };
  useEffect(() => {
    loadFavoritePokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites];
    //se if favorties already includes this pokemons
    const favoriteIndex = favorites.indexOf(name);
    //if they have, remove them(slice), otherwise add them (push)
    if (favoriteIndex >= 0) {
      updateFavorites.slice(favoriteIndex, 1);
    } else {
      updateFavorites.push(name);
    }
    window.localStorage.setItem(favoriteskey, JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);
  };
  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div className="App">
        <Router />
        <Searchbar onSearch={onSearchHandler} />
        {notFound ? (
          <div className="not-found-text">
            <div className="not-found-textPokemon">
              Sorry, pokemon not found!
            </div>
            <div>
              <img src={sorry} alt="" />
            </div>
          </div>
        ) : (
          <BuscarPokemonDetails
            pokemons={pokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </FavoriteProvider>
  );
}

export default App;
