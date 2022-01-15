const express = require('express');
const bodyParser = require('body-parser');

const handlePing = require('./middlewares/ping');
const handleHello = require('./middlewares/hello');
const handleGreetings = require('./middlewares/greetings');
const handleNameAge = require('./middlewares/nameAge');

const app = express();
app.use(bodyParser.json());

app.get('/ping', handlePing);

app.post('/hello', handleHello);

app.post('/greetings', handleGreetings);

app.put('/users/:name/:age', handleNameAge);

app.listen(3001, () => {
  console.log('Tudo certo por aqui.');
});
