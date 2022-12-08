// src/cacauTrybe.js

const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
    const cacauTrybe = await readCacauTrybeFile();
    return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
};

const getChocolateByBrand = async (brandId) => {
    const chocolates = await getAllChocolates();
    return chocolates.filter((chocolate) => chocolate.brandId === brandId);
};

const getNumberOfChocolates = async () => {
    const chocolates = await getAllChocolates();
    return chocolates.length;
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolateByBrand,
    getNumberOfChocolates
};