const { Router } = require("express");
const pokemonsRouter = Router();
const { getPokemonsHandler, getDetailHandler, createPokemonHandler } = require("../handlers/pokemonsHandler");
const { validateCreatePokemon } = require("../utils/genericFunctions");

// endpoints: ruta de acceso a nuestro backend;
pokemonsRouter.get("/", getPokemonsHandler);
pokemonsRouter.get("/:id", getDetailHandler);
pokemonsRouter.post("/", validateCreatePokemon, createPokemonHandler);

module.exports = pokemonsRouter;