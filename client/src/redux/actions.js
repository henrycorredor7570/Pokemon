import axios from "axios";
import { GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES_POKEMONS, CREATE_POKEMON, ORDER_ALPHABET, ORDER_ATTACK, FILTER_TYPE, FILTER_POKE_CREATED } from "./types_actions";

const URL = "http://localhost:3001/pokemon/";

export const getPokemons = () => {
    return async function(dispatch) {
        try {
            const info = await axios.get(`${URL}`);
            const pokemons = info.data;
            if(!pokemons.length) throw Error("No hay Pokemones Disponibles");
            return dispatch({// se envia la accion al reducer
                type: GET_POKEMONS,
                payload: pokemons,
            })
        } catch (error) {
            return (error.message);
        }
    }
};

export const getPokemonByName = (name) => {
    return async function(dispatch) {
        try {
            const info = await axios.get(`${URL}?name=${name}`);
            const pokemonName = info.data;
            if(!pokemonName.length) throw Error(`No hay Pokemones asociados con el nombre: ${name}`);
            return dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: pokemonName,
            })
        } catch (error) {
            alert(error.message);
        }
    }
};

export const getTypesPokemon = () => {
    return async function(dispatch) {
        try {
            const info = await axios.get(`http://localhost:3001/types`);
            const typesPokemon = info.data
            return dispatch({
                type: GET_TYPES_POKEMONS,
                payload: typesPokemon,
            })
        } catch (error) {
            return (error.message);
        }
    }
};

export const createPokemon = (infoPokemon) => {
    return async function(dispatch) {
        try {
            const info = await axios.post(`${URL}`, infoPokemon)
            const pokemonCreated = info.data;
            return dispatch({
                type: CREATE_POKEMON,
                payload: pokemonCreated,
            })
        } catch (error) {
            return (error.message);
        }
    }
};

export const orderAlphabet = (order) => {
    return ({
        type: ORDER_ALPHABET,
        payload: order,
    })
};

export const orderAttack = (attack) => {
    return ({
        type: ORDER_ATTACK,
        payload: attack,
    })
};

export const filterType = (type) => {
    return ({
        type: FILTER_TYPE,
        payload: type,
    })
};

export const filterPokeCreated = (origin) => {
    return ({
        type: FILTER_POKE_CREATED,
        payload: origin,
    })
};


