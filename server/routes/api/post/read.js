import { Types } from 'mongoose';
import Post from '../../../models/Post';

/* Returns a post by id.
 */

// TODO Check published state. Return unplublished if admin

 export default async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    return res.send({
      success: post !== undefined,
      post: post,
    })
};
