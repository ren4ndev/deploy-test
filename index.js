const express = require('express');
const bodyParser = require('body-parser').json();

const PORT = 3000;
const app = express();

app.use(bodyParser);

app.get('/', (req, res) => {
  res.status(200).json({ messsage: 'Deu certinnn' });
})

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
