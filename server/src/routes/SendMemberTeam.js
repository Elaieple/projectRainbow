const router = require('express').Router();
const { Team } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const members = await Team.findAll({});
    res.json(members);
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
