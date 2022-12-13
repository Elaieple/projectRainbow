const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const supabaseUrl = 'https://krxtfepwfehsyzgxmeou.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// const sessions = require('./middlewares/sessions');
// const cors = require('./middlewares/cors');
const app = express();

const PORT = process.env.PORT ?? 6622;

const main = require('./routes/MemberTeams');
const edit = require('./routes/EditMember');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', main);
app.use('/edit', edit)

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
