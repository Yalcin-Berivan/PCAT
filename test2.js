const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const veritabanı = [];

//KULLANICILARI ÇEKME / GET
app.get('/', (req, res) => {
  res.send(veritabanı);
});

let berivan = 0;

//KULLANICILARI OLUŞTURMA / POST
app.post('/', (req, res) => {
  const body = req.body;
  body.id = berivan;
  veritabanı.push = body;
  berivan++;
  res.send(body);
});

//KULLANICIYI GÜNCELLEME / PUT
app.put('/', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(id);
  const foundUserIndex = veritabanı.findIndex((user) => user.id == id);
  console.log(body);
  body.id = id;
  veritabanı[foundUserIndex] = body;
  res.send(body);
});

// KULLANICIYI SİLME
app.delete('/', (req, res) => {
  const id = req.params.id;
  const foundUserIndex = veritabanı.findIndex((user) => user.id == id);
  veritabanı.splice(1, foundUserIndex);
  res.send('kayıt silindi');
});
const port = 1000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatildi`);
});
