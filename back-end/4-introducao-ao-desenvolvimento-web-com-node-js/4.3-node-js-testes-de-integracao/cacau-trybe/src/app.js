const express = require("express");
const cacauTrybe = require("./cacauTrybe");

const app = express();

app.use(express.json());

app.put("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const targetChocolate = await cacauTrybe.updateChocolate(+id, { name, brandId });
  if (!targetChocolate) return res.status(404).json({ message: "chocolate not found" });
  res.status(200).json({ chocolate: targetChocolate });
});

app.get("/chocolates", async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get("/chocolates/search", async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.getChocolateByName(name);
  res.status(chocolates.length === 0 ? 404 : 200).json({ chocolates }); 
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
