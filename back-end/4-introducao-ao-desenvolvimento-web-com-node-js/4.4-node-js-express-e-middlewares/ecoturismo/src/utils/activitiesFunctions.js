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

const getAllActivities = async () => {
    const activities = await reader();
    return activities;
};

module.exports = {
    getAllActivities,
};