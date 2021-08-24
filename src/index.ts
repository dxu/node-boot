import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res): void => {
  res.send("Hello Typescript with Node.js!");
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
