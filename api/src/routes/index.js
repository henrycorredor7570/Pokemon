const { Router } = require('express');
const router = Router();
// Importar todos los routers;
const pokemonsRouter = require("./pokemonsRouter");
const typesRouter = require("./typesRouter");

// Configurar los routers
router.use("/pokemon", pokemonsRouter);
router.use("/types", typesRouter);

module.exports = router;
