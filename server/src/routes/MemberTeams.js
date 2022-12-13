const express = require('express');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/MainBack');
const { Team } = require('../../db/models');

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

router.post('/add', async (req, res) => {
  try {
    const { image, name, jobtitle, description, vk, email, phone } = req.body
    const NewMember = await Team.create({image, name, jobtitle, description, vk, email, phone}); 
    const { id } = NewMember;
    // const { nameUser } = NewMember.name;
    const time = NewMember.createdAt.toLocaleDateString();
    res.json({
      id, image, name, jobtitle, description, vk, email, phone, time, post: 'OK',
    });
    // res.redirect('/')
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
