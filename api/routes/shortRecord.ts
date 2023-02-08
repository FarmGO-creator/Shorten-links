import express from "express";

const shortRecordRouters = express.Router();

shortRecordRouters.get('/:shortUrl', (req, res) => {
  res.send('Сссылка')
});

shortRecordRouters.get('/links', (req, res) => {
  res.send('Сссылка')
});

export default shortRecordRouters;