const { getAllPokemons, getPokemonById, getPokemonByName, createPokemonDb } = require ("../controllers/pokemonsController");

// obtiene un arreglo con todos los pokemons:
const getPokemonsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if(name){
            const pokemonByName = await getPokemonByName(name);
            res.status(200).json(pokemonByName);
        }else{
            const response = await getAllPokemons();
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

 // obtiene los detalles de un pokemon por ID:
const getDetailHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "dataBase" : "api";// si id no es un numero .entonces: source = dataBase y si es numero source = api
    try {
        const response = await getPokemonById(id, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});     
    }
}

// crea un pokemon en la DB:
const createPokemonHandler = async (req, res) => {
    const { name, image, hp, attack, defense, speed, height, weight, type } = req.body;
    try {
        const response = await createPokemonDb(name, image, hp, attack, defense, speed, height, weight, type);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getPokemonsHandler,
    getDetailHandler,
    createPokemonHandler,
}