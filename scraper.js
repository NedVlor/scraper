const cheerio = require("cheerio");
const axios = require("axios");

async function run() {
  const response = await axios("https://dev.to/");
  const $ = cheerio.load(response.data);
  // console.log($(".substories").find("a").text());
  $(".crayons-story__title a").each(function (i, elem) {
    //console.log("text", i, $(this).find(".crayons-story__title a").text());
    console.log("text", i, $(this).text());
    console.log("text", i, $(this).attr("href"));
    /*console.log(
      "href",
      i,
      $(this).find(".crayons-story__title a").attr("href"),
    );*/
  });
}
run();

//crayons-story :
//cr$('h2.title').find('.subtitle').text();////a
