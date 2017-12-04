const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) =>
  path.extname(req.path).length > 0 ? res.status(404).send('Not found') : next());
app.use('*', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html')));
app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error.'));

app.listen(3500, () => console.log('listening on 3500'));
