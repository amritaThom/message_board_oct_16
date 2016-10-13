var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name: String,
  post: String,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

mongoose.model('Post', PostSchema);
