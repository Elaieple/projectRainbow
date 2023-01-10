const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const {Project} = require('../../db/models')
const Event = require('../views/Event');
const fileMiddleware = require('../middlewares/file');

router.get('/', async (req, res) => {
  try {
    const { bee } = req.session;
     const allProjects = await Project.findAll({incude: {all: true}})
  renderTemplate(Event, {allProjects, bee}, res);
  } catch {
    console.log(error)
  }
 
});
router.post('/', fileMiddleware.single('fonimage'),  async (req, res) => {
  try {
    console.log('here', req.file);
    const fonimage = req.file.path.slice(7)
    const { title, datestart, dateend, support, mission, intent } = req.body;
     const newEvent = await Project.create({ title, datestart, dateend, support, fonimage, mission, intent });
     res.redirect('/newproj')
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params
    await Project.destroy({where: {id}})
    res.sendStatus(200)
  } catch (error) {
    console.log(error);
  }
});

router.get('/current', async (req, res) => {
  try {

    const allProjects = await Project.findAll({incude: {all: true}})
    const sortedProjects = allProjects.filter(el => Date.parse(el.dateend) > Date.parse(new Date()))
    res.json(sortedProjects)
  } catch (error) {
    console.log(error);
  }
});

router.get('/completed', async (req, res) => {
  try {
    const allProjects = await Project.findAll({incude: {all: true}})
    const sortedProjects = allProjects.filter(el => Date.parse(el.dateend) < Date.parse(new Date()))
    res.json(sortedProjects)
  } catch (error) {
    console.log(error);
  }
});

router.get('/current/:id', async (req, res) => {
  try {
  const {id} = req.params
  const project = await Project.findOne({where: {id}})
    res.json(project)
  } catch (error) {
    console.log(error);
  }
});

router.get('/send', async (req, res) => {
  try {
    const project = await Project.findAll({});
    // const projects = project.length(4);
    console.log(project)
    res.json(project)
  } catch (error) {
    console.log('Error ===>', error);
  }
})


module.exports = router;
