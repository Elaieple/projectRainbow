const router = require('express').Router();
const { Media } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const medias = await Media.findAll({});
    res.json(medias);
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
