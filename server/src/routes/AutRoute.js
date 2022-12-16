const express = require('express');
const router = express.Router();
const renderTemplate = require('../lib/renderTemplate');
const bcrypt = require('bcrypt');
const { Admin } = require('../../db/models');
const Aut = require('../views/Main');

router.get('/', async (req, res) => {
    try {
      const { bee } = req.session;
      console.log(bee);
        renderTemplate(Aut, { bee }, res);
    } catch (error) {
        console.log("error", error);
    }
});
 
router.post('/autorisation', async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
      const user = await Admin.findOne({ where: { email }, raw: true });
      if (user) {
        if (password === user.password) {
          req.session.bee = user.name;
          req.session.user_id = user.id;
          req.session.save(() => {
            res.json({err: 'ok'});
          });
        }else{
          res.json({err: 'Не верный пароль/логин'});
        }
      } else {
        res.json({err:"Пользователь не найден!"});
      }
    } catch (error) {
      console.log('erraut', error);
    }
  });




module.exports = router;