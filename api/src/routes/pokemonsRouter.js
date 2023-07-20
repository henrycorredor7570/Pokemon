const { Router } = require("express");
const pokemonsRouter = Router();
const { getPokemonsHandler, getDetailHandler, createPokemonHandler } = require("../handlers/pokemonsHandler");

// endpoints: ruta de acceso a nuestro backend;
pokemonsRouter.get("/", getPokemonsHandler);
pokemonsRouter.get("/:id", getDetailHandler);
pokemonsRouter.post("/", createPokemonHandler);

module.exports = pokemonsRouter;