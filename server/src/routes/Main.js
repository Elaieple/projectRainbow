const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Layout');


router.get('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    renderTemplate(Main, null, res);
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router