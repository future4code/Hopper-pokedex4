import React, { useContext } from 'react';
import styled from 'styled-components';
import FavoritesContext from '../Contexts/FavoritesContext';

const PokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 100px;
`;

const PokemonCard = styled.div`
  height: 35vh;
  width: 250px;
  margin: 10px;
  display: grid;
  grid-template-rows: 70% 30%;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
`;
const PokemonImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 0px;
  border-radius: 20px;
  flex: 1;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const PokemonType = styled.div`
  display: flex;
`;

const Pokemons = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoritesContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? '❤️' : '🖤';

  return (
    <PokemonContainer>
      <PokemonCard>
        <PokemonImageContainer>
          <img
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
            className="pokemon-img"
          />
        </PokemonImageContainer>
        <CardBody>
          <CardTop>
            <h3> {pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </CardTop>
          <CardBottom>
            <PokemonType>
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </PokemonType>
            <button className="pokemon-heart-btn" onClick={onHeartClick}>
              {heart}
            </button>
          </CardBottom>
        </CardBody>
      </PokemonCard>
    </PokemonContainer>
  );
};

export default Pokemons;
