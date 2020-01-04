const express = require('express');
const carsRouter = require('./cars/cars');

const server = express();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

server.use(express.json());

server.use("/api/cars", carsRouter);

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong!!"
  })
});

server.listen(port, host, () => {
  console.log(`\n Running on http://${host}:${port}\n`)
});