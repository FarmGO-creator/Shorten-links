import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import shortRecordRouters from "./routes/shortRecord";
import categoriesRouter from "./routes/categories";

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json());
app.use('/', shortRecordRouters);
app.use('/links', shortRecordRouters);

app.use('/categories', categoriesRouter);


const run = async () => {
  mongoose.set('strictQuery', false);
  await mongoose.connect('mongodb://localhost/short_record');

  app.listen(port, () => {
    console.log('Server: ', port)
  });

  process.on('exit', () => {
    mongoose.disconnect();
  });
}

run().catch(console.error);