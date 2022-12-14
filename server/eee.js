require('dotenv').config();

const { sequelize } = require('./db/models');

sequelize.authenticate().then(() => {console.log('WWWWWWWWWWWWWWWWWWWWWWWWW')}).catch(() => {console.log('UGY;GOSIGY;EORIYHPR')})

