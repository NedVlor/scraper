var express = require("express");
var router = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");
const arr2 = [];
async function run() {
  const response = await axios("https://dev.to/");
  const $ = cheerio.load(response.data);
  $(".crayons-story__title a").each(function (i, elem) {
    console.log("text", i, $(this).text());
    console.log("text", i, $(this).attr("href"));
    arr2.push({ title: $(this).text(), link: $(this).attr("href") });
  });
}
run();

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

  res.render("index", { title: "Express", arr2 });
});

module.exports = router;
