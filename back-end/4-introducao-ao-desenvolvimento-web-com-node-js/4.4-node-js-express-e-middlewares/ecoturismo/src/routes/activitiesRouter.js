const { Router } = require('express');

const { checkName } = require('../middlewares/checkName');
const checkPrice = require('../middlewares/checkPrice');
const checkDescription = require('../middlewares/checkDescription');
const { getAllActivities, registerNewUser } = require('../utils/activitiesFunctions');
const checkCreatedAt = require('../middlewares/checkCreatedAt');
const checkRating = require('../middlewares/checkRating');
const checkDifficulty = require('../middlewares/checkDifficulty');
const apiCredentials = require('../middlewares/apiCredentials');
const tokenGenerator = require('../utils/tokenGenerator');
const checkFirstName = require('../middlewares/checkFirstName');
const checkPassword = require('../middlewares/checkPassword');
const checkEmail = require('../middlewares/checkEmail');
const checkPhone = require('../middlewares/checkPhone');

const router = Router();

router.get('/activities', async (_req, res) => {
  const activities = await getAllActivities();
  res.status(200).json(activities);
});

router.post(
  '/activities',
  apiCredentials,
  checkName,
  checkPrice,
  checkDescription,
  checkCreatedAt,
  checkRating,
  checkDifficulty,
  async (_req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
  },
);

router.post('/signup', checkFirstName, checkPassword, checkEmail, checkPhone, async (req, res) => {
    const token = tokenGenerator();
    const { firstName } = req.body;
    const newUser = {
        [token]: firstName,
    };
    await registerNewUser(newUser);
    res.status(200).json({ token });
});

module.exports = router;
