import axios from 'axios'
import type { Pokemon } from "../interfaces/index.ts";

export const getPokemon = async( pokemonId: number ): Promise<Pokemon> => {

    const res = await axios.get<Pokemon>( `https://pokeapi.co/api/v2/pokemon/${ pokemonId }` )
    console.log( res.data.name );
    return res.data;
}


