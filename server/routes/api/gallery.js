import fs from 'fs';
import path from 'path';

export default (req, res) => {

  const parent = path.join(__dirname, '../../../public/images/gallery');
  const folders = fs.readdirSync(parent);
  if (folders.includes(req.params.id)) {
    const folder = path.join(parent,req.params.id);
    const files = fs.readdirSync(folder)
      .filter(file => file.includes('.jpg') || file.includes('.png'))
      .map(file => `/images/gallery/${req.params.id}/${file}`);
    res.json({
      success: true,
      images: files,
    });
  } else {
    res.json({
      success: false,
      error: 'id does not exist',
    })
  }

};
