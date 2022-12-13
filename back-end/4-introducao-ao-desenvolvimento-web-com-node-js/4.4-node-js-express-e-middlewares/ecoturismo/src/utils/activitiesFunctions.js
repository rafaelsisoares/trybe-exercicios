const fs = require('fs').promises;
const { join } = require('path');

const reader = async () => {
    const completePath = join(__dirname, '../data/activities.json');
    try {
        const activities = await fs.readFile(completePath, 'utf-8');
        return JSON.parse(activities);
    } catch (err) {
        console.error(`Erro: ${err.message}`);
    }
};

const writer = async (content) => {
    const activities = await reader();
    const completePath = join(__dirname, '../data/activities.json');
    try {
        const moreActivities = [...activities, content];
        await fs.writeFile(completePath, JSON.stringify(moreActivities));
    } catch (err) {
        console.error(`Não foi possível escrever no arquivo: ${err.message}`);
    }
};

const readerAuthData = async () => {
    const path = join(__dirname, '../data/authdata.json');
    try {
        const authData = await fs.readFile(path, 'utf-8');
        return JSON.parse(authData);
    } catch (err) {
        console.error(`Erro: ${err.message}`);
    }
};

const writerAuthData = async (newUser) => {
    const path = join(__dirname, '../data/authdata.json');
    try {
        const auth = await readerAuthData();
        const newAuthData = { ...auth, ...newUser };
        await fs.writeFile(path, JSON.stringify(newAuthData));
    } catch (err) {
        console.error(`Erro: ${err.message}`);
    }
};

const getAllActivities = async () => {
    const activities = await reader();
    return activities;
};

const postActivity = async (activity) => {
    await writer(activity);
};

const registerNewUser = async (newUser) => {
    await writerAuthData(newUser);
};

module.exports = {
    getAllActivities,
    postActivity,
    registerNewUser,
};