const {sequelize} = require('../db');
const { Sequelize,Model } = require('sequelize');



class Menu extends Model{

}

Menu.init({
    title:Sequelize.STRING
},{sequelize})



module.exports = {Menu};