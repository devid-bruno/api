import Sequelize from 'sequelize';
import connect from '../database/db.js';

const User = connect.define('user', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
       type: Sequelize.STRING,
        allowNull: false
    }
})


//User.sync({force: true});

export default User;