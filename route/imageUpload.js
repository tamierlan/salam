const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
  destination: function (req, res, cb) { cb(null, './route/uploads/') },
  filename: function (req, file, cb) {
    cb(null, 'Tommy' + '-' + Date.now()+path.extname(file.originalname))
  }
})

const filerFilter = (req, file, cb) => { cb(null, true) }

let upload = multer({ storage: storage, fileFilter: filerFilter })

module.exports = upload.single('categoryImage')
