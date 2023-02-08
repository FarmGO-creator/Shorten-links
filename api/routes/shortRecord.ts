import express from "express";
import shortRecord from "../models/ShortRecord";

const shortRecordRouters = express.Router();

shortRecordRouters.get('/:shortUrl', async (req, res) => {
  try {
    const link = await shortRecord.findOne({shortUrl: req.params.shortUrl});

    if (link) {
      const url = link.originalUrl;

      return res.status(301).redirect(url)
    }
  } catch {
    return res.sendStatus(500)
  }
});

shortRecordRouters.get('/links', (req, res) => {
  res.send('Сссылка')
});

export default shortRecordRouters;