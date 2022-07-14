const multer = require('multer');
const moment = require('moment');


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    const date = moment().format('DDMMYYYY-HHmmss_SSS');
    cb(null, `${date}-${file.originalname}`);
  }
});

const fileFilter = (req, fiel, cb) => {
  if(file.mimitype === 'image/png' || file.mimitype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
};

