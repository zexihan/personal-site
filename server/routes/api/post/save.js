import { Types } from 'mongoose';
import Post from '../../../models/Post';

/* Returns all posts that have been published.
 */

// TODO Check published state. Return all if admin

 export default async (req, res) => {

    console.info(req.body);

    const post = await Post.findOne({ _id: req.body._id });
    console.info('post', post);
    if (post) {
      await post.update(req.body);
    } else {
      await Post.create(req.body);
    }

    return res.send({
      success: true,
    })
};
