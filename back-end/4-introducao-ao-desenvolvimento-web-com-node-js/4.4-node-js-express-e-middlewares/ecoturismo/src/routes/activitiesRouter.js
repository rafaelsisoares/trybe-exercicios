const { Router } = require('express');

const { checkName } = require('../middlewares/validation');
const { getAllActivities } = require('../utils/activitiesFunctions');

const router = Router();

router.get('/activities', async (_req, res) => {
    const activities = await getAllActivities();
    res.status(200).json(activities);
});

router.post('/activities', checkName, async (req, res) => {
    const { activity } = req.body;
    res.status(201).json(activity);
});

module.exports = router;