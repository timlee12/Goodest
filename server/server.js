const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions))

// root
if(process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')))
    
  // app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/main.html')));
};

// routers
const userRouter = require('../src/routes/user');

// routes
app.use('/user', userRouter);

// app.get('*', (req, res) => res.sendFile(path.join(__dirname, './src/main.html')));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`)})


