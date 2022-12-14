const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Event = require('../views/Event');




router.get('/', (req, res) => {
  renderTemplate(Event, {}, res);
});
router.post('/', async (req, res) => {
  try {
    const { title, datestart, dateend, support, fonimage, mission, intent } = req.body;
     const newEvent = await Event.create({ title, datestart, dateend, support, fonimage, mission, intent });
     
  } catch (error) {
    console.log(error)
  }
 
})
module.exports = router;
