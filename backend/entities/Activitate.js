import db from '../dbConfig.js';
import sequelize from 'sequelize';

const Activitate = db.define("Activitate",
{
    IdActivitate:
    {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    DescriereActivitate:
    {
        type: sequelize.STRING,
        allowNull: false
    },
    DataActivitate:
    {
        type: sequelize.NOW,
        allowNull: false
    },
    DurataActivitate:
    {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

export default Activitate;