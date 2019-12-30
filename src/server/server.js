const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const {
  getMessages,
  addMessage,
  removeMessage,
  updateMessage,
} = require('./Message')

const {
  getUsers,
  addUsers,
  getCurrentUsers,
  removeUsers,
  updateUsers,
} = require('./Users')

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'content-type')
  res.set('Access-Control-Allow-Methods', 'DELETE, PATCH')
  next();
})

//Users
app.get('/api/Users', (req, res) => {
  res.json(getUsers());
});

app.post('/api/User', bodyParser.json(), (req, res) => {
  res.json(getCurrentUsers(req.body));
});

app.post('/api/Users', bodyParser.json(), (req, res) => {
  addUsers(req.body);
  res.json(getUsers());
});

app.delete('/api/Users/:UsersId', (req, res) => {
  removeUsers(req.params.MessageId);

  res.json({ status: 'success' });
});

app.patch('/api/Users/:UsersId', bodyParser.json(), (req, res) => {
  updateUsers(req.params.MessageId, req.body.params);

  res.json({ status: 'success' });
});

//Messages
app.get('/api/Messages', (req, res) => {
  res.json(getMessages());
});

app.post('/api/messages', bodyParser.json(), (req, res) => {
  addMessage(req.body);
  const newMessage = getMessages();
  res.json(addMessage[newMessage.length - 1]);
});

app.delete('/api/Messages/:MessageId', (req, res) => {
  removeMessage(req.params.MessageId);

  res.json({ status: 'success' });
});

app.patch('/api/Messages/:MessageId', bodyParser.json(), (req, res) => {
  updateMessage(req.params.MessageId, req.body.params);

  res.json({ status: 'success' });
});

app.use(express.static('build'))

app.listen(port, () => {
  console.log(`start on ${port}`)
})