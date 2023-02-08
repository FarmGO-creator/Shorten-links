import mongoose from "mongoose";

const Schema = mongoose.Schema;

const shortRecordSchema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortUrl: String,
});

const shortRecord = mongoose.model('records', shortRecordSchema);

export default shortRecord;