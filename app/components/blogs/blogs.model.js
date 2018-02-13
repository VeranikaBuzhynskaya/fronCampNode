import blogsSchema from '../../data/schema';
import {ObjectId} from 'mongoose'
import logger from "../../utils/logger";

  
export default class BlogsModel {
    constructor() {

    }

    getAll() {
        return blogsSchema.find();
    }

    getById(id) {
        return blogsSchema.findById(id);
    }

    deleteById(id) {
        return blogsSchema.remove({_id:id});
    }

    insert(newBlog) {
        const blogspostModel = new blogsSchema(newBlog);
        return blogspostModel.save();
    }

    update(updateBlog) {
        return blogsSchema.findById(updateBlog._id).then(blogModel => {
            console.log(updateBlog);
            blogModel.title = updateBlog.title;
            blogModel.article = updateBlog.article;
            blogModel.url = updateBlog.url;
            return blogModel.save();
        })
    }
}
