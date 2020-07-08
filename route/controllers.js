const Category = require('../model/image.js')

exports.createCategory = (req, res) => {
  let image = req.file.path

  const category = new Category({
    image: image
  })

  category.save((err, category) => {
    if(err) {
      return res.status(400).json({
        errors: err.message
      })
    }

    return res.json({
      // message: 'Created category successfully',
      category
    })
  })
}
