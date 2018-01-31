import { Types } from 'mongoose';
import Post from '../../../models/Post';

/* Returns all posts that have been published.
 */

// TODO Check published state. Return all if admin
// TODO validate fields

 export default async (req, res) => {

   const post = await Post.findOne({ _id: req.params.id });
   if (post) {
     await post.update(req.body);
   }
   return res.send({
     success: post !== undefined,
     post: post,
   });
};
