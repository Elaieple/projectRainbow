const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Media = require('../views/Media');

router.get('/', (req, res) => {
  renderTemplate(Media, {}, res);
});

module.exports = router;
