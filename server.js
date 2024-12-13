const express = require("express");
const app = express();
const port = 3000;

// Данные о персонажах
const winxCharacters = {
  Bloom:
    "Bloom is the Fairy of the Dragon Flame, leader of the Winx Club, and a princess of Domino.",
  Stella:
    "Stella is the Fairy of the Shining Sun, a creative and cheerful princess of Solaria.",
  Flora:
    "Flora is the Fairy of Nature, known for her kindness and love for plants and animals.",
  Musa: "Musa is the Fairy of Music, who is passionate about melodies and rhythms.",
  Tecna: "Tecna is the Fairy of Technology, always logical and innovative.",
  Aisha:
    "Aisha, also known as Layla, is the Fairy of Waves, a brave and athletic member of the group.",
};

// Маршрут для получения данных о персонаже
app.get("/winx", (req, res) => {
  const name = req.query.name;
  const info = winxCharacters[name];

  if (info) {
    res.json({ info });
  } else {
    res.status(404).json({ error: "Character not found" });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`API server is running at http://localhost:${port}`);
});
