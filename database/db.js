import Sequelize from 'sequelize';

var db = 'api'

const connect = new Sequelize(`${db}`, 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

connect.authenticate().then(() => {
    console.log(`Conectado ao banco ${db}`);
}).catch((msgErr) => {
    console.log("Unable to connect to the database:", msgErr);
});

export default connect;