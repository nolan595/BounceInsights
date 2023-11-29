const express = require("express");
const axios = require("axios");
const app = express();

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

app.listen(5000, () => console.log("Server running on port 5000"));
