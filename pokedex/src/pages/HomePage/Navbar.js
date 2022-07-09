import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoritesContext from '../../Contexts/FavoritesContext';

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoritesContext);
  const navigate = useNavigate();
  return (
    <nav>
      <div>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="pokeApi-logo"
          className="navbar--img"
        />
      </div>
      <div className="nav--pikachu">
        <img
          src="https://pngimg.com/uploads/pokemon/pokemon_PNG148.png"
          alt=""
        />
      </div>
      <div className="nav--fav--pokemons">{favoritePokemons.length} ❤</div>
      <div className="ver-minha-pokedex-button">
        <button
          className="navbar--btn"
          onClick={() => navigate('/lista/pokedex')}
        >
          <img
            src="https://fontmeme.com/permalink/220701/8708787716a8ecf996836a12869dc678.png "
            alt=""
          />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
