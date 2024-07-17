var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

/* GET users listing. */
router.get('/', async function (req, res, next) {

  /* 3. Uso del método findAll */
  let usersCollection = await models.users.findAll({})

  /* 4. Paso de parámetros a la vista */
  res.render('crud', { title: 'CRUD with users', usersArray: usersCollection });

});

module.exports = router;
