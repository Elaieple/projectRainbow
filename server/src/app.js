
const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const supabaseUrl = 'https://krxtfepwfehsyzgxmeou.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const { sequelize } = require('../db/models');

const app = express();

const PORT = process.env.PORT ?? 6622;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Report = require('./router/ReportRender');

app.use('/report', Report);

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
