var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('%s request -> %s', req.baseUrl, JSON.stringify(req.query));

  let _name = "";
  if (req.query.guest !== undefined) {
    _name = req.query.guest;
  }

  let _voice = `欢迎${_name}光临茶室`;
  res.json({
    code: 1,
    msg: "请求成功",
    voice: _voice,
    door: 1,
    air: 1,
    socket: 1,
    lamp: 1
  });
});

module.exports = router;
