'use strict'

require('dotenv').config();

const POSTGRES_URI = process.env.NODE_ENV  === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};

  let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

  const foodSchema = require('./food.model');

  const clothesSchema = require('./clothes.model');

  const foodModel = foodSchema(sequelize,DataTypes);

  const clothesModel = clothesSchema(sequelize,DataTypes);

  const Collection = require('./collection-class')

  const foodCollection = new Collection(foodModel)
  const clothesCollection = new Collection(clothesModel)
  

  module.exports = {
      db : sequelize,
      foodCollection : foodCollection,
      clothesCollection : clothesCollection
           
  };