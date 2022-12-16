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
const isAuth = require('./middlewares/isAuth');

const app = express();

const PORT = process.env.PORT ?? 6622;

const { SESSION_SECRET } = process.env;

const cors = require('./middlewares/cors');

const Autorisation = require('./routes/AutRoute');
const AddMember = require('./routes/MemberTeams');
const editMember = require('./routes/EditMember');
const editMedia = require('./routes/editMedia');
const Report = require('./routes/ReportRender');
const Main = require('./routes/Main');
const Media = require('./routes/MediaRout');
const Event = require('./routes/NewProject');
const file = require('./routes/FileRouter')
const sendMembers = require('./routes/SendMemberTeam');
const sendMedia = require('./routes/SendMedia');
const NewProject = require('./routes/NewProjectRouter');


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

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
 
app.use('/', Autorisation);
app.use('/',isAuth, Report);
app.use('/',isAuth, Main);
app.use('/AddMember',isAuth, AddMember);
app.use('/editMember',isAuth, editMember);
app.use('/editMedia',isAuth, editMedia);
app.use('/report',isAuth, Report);
app.use('/sendMembers',isAuth, sendMembers);
app.use('/sendMedia',isAuth, sendMedia);
app.use('/AddMedia',isAuth, Media);
app.use('/newproj',isAuth, Event)
app.use('/file',isAuth, file)
app.use('/newsproject',isAuth, NewProject);

app.get('/logout', (req, res) => { // делаем логаут
  try {
    console.log(req.session.bee);
    if (req.session.bee) {
      req.session.destroy(() => { // убиваем сессию
        res.clearCookie('Cook');// убиваем куки при выходе
        res.redirect('/');
      });
    }
  } catch (error) {
    res.send(`Error ---123---> ${error}`);
  }
});


app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
