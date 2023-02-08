import express from "express";
import shortRecord from "../models/ShortRecord";
import {LinkWithoutId} from "../types";
import random from "../random";
import ShortRecord from "../models/ShortRecord";

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

shortRecordRouters.post('/', async (req, res) => {
  try {
    const newLink:LinkWithoutId = {
      originalUrl: req.body.originalUrl,
      shortUrl: random(7),
    }

    const result = new ShortRecord(newLink);

    try {
      await result.save();
      return res.send(result);
    }catch (e) {
      return res.status(400).send(e);
    }

  }catch (e) {
    return res.sendStatus(500)
  }
});

export default shortRecordRouters;