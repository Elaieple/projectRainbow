const router = require('express').Router();

const renderTemplate = require('../lib/RenderTempale');
const Report = require('../views/Layout');

router.get('/', (req, res) => {
  renderTemplate(Report, {}, res);
});

module.exports = router;
