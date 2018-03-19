import { Types } from 'mongoose';
import Post from '../../../models/Post';

/* Returns all posts that have been published.
 */

// TODO only delete if admin
// TODO validate fields

export default async (req, res) => {
  let success = false;
  const post = await Post.findOne({ _id: req.params.id });
  if (post) {
    await post.remove();
    success = true;
  }
  return res.send({
    success,
  });
};
