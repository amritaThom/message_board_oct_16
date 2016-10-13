var mongoose = require('mongoose');
var Post = mongoose.model('Post');


module.exports = (function(){
  return {

    index: function(req, res){
      Post.find({}).populate('comments').exec(function(err, posts){
        console.log(posts);
        res.render('index', {posts: posts});
      })
    },

    create: function(req, res){
      var new_post = new Post(req.body);
      console.log(new_post);
      new_post.save(function(err, results){
        if(err){
          console.log(err);
          console.log('somethin broke');
        }else{
          res.redirect('/');
        }
      })
    }

  }

})();
