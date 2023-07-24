import axios from "axios";

import { GET_POKEMONS, GET_POKEMON_BY_NAME } from "./types_actions";

export const getPokemons = () => {
    return async function (dispatch) {
        try {
            const info = await axios.get(`http://localhost:3001/pokemon`);
            const pokemons = info.data;
            return dispatch({
                type: GET_POKEMONS,
                payload: pokemons,
            })
        } catch (error) {
            
        }
    }
};

export const getPokemonByName = (name) => {
    return async function(dispatch) {
        try {
            const info = await axios.get(`http://localhost:3001/pokemon?name=${name}`);
            const pokemon = info.data;
            return dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: pokemon,
            })
        } catch (error) {
            
        }
    }
};
