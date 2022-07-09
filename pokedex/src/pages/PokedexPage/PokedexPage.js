import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';

export default function PokedexPage(props) {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="main--btn">
        <Button variant="contained" onClick={() => navigate('/')}>
          Voltar pra Home Page
        </Button>
        <Button variant="contained">Remover da Pokedex</Button>
        <Button
          variant="contained"
          onClick={() => navigate('/detalhes/pokemons')}
        >
          Ver Detalhes
        </Button>
      </div>
    </div>
  );
}
