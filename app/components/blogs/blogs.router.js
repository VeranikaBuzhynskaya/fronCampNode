import express from 'express';
import BlogsModel from './blogs.model';

const router = express.Router();
const blogsModel = new BlogsModel();

router.get('/', (req, res) => {
    res.send(blogsModel.getAll());
});

router.get('/:id', (req, res) => {
    res.send(blogsModel.getById(+req.params.id));
});

router.delete('/:id', (req, res) => {
    res.send(blogsModel.deleteById(+req.params.id));
});

router.put('/:id', (req, res) => {
    const updatedBlog = {
        id: +req.params.id,
        title: req.body.title,
        article: req.body.article,
        url: req.body.url
    };

    res.send(blogsModel.update(updatedBlog));
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