import React from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
import Pokemons from '../Pokemons';

const PokedexDetailsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const PokedexGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;

/*============POKEDEX.Js=============================== */
const BuscarPokemonDetails = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClick = () => {
    if (page !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <PokedexDetailsHeader>
        <h1>Pokedex Busca</h1>
      </PokedexDetailsHeader>

      <Pagination
        page={page + 1}
        totalPages={totalPages}
        onLeftClick={onLeftClick}
        onRightClick={onRightClick}
      />
      {loading ? (
        <div className="carregando">Carregando...perai! </div>
      ) : (
        <PokedexGrid>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemons key={pokemon.name} pokemon={pokemon} />;
            })}
        </PokedexGrid>
      )}
    </div>
  );
};
export default BuscarPokemonDetails;
