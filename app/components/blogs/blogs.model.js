import blogsData from '../../data/articles';
import _ from 'lodash';

export default class BlogsModel {
    getAll() {
        return blogsData;
    }

    getById(id) {
        return _.find(blogsData, {id: id});
    }

    deleteById(id) {
        return _.remove(blogsData, {id: id});
    }

    update(updateBlog) {
        var index = _.findIndex(blogsData, {id: updateBlog.id});
        return index !== -1 ? blogsData.splice(index, 1, updateBlog) : [];
    }

    insert(newBlog) {
        newBlog.id = blogsData.length ? (blogsData[blogsData.length - 1].id + 1) : 0;
        blogsData.push(newBlog);

        return [blogsData[blogsData.length - 1]];
    }   
}