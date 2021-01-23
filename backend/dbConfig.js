import Sequelize from 'sequelize';

const db = new Sequelize({
    dialect: 'mssql',
    database: 'FeedbackApp',
    username: 'sa',
    host: 'localhost',
    port: '55892',
    password: 'Sql1122334455',  
    validateBulkLoadParameters: true,
    define: {
    timestamps: false,
    freezeTableName: true
    }  
})

export default db;