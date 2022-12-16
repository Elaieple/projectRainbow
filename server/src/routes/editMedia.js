const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const editMedia = require('../views/EditMedia');
const fileMiddleware = require('../middlewares/file');
const { Media } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { bee } = req.session;
    const news = await Media.findOne({ where: { id: req.params.id } });
    renderTemplate(editMedia, { news, bee }, res);
  } catch (error) {
    console.log('Error ==>', error);
  }
});

router.post('/:id', fileMiddleware.single('image'), async (req, res) => {
  const { date, title, description, descriptionImage, text, source } = req.body;
  const { id } = req.params;
  try {
    const update = { date, title, description, descriptionImage, text, source }
    if (req.file) {
      update.image = req.file.path.slice(7);
    }
    await Media.update( update , { where: { id } });
    res.redirect('/AddMedia');
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router;
