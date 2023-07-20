const { Router } = require("express");
const typesRouter = Router();
const { getTypesHandler } = require("../handlers/typesHandler");

typesRouter.get("/", getTypesHandler);

module.exports = typesRouter;