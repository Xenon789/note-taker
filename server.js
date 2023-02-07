const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/htmlRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// host public folder
server.use(express.static('public'));

// routes app to apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});