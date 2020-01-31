const util = require("util");

const del = require("del");

const dir = {
  input: "src",
  output: "_site"
};

del.sync(dir.output);

module.exports = eleventyConfig => {
  eleventyConfig.addCollection("categories", collection => {
    return [
      { title: "one" },
      { title: "two" },
      { title: "three" },
      { title: "four" },
      { title: "five" },
      { title: "six" },
      { title: "seven" },
      { title: "eight", author: "David" },
      { title: "nine" },
      { title: "ten" },
      { title: "eleven" },
      { title: "twelve" },
      { title: "thirteen" }
    ];
  });

  // eleventyConfig.addFilter("array", value => value.split(","));

  eleventyConfig.addFilter("add5", (value, kwargs = {}) => {
    return value + Number(kwargs.foo || 5) + Number(kwargs.bar || 10);
  });

  eleventyConfig.addFilter("readingTime", (wordcount, wordsPerMinute=200) => wordcount / wordsPerMinute);

  eleventyConfig.setDataDeepMerge(true);

  return { dir };
};
