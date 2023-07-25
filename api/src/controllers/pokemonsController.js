const axios = require("axios");
const { Pokemon, Type, Pokemon_Type} = require("../db");
const { infoCleanApi, infoPokeCleanApi, normalizarCoincidencia } = require("../utils/genericFunctions");

// Trae todos los pokemones de la base de datos y de la API:
// Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
const getAllPokemons = async () => {
    //INFO DE LA API:
    const infoApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)).data.results;
    const pokemonsApi = await infoCleanApi(infoApi);
    //INFO DB:
    const pokemonsDB = await Pokemon.findAll(); // metodo que retorna un arreglo con la info de la DB
    return [...pokemonsApi, ...pokemonsDB];
}

//Obtiene los detalles de un pokemon por ID:
const getPokemonById = async (id, source) => {
    const pokemon = (source === "api")
                    ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
                    : await Pokemon.findByPk(id, {
                        
                        include: {//quiero que me incluya unicamente estas columnas:
                            model: Type,
                            attributes: ["name"],
                        }
                    });
    if(source === "api"){
        return infoPokeCleanApi(pokemon)
    }
    return pokemon;
}

const getPokemonByName = async (name) => {
    //INFO DE LA API:
    const infoApi = await getAllPokemons();
    const pokemonsFiltered = infoApi.filter((pokemon)=> normalizarCoincidencia(pokemon.name).includes(normalizarCoincidencia(name)));
    if(pokemonsFiltered.length < 1) throw Error (`No existe el pokemon con el nombre: ${name}`);
    return pokemonsFiltered;
}

//Crea un pokemon:
const createPokemonDb = async (name, image, hp, attack, defense, speed, height, weight, types) => {
    const newPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, height, weight});// me devuelve una promesa por eso el await

    await Promise.all(
        types.map(async (type) => {
            const [newType] = await Type.findOrCreate({
                where: {name: type},
            });
            await Pokemon_Type.create({
                PokemonId: newPokemon.id,
                TypeId: newType.id
            })
        })
    )
    newPokemon.dataValues.types = types;
    console.log(newPokemon);
    return newPokemon;
}

module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,
    createPokemonDb,
}