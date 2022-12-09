// src/cacauTrybe.js

const fs = require("fs").promises;
const { join } = require("path");

const readCacauTrybeFile = async () => {
  const path = "/files/cacauTrybeFile.json";
  try {
    const contentFile = await fs.readFile(join(__dirname, path), "utf-8");
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (chocolateUpdated) => {
  const path = "/files/cacauTrybeFile.json";
  try {
    const fullPath = join(__dirname, path);
    await fs.writeFile(fullPath, JSON.stringify(chocolateUpdated));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
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

const getChocolateByName = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((chocolate) => chocolate.name.toLowerCase()
    .includes(name.toLowerCase()));
};

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const targetChocolate = cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);

  if (targetChocolate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
      if (chocolate.id === id) return {...chocolate, ...update };
      return chocolate;
    });

    await writeCacauTrybeFile(cacauTrybe);
    return { ...targetChocolate, ...update };
  }
  return false;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolateByBrand,
  getChocolateByName,
  writeCacauTrybeFile,
  updateChocolate
};
