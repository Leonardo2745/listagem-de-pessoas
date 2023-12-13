const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(process.env.BD_NAME,process.env.USER_NAME,process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
});

const Pessoa = sequelize.define('Pessoa', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    sobrenome:{
        type: DataTypes.STRING,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
},
{
    timestamps: false,
    tableName: "pessoa",

}
);

module.exports = Pessoa;