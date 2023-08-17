const cheerio = require("cheerio");
const axios = require("axios");

async function run() {
  const response = await axios("https://dev.to/");
  const $ = cheerio.load(response.data);
  $(".crayons-story__title a").each(function (i, elem) {
    console.log("text", i, $(this).text());
    console.log("text", i, $(this).attr("href"));
  });
}
run();
