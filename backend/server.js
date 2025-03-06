const express = require('express');
const cors = require("cors");

const app = express();
const SERVER = "0.0.0.0";
const PORT = 3020;

app.use(express.json());
app.use(cors());

const weatherData = {
    "New York": { temperature: "20°C", condition: "Cloudy" },
    "London": { temperature: "15°C", condition: "Rainy" },
    "Tokyo": { temperature: "25°C", condition: "Sunny" },
    "Yerevan": { temperature: "1°C", condition: "Snow" }
};

app.get('/weather', (req, res) => {
    const city = req.query.city;
    if (weatherData[city]) {
        res.json({ city, ...weatherData[city] });
        console.log(`Requested weather data of city ${city}`);
    } else {
        res.status(404).json({ error: "City not found" });
        console.log(`Unknown city ${city}`);
    }
});

app.listen(PORT, SERVER, () => {
    console.log(`Server running on http://${SERVER}:${PORT}`);
});

