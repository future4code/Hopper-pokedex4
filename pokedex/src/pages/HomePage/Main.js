import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import { searchPokemon } from '../../api';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: 100px;
`;

const onSearchHandler = async (pokemon) => {
  const result = await searchPokemon(pokemon);
  console.log('pokemon:', result);
};

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Searchbar onSearch={onSearchHandler} />
      <MainContainer>
        <div className="first--cont">
          <div className="main--img--pokemon">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
              alt="pkemos"
            />
          </div>
          <div className="main--btn">
            <Button variant="contained">Adicionar na Pokedex</Button>
            <Button
              variant="contained"
              onClick={() => navigate('/detalhes/pokemons')}
            >
              Ver Detalhes
            </Button>
          </div>
        </div>
        <div className="first--cont">
          <div className="main--img--pokemon">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
              alt="pkemos"
            />
          </div>
          <div className="main--btn">
            <Button variant="contained">Adicionar na Pokedex</Button>
            <Button
              variant="contained"
              onClick={() => navigate('/detalhes/pokemons')}
            >
              Ver Detalhes
            </Button>
          </div>
        </div>
        <div className="first--cont">
          <div className="main--img--pokemon">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
              alt="pkemos"
            />
          </div>
          <div className="main--btn">
            <Button variant="contained">Adicionar na Pokedex</Button>
            <Button
              variant="contained"
              onClick={() => navigate('/detalhes/pokemons')}
            >
              Ver Detalhes
            </Button>
          </div>
        </div>
        <div className="first--cont">
          <div className="main--img--pokemon">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
              alt="pkemos"
            />
          </div>
          <div className="main--btn">
            <Button variant="contained">Adicionar na Pokedex</Button>
            <Button
              variant="contained"
              onClick={() => navigate('/detalhes/pokemons')}
            >
              Ver Detalhes
            </Button>
          </div>
        </div>
      </MainContainer>
    </>
  );
};
export default Main;
