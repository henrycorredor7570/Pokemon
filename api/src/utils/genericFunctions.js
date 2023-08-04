const axios = require("axios");

//funcion para limpiar informacion de la API:
const infoCleanApi = (arr) => {
    const urlPokemons = []; // uso este array para poner la url de cada pokemon despues de realizar el foreach, se agregan todas las promesas resultantes
        arr.forEach( (pokemon) => {
            urlPokemons.push(axios.get(pokemon.url)
            .then((res) => res.data));//pusheo el contenido de la url de cada pokemon
        });
        const pokemonsApi = Promise.all(urlPokemons)//Promise.all espera que todas las promesas se resuelvan(Promise.all es en realidad una promesa que toma un arreglo de promesas como una entrada (un iterable). Luego se resuelve cuando todas las promesas se resuelven o si cualquiera de ellos es rechazado.)
            .then((res) => res.map((pokemon) => {
                return {
                    id: pokemon.id,
                    name: pokemon.name, 
                    image: pokemon.sprites.other.home.front_default,
                    Types: pokemon.types.map((elemento) => elemento.type.name),
                    hp: pokemon.stats[0].base_stat,
                    attack: pokemon.stats[1].base_stat,
                    defense: pokemon.stats[2].base_stat,
                    speed: pokemon.stats[5].base_stat,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    created: false
                }
                
            }));
    return pokemonsApi; // retornamos la promesa resuelta
};

//funcion para limpiar la informacion de un solo pokemon traido de la API
const infoPokeCleanApi = (pokemon) => {
    const { id, name, sprites, types, stats, height, weight } = pokemon;
    return {
        id,
        name,
        image: sprites.other.home.front_default,
        Types: types.map((elemento) => elemento.type.name),
        hp: stats[0].base_stat,
        attack: stats[1].base_stat,
        defense: stats[2].base_stat,
        speed: stats[5].base_stat,
        height,
        weight,
        created: false,
    };
}  

//funcion para validar el nombre
const normalizarCoincidencia = (name) => {
    return name.normalize("NFD")//para normalizar los caracteres (convierte Á en A, é en e, etc...) NFD :: Normalization Form Canonical Decomposition
            .replace(/[\u0300-\u036f]/g, "")//regExp
            .toLowerCase();
}

//validacion para requerir todos los campos al momento de crear el pokemon
const validateCreatePokemon = (req,res,next) => {
    const { name, image, hp, attack, defense, speed, height, weight, type } = req.body;
    if(!name) return res.status(400).json({error:"Required name"});
    if(!image) return res.status(400).json({error:"Required image"});
    if(!hp) return res.status(400).json({error:"Required hp"});
    if(!attack) return res.status(400).json({error:"Required attack"});
    if(!defense) return res.status(400).json({error:"Required defense"});
    if(!speed) return res.status(400).json({error:"Required speed"});
    if(!height) return res.status(400).json({error:"Required height"});
    if(!weight) return res.status(400).json({error:"Required weight"});
    if(!type) return res.status(400).json({error:"Required type"});

    next();// pasa al siguiente middleware
}

module.exports = {
    infoCleanApi,
    infoPokeCleanApi,
    normalizarCoincidencia,
    validateCreatePokemon,
};