import express from 'express';
import blogsRouter from './components/blogs/blogs.router';
import logger from './utils/logger';
import path from 'path';
import initSchema from './data/initSchema'

initSchema();

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.get('/', function (req, res) {
//   res.render('welcomePage', { title: 'Hey', message: 'Hello there!' })
// });

app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
  logger.info(`Route ${req.url}`);
  next();
});

app.use('/blogs', blogsRouter);

app.use((err, req, res, next) => {
  logger.error(err);
  res.sendStatus(500);
  next();
});

app.use((req, res) => {
  logger.warn(`Route ${req.url} is not to defined!`);
  res.render('welcomePage', { title: 'Hey', message: 'Hello there!' })
});

app.listen(port, function () {
  logger.info(`App listening on port ${port}!`)
});
