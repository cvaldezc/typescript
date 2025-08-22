import { getPokemon } from "./generics/get-pokemon.ts";

getPokemon(1)
        .then( res => console.log( res ) )
        .catch( error => console.error( error ) )
        .finally( () => console.log( 'Fin de get Pokemon' )) 


