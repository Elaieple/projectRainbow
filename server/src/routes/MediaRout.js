const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const MediaVie = require('../views/Media');
const fileMiddleware = require('../middlewares/file');
const { Media } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const allMedia = await Media.findAll({ order: [['createdAt', 'DESC']] });
    renderTemplate(MediaVie, { allMedia }, res);
  } catch (error) {
    console.log('Error ==>', error)
  }
});

router.post('/add', fileMiddleware.single('image'), async (req, res) => {
  try {
    const { date, title, description, descriptionImage, text, source } = req.body;
    const file = req.file.path;
    const path = file.slice(7);
    const NewMedia = await Media.create({image: path, date, title, description, descriptionImage, text, source});
    const { id } = NewMedia;
    const { image } = NewMedia;
    const time = NewMember.createdAt.toLocaleDateString();
  } catch (error) {
    console.log('Error ===>', error);
  }
})

router.delete('/delete', async(req,res) => {
  const { id } = req.body;
  try {
    await Media.destroy({ where: { id } });
    res.json({ destroy: 'OK' });
  } catch (error) {
    console.log('Error ====>', error);
  }
})

router.get('/sendMedia/:id', async(req,res) => {
  const { id } = req.params;
  try {
    const media = await Media.findOne({where: { id }});
    res.json( media );
  } catch (error) {
    console.log('Error ===>', error);
  }
})

module.exports = router;
