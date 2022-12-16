const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Rep = require('../views/Report');
const { Report, Income, Spending, HelpInfo, HelpVol } = require('../../db/models');

router.get('/report', async (req, res) => {
  try {
    const { bee } = req.session;
    const rep = await Report.findAll();
    const incomAll = await Income.findAll();
    renderTemplate(Rep, {rep, incomAll, bee}, res);
  } catch (error) {
    console.log(error)
  }
});

router.post('/report', async (req, res) => {
try {
  const { year, month, income, from, status, howmany, forwhat, text, texthlp } = req.body;
  console.log(req.body);
   const report = await Report.create({year, month});
   const monthId = report.id;
   console.log(monthId)
   const inc = await Income.create({income, from, status, monthId});
   const spend = await Spending.create({howmany, forwhat, monthId });
   const helpinfo = await HelpInfo.create({texthlp, monthId});
   const helpvol = await HelpVol.create({text, monthId});
   res.redirect('/report')
} catch (error) {
  console.log(error);
}
})

router.delete('/deleterep', async (req, res) => {
  try {
    const { id } = req.body.id 
    console.log(id)
    await Income.destroy({ where: { monthId: req.body.id } });
    await Spending.destroy({ where: { monthId: req.body.id } });
    await HelpInfo.destroy({ where: { monthId: req.body.id } });
    await HelpVol.destroy({ where: { monthId: req.body.id } });
    await Report.destroy({ where: { id: req.body.id } });
    res.json({ re: 'Отчет удален' });
  } catch (error) {
    console.log('errdelete', error);
  }
});

module.exports = router;
  