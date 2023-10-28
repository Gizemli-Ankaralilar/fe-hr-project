const express = require('express');
const app = express();
const port = 9090;
const cors = require('cors'); // CORS eklentisini ekleyin

app.use(express.json());

// Örnek veriler
const authData = require('./auth.json');

const admins = authData.admins;
const companies = authData.companies;
const guests = authData.guests;

app.use(cors()); // CORS eklentisini kullanın

// Admin verilerini döndüren bir endpoint
app.get('/admins', (req, res) => {
  res.json(admins);
});

// Şirket verilerini döndüren bir endpoint
app.get('/companies', (req, res) => {
  res.json(companies);
});

// Misafir verilerini döndüren bir endpoint
app.get('/guests', (req, res) => {
  res.json(guests);
});

// Kullanıcı adı ve şifresini doğrulayan bir endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Auth.json'dan kullanıcıyı doğrula
  const user = authData.login.find((user) => user.username === username && user.password === password);

  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı' });
  }
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
