const express = require("express");
const cacauTrybe = require("./cacauTrybe");

const app = express();

app.get("/chocolates", async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(+id);
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  return res.status(200).json({ chocolate });
});

module.exports = {
  app,
};
