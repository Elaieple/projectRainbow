import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pluuaeztvllcymnnvfjl.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

// const sessions = require('./middlewares/sessions');
// const cors = require('./middlewares/cors');
const app = express();

const PORT = process.env.PORT ?? 6622;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
