const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/', express.static(path.resolve(__dirname, '..', 'client', 'dist')));
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});