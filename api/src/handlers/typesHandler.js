const { getTypesByApi } = require("../controllers/typesController");

const getTypesHandler  = async (req, res) => {
    try {
        const typesApi = await getTypesByApi();
        res.status(200).json(typesApi);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports= {
    getTypesHandler,
}