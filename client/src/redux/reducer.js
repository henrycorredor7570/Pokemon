import { GET_POKEMONS, GET_POKEMON_BY_NAME, CREATE_POKEMON, ORDER_ALPHABET } from "./types_actions";

const initialState = {
    pokemons:[],
    copyPokemons:[],
    pokemonFiltered:[],
    pokemonsAlphabet:[],
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
        case ORDER_ALPHABET:
            const orderPokes = [...state.copyPokemons];
            const pokeName =
            action.payload === "All" ? orderPokes :
                action.payload === "nameAsc"
                  ? orderPokes.sort((pokeA,pokeB) => {
                    if(pokeA.name.toLowerCase() > pokeB.name.toLowerCase()) return 1
                    else if (pokeA.name.toLowerCase() < pokeB.name.toLowerCase()) return -1;
                    else return 0
                  })
                  : orderPokes.sort((pokeA,pokeB) => {
                    if(pokeA.name.toLowerCase() < pokeB.name.toLowerCase()) return 1;
                    else if(pokeA.name.toLowerCase() > pokeB.name.toLowerCase()) return -1;
                    else return 0;
                  });
            console.log(pokeName);
            return ({
                ...state,
                pokemons: pokeName,
            });
            
        default:
            return{...state};
    }
}

export default rootReducer;