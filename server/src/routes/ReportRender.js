const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Report = require('../views/Report');

router.get('/', (req, res) => {
  renderTemplate(Report, {}, res);
});

module.exports = router;
