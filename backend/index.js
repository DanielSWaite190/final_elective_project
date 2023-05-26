const express = require('express')
const data = require('./data')
const app = express()
const port = 5000
const cors = require("cors")
app.use(cors({origin: "http://localhost:3000"}))
// const bcrypt = require('bcrypt');

const setUser = async (req, res, next) => {
  if(!req.header('Authorization'))
    next()
  else {
    const token = req.header('Authorization').split(" ")[1]
    const user = jwt.verify(token, JWT_SECRET);
    req.user = user
    next();
  }
}

app.post('/register/', async (req, res) =>{
  const {username, password} = req.body;
  const hashedPw = await bcrypt.hash(password, 10);
  const user = await User.create({username, password: hashedPw});
  res.status(201).send(user);
})







app.get('/', (req, res) => {
  res.send("Installation 00: Hi Mom, look it's express!")
})

app.get('/ring', (req, res) => {
  res.send(data.rings)
})

app.get('/test', (req, res) => {
  res.send(data.test)
})

app.listen(port, () => {
  console.log(`Installation00 is running on port ${port}.`)
})