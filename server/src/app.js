const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();
require('@babel/register');

const path = require('path');

const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// const supabaseUrl = 'db.ddipbguvuyqqtzeomshc.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

const { sequelize } = require('../db/models');

const app = express();

const PORT = process.env.PORT ?? 6622;

const { SESSION_SECRET } = process.env;

const main = require('./routes/MemberTeams');
const edit = require('./routes/EditMember');
const Report = require('./routes/ReportRender');
const Media = require('./routes/MediaRout');
const Event = require('./routes/NewProject');


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
  name: 'Cook', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'cook', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};

app.use(session(sessionConfig));// подключение мидлвара для куки
 
const Autorisation = require('./routes/AutRoute');
app.use('/autorisation', Autorisation);

app.use('/', main);
app.use('/edit', edit)
app.use('/report', Report);
app.use('/media', Media);
app.use('/newproj', Event)


app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
