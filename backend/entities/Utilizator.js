import db from '../dbConfig.js';
import sequelize from 'sequelize';

const Utilizator = db.define("Utilizator",
{
    IdUser:
    {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ParolaUser:
    {
        type: sequelize.STRING,
        allowNull: false
    },
    NumeUser:
    {
        type: sequelize.STRING,
        allowNull: false
    },
    TipUser:
    {
        type: sequelize.STRING,
        allowNull: false
    }
});

export default Utilizator;