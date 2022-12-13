const fs = require('fs').promises;
const path = require('path');

const reader = async () => {
    const completePath = path.join(__dirname, '../data/activities.json');
    try {
        const activities = await fs.readFile(completePath, 'utf-8');
        return JSON.parse(activities);
    } catch (err) {
        console.error(`Erro: ${err.message}`);
    }
};

const writer = async (content) => {
    const activities = await reader();
    const completePath = path.join(__dirname, '../data/activities.json');
    try {
        const moreActivities = [...activities, content];
        await fs.writeFile(completePath, JSON.stringify(moreActivities));
    } catch (err) {
        console.error(`Não foi possível escrever no arquivo: ${err.message}`);
    }
};

const getAllActivities = async () => {
    const activities = await reader();
    return activities;
};

const postActivity = async (activity) => {
    await writer(activity);
};

module.exports = {
    getAllActivities,
    postActivity,
};