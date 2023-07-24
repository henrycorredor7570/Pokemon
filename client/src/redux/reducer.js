import { GET_POKEMONS, GET_POKEMON_BY_NAME, CREATE_POKEMON } from "./types_actions";

const initialState = {
    pokemons:[],
    copyPokemons:[],
    pokemonFiltered:[],

}
const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                copyPokemons: action.payload,
            };
        case GET_POKEMON_BY_NAME:
            return{
                ...state,
                pokemons: action.payload,
                pokemonFiltered: action.payload,
            };
        case CREATE_POKEMON:
            return{
                ...state,
                copyPokemons: [...state.copyPokemons, action.payload],
                
            }
        default:
            return{...state};
    }
}

export default rootReducer;