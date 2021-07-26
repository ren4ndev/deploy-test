const express = require('express');
const bodyParser = require('body-parser').json();

const PORT = process.env.PORT || 3000;
const app = express();
const MESSAGE = process.env.MESSAGE;

app.use(bodyParser);

app.get('/', (req, res) => {
  res.status(200).send(MESSAGE);
})

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
