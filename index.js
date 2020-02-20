const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { log } = console;

app.use((req, res) => {
  log('REQ', {
    method: req.method,
    originalUrl: req.originalUrl,
    body: req.body,
  });
  res.send('ok');
})

app.listen(port, () => log(`Listening on port ${port}!`))