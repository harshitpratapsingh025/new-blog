import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello from my blog</h1>');
});

app.listen(port, () => console.log(`Servet started running on port:${port}`));
