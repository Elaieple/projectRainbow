const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Layout');


router.get('/', async (req, res) => {
  try {
    const { bee } = req.session;
    
    renderTemplate(Main, {bee}, res);
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router