import express from 'express';
import BlogsModel from './blogs.model';

const router = express.Router();
const blogsModel = new BlogsModel();

router.get('/', (req, res) => {
    // res.send(blogsModel.getAll());
    blogsModel.getAll()
    .then(posts => res.send(posts));
});

router.get('/:id', (req, res) => {
    blogsModel.getById(req.params.id)
        .then(post =>  res.send(post) )
        .catch(err => logger.error(err));
    // res.send(blogsModel.getById(+req.params.id));
});

router.delete('/:id', (req, res) => {
    // res.send(blogsModel.deleteById(+req.params.id));
    blogsModel.deleteById(req.params.id)
        .then(() => res.sendStatus(200));
});

router.put('/:id', (req, res) => {
    const updateBlog = {
        id: +req.params.id,
        title: req.body.title,
        article: req.body.article,
        url: req.body.url
    };

    res.send(blogsModel.update(updateBlog));
});

router.post('/', (req, res) => {
    const newBlog = {
        title: req.body.title,
        article: req.body.article,
        url: req.body.url
    };

    res.send(blogsModel.insert(newBlog));
});

export default router;