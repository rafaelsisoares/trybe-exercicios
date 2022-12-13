const { Router } = require('express');

const { checkName } = require('../middlewares/checkName');
const checkPrice = require('../middlewares/checkPrice');
const checkDescription = require('../middlewares/checkDescription');
const { getAllActivities } = require('../utils/activitiesFunctions');
const checkCreatedAt = require('../middlewares/checkCreatedAt');

const router = Router();

router.get('/activities', async (_req, res) => {
  const activities = await getAllActivities();
  res.status(200).json(activities);
});

router.post(
  '/activities',
  checkName,
  checkPrice,
  checkDescription,
  checkCreatedAt,
  async (_req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
  },
);

module.exports = router;
