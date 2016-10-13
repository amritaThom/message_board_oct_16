var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');


module.exports = (function(){
  return {
    create: function(req, res){
      console.log(req.body);
      console.log(req.params);
      var comment_data = {name: req.body.name, comment: req.body.comment, post: req.params.id};
      var new_comment = new Comment(comment_data);
      Post.findOne({_id: req.params.id}, function(err, post){
        console.log(post);
        post.comments.push(new_comment);
        post.save(function(err, results){
          new_comment.save(function(err, comment_results){
            res.redirect('/');
          })
        })
      })
    }
  }
})()
