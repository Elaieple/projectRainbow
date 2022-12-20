const router = require('express').Router();
const { Report, Income, Spending, HelpInfo, HelpVol  } = require('../../db/models');

router.get('/', async (req,res) => {
    const { bee } = req.session;
    const rep = await Report.findAll();
    const incomAll = await Income.findAll();
    const donate = await Spending.findAll();
    const helpInf = await HelpInfo.findAll();
    const helpVol = await HelpVol.findAll();
    
    console.log('XUY ===>', rep);
    console.log('joPA ===>' , incomAll)
    res.json([rep, incomAll, donate, helpInf, helpVol]);
  })

  module.exports = router