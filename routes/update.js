var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('%s request -> %s', req.baseUrl, JSON.stringify(req.query));

  res.json({
    code: 1,
    msg: "请求成功",
    version: 1,
    check: 26,
    size: 25600
  })
});

module.exports = router;
