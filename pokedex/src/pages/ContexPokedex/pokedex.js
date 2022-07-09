import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
font-family: 'Pokemon Solid', sans-serif;
align-items:center;
justify-content:center;
-webkit-text-stroke: 0.5px #1E90FF;
color: #FFFF00;
`
const Card = styled.main`
display:flex;
width:100%;
height:100vh;
background-color:#fff5ee;
`
const Pokemons = styled.div`
display:grid;
border-color:black;
height:300px;
width:200px;
margin:20px 20px;
    img {
        object-fit: cover;
    }
`
const ButtonHeader = styled.button`
height:40px;
margin:30px 20px;
`

const ButtonBoxes = styled.button`
width:100px;
height:50px;
`
const BoxesButton = styled.div`
margin-top:145px;
display:flex;
align-items:center;
`



function Pokedex() {
    const [pokedex, setPokedex] = useContext(PokedexContext);
    const navigate = useNavigate()

    const listPokemons = pokedex.map((pokemon) => {
        return (
            <Pokemons key={pokemon.id}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
                <Buttons1>
                    <ButtonBox>Remover</ButtonBox>
                    <ButtonBox onClick={() => { navigate(`/${pokemon.name}`) }}>Detalhes</ButtonBox>
                </Buttons1>
            </Pokemons>
        )     
    })

    return (
        <div>
            <Header>
                Pokedex() {
                <ButtonHeader onClick={() => { navigate('/') }}>Voltar</ButtonHeader>
            </Header>
            <Card>
                <Pokemons>
                <h2>Imagem pokemon</h2>
                    <Buttons2>
                        <ButtonBox>Remover</ButtonBox>
                        <ButtonBox onClick={() => { navigate('/details') }}>Detalhes</ButtonBox>
                    </Buttons2>
                </Pokemons>
                {listPokemons}
            </Card>
        </div>
    