const axios = require("axios");
const { Pokemon, Type, Pokemon_Type} = require("../db");
const { infoCleanApi, infoPokeCleanApi, normalizarCoincidencia } = require("../utils/genericFunctions");
require('dotenv').config();
const { URL } = process.env;

// Trae todos los pokemones de la base de datos y de la API unificados.
const getAllPokemons = async () => {
    //INFO DE LA API:
    const infoApi = (await axios.get(`${URL}?limit=50&offset=0`)).data.results;
    const pokemonsApi = await infoCleanApi(infoApi);
    //INFO DB:
    const pokemonsDB = await Pokemon.findAll({// metodo que retorna un arreglo con la info de la DB
        include:{
            model:Type,
            attributes:["name"],
        }
    }); 

    const filterDb = pokemonsDB.map((poke) => {
        return {
            id: poke.dataValues.id,
            name: poke.dataValues.name,
            image: poke.dataValues.image,
            hp: poke.dataValues.hp,
            attack: poke.dataValues.attack,
            defense: poke.dataValues.defense,
            speed: poke.dataValues.speed,
            height: poke.dataValues.height,
            weight: poke.dataValues.weight,
            createDB: poke.dataValues.createDB, 
            Types: poke.dataValues.Types.map((type) => type.name)
        }
    })
    if(pokemonsApi.length === 0 && filterDb.length === 0) throw Error ("¡Aún no hay pokemones disponibles!")
    const allPokemons = [...pokemonsApi, ...filterDb];
    return allPokemons;
}

//Obtiene los detalles de un pokemon por ID:
const getPokemonById = async (id, source) => {
    if(source === "api"){
        const infoPoke = (await axios.get(`${URL}${id}`)).data
        const pokemon = infoPokeCleanApi(infoPoke);
        return pokemon;
    }

    if(source !== "api"){
        const infoPoke = await Pokemon.findByPk(id, {
            include: {//quiero que me incluya unicamente estas columnas
                model: Type,
                attributes:['name'],
                }
            });

        const pokemon = {
            id: infoPoke.dataValues.id,
            name: infoPoke.dataValues.name,
            image: infoPoke.dataValues.image,
            Types: infoPoke.dataValues.Types.map((type) => type.name),
            hp: infoPoke.dataValues.hp,
            attack: infoPoke.dataValues.attack,
            defense: infoPoke.dataValues.defense,
            speed: infoPoke.dataValues.speed,
            height: infoPoke.dataValues.height,
            weight: infoPoke.dataValues.weight,
            created: infoPoke.dataValues.createDB,
        }
        return pokemon;
    }
}

//obtiene los pokemons que coincidan con el nombre ingresado
const getPokemonByName = async (name) => {
    //INFO DE LA API:
    const infoApi = await getAllPokemons();
    const pokemonsFiltered = infoApi.filter((pokemon) => normalizarCoincidencia(pokemon.name).includes(normalizarCoincidencia(name)));
    if(pokemonsFiltered.length < 1) throw Error (`No existe el pokemon con el nombre: ${name}`);
    return pokemonsFiltered;
}

//Crea un pokemon en la DB:
const createPokemonDb = async (name, image, hp, attack, defense, speed, height, weight, type) => {

    const newPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, height, weight});

    await Promise.all(
        type.map(async (type) => {
            const [newType] = await Type.findOrCreate({
                where: {name: type},
            });
            await Pokemon_Type.create({
                PokemonId: newPokemon.id,
                TypeId: newType.id
            })
        })
    );

    newPokemon.dataValues.type = type; //agregar los tipos a newPokemon 
    return newPokemon;
}

module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,
    createPokemonDb,
}