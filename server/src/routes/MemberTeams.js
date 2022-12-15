const express = require('express');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/MainBack');
const { Team } = require('../../db/models');
const fileMiddleware = require('../middlewares/file');

// const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const userName = req.session?.username;
    const allMember = await Team.findAll({ order: [['createdAt', 'DESC']]  });
    renderTemplate(Main, { allMember }, res);
  } catch (error) {
    console.log('Error ==>', error);
  }
});

router.post('/add',fileMiddleware.single('image'), async (req, res) => {
  try {
    const { name, jobtitle, description, vk, email, phone } = req.body
    const file = req.file.path;
    const path = file.slice(7)
    const NewMember = await Team.create({image: path, name, jobtitle, description, vk, email, phone}); 
    const { id } = NewMember;
    const { image } = NewMember;
    const time = NewMember.createdAt.toLocaleDateString();
    res.json({
      id, image, name, jobtitle, description, vk, email, phone, time, post: 'OK',
    });
  } catch (error) {
    console.log('Error ====>', error);
  }
});

router.delete('/delete', async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    await Team.destroy({ where: { id } });
    res.json({ destroy: 'OK' });
  } catch (error) {
    console.log('Error ====>', error);
  }
})

module.exports = router;
