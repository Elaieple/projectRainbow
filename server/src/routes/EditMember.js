const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const editPost = require('../views/EditMember');
const { Team } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const Member = await Team.findOne({ where: { id: req.params.id } });
    renderTemplate(editPost, { Member }, res);
  } catch (error) {
    console.log('Error ==>', error);
  }
});

router.post('/:id', async (req, res) => {
  const { image, name, jobtitle, description, vk, email, phone } = req.body;
  const { id } = req.params;
  try {
    await Team.update({ image, name, jobtitle, description, vk, email, phone }, { where: { id } });
    res.redirect('/');
  } catch (error) {
    console.log('Error ==>', error);
  }
});

module.exports = router;
