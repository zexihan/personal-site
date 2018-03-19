import Post from '../../../models/Post';

/* Returns all posts that have been published.
 */

// TODO Check published state. Return all if admin

export default async (req, res) => {
  const posts = await Post.find();
  return res.send(posts);
};
