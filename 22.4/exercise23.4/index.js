const express = require('express');
const bodyParser = require('body-parser');

const handlePing = require('./middlewares/ping');
const handleHello = require('./middlewares/hello');
const handleGreetings = require('./middlewares/greetings');
const handleNameAge = require('./middlewares/nameAge');
const handleAllSimp = require('./middlewares/allSimpsons');
const handleSimpsonsId = require('./middlewares/simpsonWithId');
const handleNewSimpson = require('./middlewares/addNewSimpson');

const app = express();
app.use(bodyParser.json());

app.get('/ping', handlePing);

app.post('/hello', handleHello);

app.post('/greetings', handleGreetings);

app.put('/users/:name/:age', handleNameAge);

app.get('/simpsons', handleAllSimp);

app.get('/simpsons/:id', handleSimpsonsId);

app.post('/simpsons', handleNewSimpson);

app.listen(3001, () => {
  console.log('Tudo certo por aqui.');
});
