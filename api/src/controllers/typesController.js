const { Type } = require("../db");
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type";

const getTypesByApi = async () => {
    const infoApi = (await axios.get(`${URL}`)).data.results;
    const typesPokemonsApi = infoApi.map((type) => type.name);
    // creo en la base de datos cada tipo de pokemon:
    for(const type of typesPokemonsApi){
        await Type.findOrCreate({where: {name: type}});
    }
    const typesAllPokemons = await Type.findAll();
    const typesPokemons = typesAllPokemons.map((type) => type.name);
    
    return typesPokemons;
}

module.exports = {
    getTypesByApi,

}