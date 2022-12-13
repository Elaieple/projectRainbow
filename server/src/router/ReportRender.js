const router = require('express').Router();

const renderTemplate = require('../lib/RenderTempale');
const Report = require('../wievs/Report');

router.get('/', (req, res) => {
  renderTemplate(Report, {}, res);
});

module.exports = router;
