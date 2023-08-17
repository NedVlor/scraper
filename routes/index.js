var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const arr = [
    {
      title: "text",
      link: "url/juhju",
    },
    {
      title: "text",
      link: "url/juhju",
    },
  ];

  res.render("index", { title: "Express", arr });
});

module.exports = router;
