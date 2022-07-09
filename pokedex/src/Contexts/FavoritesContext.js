import React from 'react';

const FavoritesContext = React.createContext({
  FavoritesContext: [],
  updateFavoritePokemons: (id) => null,
});
export const FavoriteProvider = FavoritesContext.Provider;

export default FavoritesContext;
