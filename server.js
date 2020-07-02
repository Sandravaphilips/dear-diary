const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 5000;

const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');
const { validateBody, validateEmail, validateUser, restricted } = require('./helpers/middleware');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if(req.method === 'OPTIONS'){
      res.headers('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
      return res.status(200).json({})
  }
  next()
})

server.use('/api/auth', validateBody, validateEmail, validateUser, authRouter);
server.use('/api', restricted, userRouter);

server.get('/', (req, res) => {
  res.send('Hello from Dear Diary');
});

server.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);