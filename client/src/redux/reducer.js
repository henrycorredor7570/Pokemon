import { GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES_POKEMONS, CREATE_POKEMON, ORDER_ALPHABET, ORDER_ATTACK, FILTER_TYPE, FILTER_POKE_CREATED } from "./types_actions";

const initialState = {
    pokemons:[],// array que uso para mostrar en pantalla los elementos
    copyPokemons:[],
    types:[],
}

const rootReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case GET_POKEMONS:
            return{     
                ...state,
                pokemons: payload,
                copyPokemons: payload,//guardo una copia de todos los pokemons para trabajar sobre ella
            };
        case GET_POKEMON_BY_NAME:
            return{
                ...state,
                pokemons: payload,
            };
        case CREATE_POKEMON:
            return{
                ...state,
                pokemons: [...state.copyPokemons, payload],
            }
        case GET_TYPES_POKEMONS:
            return {
                ...state,
                types: payload// guardo en el estado global types la info de payload que me llega con todos los tipos de pokemon
            }
        case ORDER_ALPHABET:
            const orderPokes = [...state.copyPokemons];
            const orderAlphaName =
                payload === "All" ? orderPokes :
                    payload === "nameAsc"
                        ? orderPokes.sort((pokeA,pokeB) => {
                            if(pokeA.name.toLowerCase() > pokeB.name.toLowerCase()) return 1
                            else if (pokeA.name.toLowerCase() < pokeB.name.toLowerCase()) return -1
                            else return 0
                        })
                        : orderPokes.sort((pokeA,pokeB) => {
                            if(pokeA.name.toLowerCase() < pokeB.name.toLowerCase()) return 1
                            else if(pokeA.name.toLowerCase() > pokeB.name.toLowerCase()) return -1
                            else return 0;
                        });
            return ({
                ...state,
                pokemons: orderAlphaName,
            });
        case ORDER_ATTACK:
            const pokes = [...state.copyPokemons];
            const orderAttackPokes = 
                payload === "All" ? pokes :
                    payload === "menorAttack"
                        ? pokes.sort((a,b) => a.attack - b.attack)
                        : pokes.sort((a,b) => b.attack - a.attack)
            return ({
                ...state,
                pokemons: orderAttackPokes,
            });
        case FILTER_TYPE:
            const copyPokes = [...state.copyPokemons];
            const pokemonFiltered =
                payload === "All"
                    ? copyPokes
                    : copyPokes.filter((poke) => poke.Types.includes(payload));//includes me devuelve un booleano
            return ({
                ...state,   
                pokemons: pokemonFiltered,
            });                                         
        case FILTER_POKE_CREATED:
            const pokesCopy = [...state.copyPokemons];
            const originPoke = 
                payload === "allPoke"
                    ? pokesCopy
                        : payload === "DB"
                            ? pokesCopy.filter((poke) => isNaN(poke.id))
                            : pokesCopy.filter((poke) => !isNaN(poke.id))
            return ({
                ...state,
                pokemons: originPoke,
            });
        default:
            return{...state};
    }
}

export default rootReducer;