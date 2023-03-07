const {sequelize} = require('../db');
const { Sequelize,Model } = require('sequelize');


class Restaurant extends Model{
}

Restaurant.init({
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    cuisine:Sequelize.STRING,
    rating:Sequelize.INTEGER
}, {sequelize});


module.exports = {Restaurant};