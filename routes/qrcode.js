var express = require('express');
var router = express.Router();
var QRCode = require('qrcode')

var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  rendererOpts: {
    quality: 0.3
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  QRCode.toFile('./public/images/qrcode.png', 'Some text', {
    color: {
      dark: '#00F', // Blue dots
      light: '#0000' // Transparent background
    }
  }, function(err) {
    if (err) throw err
    console.log('done')
  });

  res.render('qrcode', {
    title: 'qrcode router',
    src: './public/images/qrcode.png'
  });
});

module.exports = router;
