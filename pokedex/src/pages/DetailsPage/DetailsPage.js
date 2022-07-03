import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';

export default function DetailsPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="main--btn">
        <Button variant="contained" onClick={() => navigate('/')}>
          Voltar pra Home Page
        </Button>
        <Button variant="contained">Remover / Adicionar Pokedex</Button>
      </div>
    </div>
  );
}
