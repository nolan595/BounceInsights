const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send(
    "Welcome to my API! I will use this endpoint - /api/countries/:countryName "
  );
});

app.get("/api/countries/:countryName", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching country data" });
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
