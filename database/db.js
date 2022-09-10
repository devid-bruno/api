import Sequelize from 'sequelize';

var db = 'heroku_23178262b6400a9'

const bank = new Sequelize(`${db}`, 'bb9a7d45d084fd', 'a5db1e75', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    timezone: '-03:00'
})

bank.authenticate().then(() => {
    console.log(`Conectado ao banco ${db}`);
}).catch((msgErr) => {
    console.log("Unable to connect to the database:", msgErr);
});

export default bank;