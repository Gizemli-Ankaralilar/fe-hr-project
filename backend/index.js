const express = require('express');
const app = express();
const port = 9090;
const cors = require('cors');
const fs = require('fs');

app.use(express.json());

const authData = require('./db.json');

const admins = authData.admins;
const companies = authData.companies;
const guests = authData.guests;

app.use(cors());

app.get('/admins', (req, res) => {
  res.json(admins);
});

app.get('/companies', (req, res) => {
  res.json(companies);
});

app.get('/guests', (req, res) => {
  res.json(guests);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = authData.login.find((user) => user.username === username && user.password === password);
  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı' });
  }
});

app.post('/register-company', (req, res) => {
  const newCompany = req.body;
  authData.companies.push(newCompany);

  const newUserForLogin = {
    username: newCompany.username,
    password: newCompany.password,
  };
  authData.login.push(newUserForLogin);

  fs.writeFileSync('./db.json', JSON.stringify(authData, null, 2), 'utf-8', (err) => {
    if (err) {
      console.error('db.json dosyası güncellenirken bir hata oluştu:', err);
      res.status(500).json({ error: 'Bir hata oluştu' });
    } else {
      res.json(newCompany);
    }
  });
});



app.post('/register-guest', (req, res) => {
  const newGuest = req.body;
  authData.guests.push(newGuest);

  const newUserForLogin = {
    username: newGuest.username,
    password: newGuest.password,
  };

  authData.login.push(newUserForLogin);


  fs.writeFileSync('./db.json', JSON.stringify(authData, null, 2), 'utf-8', (err) => {
    if (err) {
      console.error('db.json dosyası güncellenirken bir hata oluştu:', err);
      res.status(500).json({ error: 'Bir hata oluştu' });
    }
  });
  res.json(newGuest);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
