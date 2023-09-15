const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const veritabanı = [];

// userları çekme
app.get('/', (req, res) => {
  res.send(veritabanı);
});

let count = 0;

// user oluşturma
app.post('/', (req, res) => {
  const body = req.body;

  body.id = count;
  veritabanı.push(body);

  count++;

  res.send(body);
});

// userı güncelleme
app.put('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  console.log('******** ', id);

  const foundUserIndex = veritabanı.findIndex((user) => user.id == id);

  console.log('******** ', body);

  body.id = id;
  veritabanı[foundUserIndex] = body;

  res.send(body);
});
//user silme
app.delete('/:id', (req, res) => {
  const id = req.params.id;
  const foundUserIndex = veritabanı.findIndex((user) => user.id == id);

  veritabanı.splice(1,foundUserIndex);

  
res.send("kayıt silindi")
  
});
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatildi`);
});
