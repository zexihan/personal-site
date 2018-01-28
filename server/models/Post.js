import mongoose from 'mongoose';

const { Schema } = mongoose;

const Post = new Schema({
  title: String,
  summary: String,
  body: String,
}, {
  timestamps: true,
});

export default mongoose.model('posts', Post);
