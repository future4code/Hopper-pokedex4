import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import Main from '../pages/HomePage/Main';
import PokedexPage from '../pages/PokedexPage/PokedexPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/lista/pokedex'} element={<PokedexPage />} />
        <Route path={'/detalhes/pokemons'} element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
