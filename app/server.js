import express from 'express';
import blogsRouter from './components/blogs/blogs.router';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('welcomePage', { title: 'Hey', message: 'Hello there!' })
});

app.use(express.json());
app.use(express.urlencoded());

app.use('/blogs', blogsRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

export default app;