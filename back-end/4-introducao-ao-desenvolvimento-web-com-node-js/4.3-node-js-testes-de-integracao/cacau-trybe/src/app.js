const express = require("express");
const cacauTrybe = require("./cacauTrybe");

const app = express();

app.get("/chocolates", async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get("/chocolates/total", async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ total: chocolates.length });
});

app.get("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(+id);
  if (!chocolate) return res.status(404).json({ message: "Chocolate not found" });
  return res.status(200).json({ chocolate });
});

app.get("/chocolates/brands/:id", async (req, res) => {
  const { id } = req.params;
  const chocolates = await cacauTrybe.getChocolateByBrand(+id);
  if (chocolates.length === 0) return res.status(404).json({ message: "Brand not found" });
  return res.status(200).json({ chocolates });
});

module.exports = {
  app,
};
