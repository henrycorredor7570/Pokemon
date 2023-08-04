const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,//UUID es una combinacion de numeros, letras y guiones(codigo alfanumerico) y para que no choquen con los de la api 
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,//aqui se crea el numero aleatorio
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
      defaultValue: "https://images3.alphacoders.com/677/677583.png",
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 300,
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 300,
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 300,
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 1000,
      }
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 1000,
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 20000,
      }
    },
    createDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },{timestamps:false});//No me aparezcan los campos de fecha en la que se creo el usuario
};
