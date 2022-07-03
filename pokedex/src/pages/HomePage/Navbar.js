import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
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
      <button
        className="navbar--btn"
        onClick={() => navigate('/lista/pokedex')}
      >
        <img
          src="https://fontmeme.com/permalink/220701/8708787716a8ecf996836a12869dc678.png "
          alt=""
        />
      </button>
    </nav>
  );
};
export default Navbar;
