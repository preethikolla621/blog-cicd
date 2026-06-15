const express = require('express');
const app = express();
app.use(express.json());

const posts = [
  { id: 1, title: 'First Post', content: 'Hello World' },
  { id: 2, title: 'Second Post', content: 'Learning DevOps' }
];

app.get('/', (req, res) => {
  res.json({ message: 'Blog API is running' });
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

module.exports = app;