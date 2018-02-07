import mongoose from 'mongoose';

let blogsSchema = new mongoose.Schema({
    title: String,
    article: String,
    url: String
  });

export default mongoose.model('Blogs', blogsSchema);