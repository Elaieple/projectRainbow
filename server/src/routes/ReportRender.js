const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Rep = require('../views/Report');
const { Report, Income, Spending, HelpInfo, HelpVol } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Rep, {}, res);
});

router.post('/', async (req, res) => {
try {
  const { year, month, income, from, satus, howmany, forwhat, text, texthlp } = req.body;
  console.log(req.body);
   const report = await Report.create({year, month});
   const inc = await Income.create({income, from, satus});
   const spend = await Spending.create({howmany, forwhat});
   const helpinfo = await HelpInfo.create({texthlp});
   const helpvol = await HelpVol.create({text});
   res.redirect('/report')
} catch (error) {
  console.log(error);
}
})

module.exports = router;
  