const router = require('express').Router();
const RenderTemplate = require('../lib/renderTemplate');
const Newspro = require('../views/ProjectNews');
const { Project, Photo, Newsproject } = require('../../db/models');

router.get('/:id',async (req, res) => {
  try {
    const { id } = req.params;
    console.log('REEEEEEEEE', req.params);
    const eee = await Project.findOne({ where: { id }, raw: true });
    RenderTemplate(Newspro, {eee}, res)
  } catch (err) {
    console.log('Error ==>', err);
  }
})

module.exports = router;

  