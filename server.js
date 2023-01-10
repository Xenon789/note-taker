const express = require('express');

const PORT = process.env.PORT || 3001;
const server = express();
const apiRoutes = require('./routes/htmlRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//parse URL encoded & JSON
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//host public folder
server.use(express.static('public'));

//use apiRoutes
server.use('/api', apiRoutes);
server.use('/', htmlRoutes);

server.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});