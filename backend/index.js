const express = require('express')
const data = require('./data')
const app = express()
const port = 5000
const cors = require("cors")
app.use(cors({origin: "http://localhost:3000"}))

//token & request body
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
app.use(express.json());

//encription
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const JWT_SECRET = process.env.JWT_SECRET;

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

//TODO Write this function with const
function creatUser(username, password) {
  this.username = username;
  this.password = password;
}

function findUser(username){
  for (let i = 0; i < data.users.length; i++){
    if (data.users[i].username == username)
      return data.users[i]
  }
  return false
}

app.post('/register/', async (req, res) =>{
  const {username, password} = req.body;
  const hashedPw = await bcrypt.hash(password, 10);
  data.users.push(new creatUser(username, hashedPw))
  res.status(201).send(data.users);
})

app.post('/user/login', async (req, res) => {
  const username = req.body.username
  const foundUser = findUser(username)
  if(!foundUser){
    res.status(401).send('User not found');
    return
  }

  const isMatch = await bcrypt.compare(req.body.password, foundUser.password);
  if(isMatch) {
    const token = jwt.sign({id: foundUser.id}, JWT_SECRET);
    res.status(200).send({
      message: `successfully logged in user ${foundUser.username}`,
      token: token});
  } else 
    res.status(401).send('Incorrect password');
})




app.get('/', (req, res) => {
  res.send("Final Elective Project: Hi Mom, look it's express!")
})

app.get('/ring', setUser,(req, res) => {
  res.send(data.rings)
})

app.get('/users', (req, res) => {
  res.send(data.users)
})

app.listen(port, () => {
  console.log(`Final Elective Project is running on port ${port}.`)
})