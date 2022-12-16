const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const editPost = require('../views/EditMember');
const fileMiddleware = require('../middlewares/file');
const { Team } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { bee } = req.session;
    const Member = await Team.findOne({ where: { id: req.params.id } });
    renderTemplate(editPost, { Member, bee }, res);
  } catch (error) {
    console.log('Error ==>', error);
  }
});

router.post('/:id', fileMiddleware.single('image'), async (req, res) => {
  const { name, jobtitle, description, vk, email, phone } = req.body;
  const { id } = req.params;
  try {
    const update = { name, jobtitle, description, vk, email, phone }
    if (req.file) {
      update.image = req.file.path.slice(7);
    }
    await Team.update( update , { where: { id } });
    res.redirect('/AddMember');
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router;
