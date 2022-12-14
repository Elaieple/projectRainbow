const router = require('express').Router();
const fs = require('fs').promises

router.get('/', async (req, res) => {
  try {
    const stats = await fs.stat(`${__dirname}/../../public/files/ЕГРЮЛ.pdf`);
    const size = `${stats.size / 1024}`.slice(0, 3)
    res.json({'size': size});
  } catch (error) {
   console.log(error);
  }
});


module.exports = router;
