import axios from "axios";
import { useEffect, useState } from "react";

import Card from "../card/Card";

const Body = () => {
    const [pokemons, setPokemons] = useState(null);

    const getAllPokemons = async (offset, limit) => {
        
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .catch((err) => console.log("Error:", err));
        getPokemonData(response.data.results);
    }

    const getPokemonData = async (result) => {
        const pokemonArr = [];
        
        await Promise.all(
            result.map((pokemonItem) => {
                return axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
                    .then((result) => {
                        pokemonArr.push(result.data);  
                    });
            })
        );
            console.log(pokemonArr); 
        pokemonArr.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        setPokemons(pokemonArr);    
    } 

    useEffect(()=>{
        getAllPokemons();
        
    },[]);

    return(
        
        <div className="app__body">
            {pokemons && pokemons.map(pokemon=>(<Card {...pokemon}/>))}
            
        </div>
    );
}
export default Body