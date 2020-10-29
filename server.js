const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');
const { validateBody, validateEmail, validateUser, restricted } = require('./helpers/middleware');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', validateBody, validateEmail, validateUser, authRouter);
server.use('/api', restricted, userRouter);

server.get('/', (req, res) => {
  res.send('Hello from Dear Diary');
});

server.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);