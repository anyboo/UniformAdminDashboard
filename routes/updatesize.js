var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('%s request -> %s', req.baseUrl, JSON.stringify(req.query));
  res.json({
    code: 1,
    msg: "请求成功",
    versoin: 1,
    size: 1024,
    check: 50,
    size: "1024",
    data: "hfuegifegefbheyu------"
  })
});

module.exports = router;
