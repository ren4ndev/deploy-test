require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser').json();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser);

app.get('/', (req, res) => {
  res.status(200).send('Procfile existe mesmo!! Shouldn\'t matter but it does');
})

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
