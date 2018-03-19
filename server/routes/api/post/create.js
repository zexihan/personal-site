import { Types } from 'mongoose';
import Post from '../../../models/Post';

/* Create a new post
 */

// TODO Validate fields

export default async (req, res) => {
  console.info(req.body);
  await Post.create(req.body);
  return res.send({
    success: true,
  });
};
