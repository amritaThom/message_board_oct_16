var mongoose = require('mongoose');
var posts = require('../controllers/posts.js');
var comments = require('../controllers/comments.js');
console.log(comments);

module.exports = function(app){

  app.get('/', function(req, res){
    posts.index(req, res);
  });

  app.post('/comments/:id', function(req, res){
    comments.create(req, res);
  })

  app.post('/posts', function(req, res){
    posts.create(req, res);
  });


}
