var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var CommentSchema = new Schema({
  name: String,
  comment: String,
  post: {type: Schema.Types.ObjectId, ref: 'Post'}
});


mongoose.model('Comment', CommentSchema);
