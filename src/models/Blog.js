const mongooose = require('mongoose');
const Schema=mongooose.Schema;

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic:String,
    description:String,
    posted_at:Number,
    posted_by:String
    
})

const Blog = mongooose.model('blog', blogSchema);



module.exports = Blog;