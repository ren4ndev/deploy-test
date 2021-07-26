const express = require('express');
const bodyParser = require('body-parser').json();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Hellow world';
const app = express();

app.use(bodyParser);

app.get('/', (req, res) => {
  res.status(200).send(MESSAGE);
})

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
