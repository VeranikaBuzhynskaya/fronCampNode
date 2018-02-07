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
        return blogsSchema.remove({id:id});
    }

    insert(newBlog) {
        const blogspostModel = new blogsSchema(newBlog);
        return blogspostModel.save();
    }

    update(updateBlog) {
        return blogsSchema.findById(updateBlog.id).then(blogModel => {
            console.log(updateBlog);
            blogsSchema.title = updateBlog.title;
            blogsSchema.article = updateBlog.description;
            blogsSchema.url = updateBlog.url;
            return blogsSchema.save();
        })
    }
}
