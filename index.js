const express = require('express');
const bodyParser = require('body-parser').json();

const PORT = 3000;
const app = express();

app.use(bodyParser);

app.get('/', (req, res) => {
  res.status(200).send('Deu certinnnnn');
})

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
