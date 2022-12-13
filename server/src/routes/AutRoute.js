const express = require('express');
const router = express.Router();
const renderTemplate = require('../lib/RenderTemplate');
const bcrypt = require('bcrypt');
const { Admin } = require('../../db/models/admin');
const Aut = require('./../views/Aut');

router.get('/', async (req, res) => {
    try {
        renderTemplate(Aut, {}, res);
    } catch (error) {
        console.log("error", error);
    }
});

router.post('/', async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
      const user = await Admin.findOne({ where: { email }, raw: true });
      if (user) {
        const passChek = await bcrypt.compare(password, user.password);
        if (passChek) {
          req.session.bee = user.name;
          req.session.user_id = user.id;
          req.session.save(() => {
            res.json({err: 'ok'});
          });
        }else{
          res.json({err: 'Не верный пароль/логин!'});
        }
      } else {
        res.json({err:"Пользователь не найден!"});
      }
    } catch (error) {
      console.log('erraut', error);
    }
  });




module.exports = router;