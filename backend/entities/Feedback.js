import db from '../dbConfig.js';
import sequelize from 'sequelize';

const Feedback = db.define("Feedback",
{
    IdFeedback:
    {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    DenumireFeedback:
    {
        type: sequelize.STRING,
        allowNull:false
    },
    MomentFeedback:
    {
        type: sequelize.NOW,
        allowNull: false   
    },
    IdUser:
    {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    IdActivitate:
    {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    }
});

export default Feedback;