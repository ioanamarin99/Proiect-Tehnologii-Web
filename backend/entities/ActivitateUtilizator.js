import db from '../dbConfig.js';
import sequelize from 'sequelize';

const ActivitateUtilizator = db.define("ActivitateUtilizator",
{
    IdActivitate:
    {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    IdUser:
    {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
});

export default ActivitateUtilizator;