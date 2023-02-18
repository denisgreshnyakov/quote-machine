window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const getColor = () => {
    const color =
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();

    document.body.style.backgroundColor = color;
    document.querySelector("#text").style.color = color;
    document.querySelector("#author").style.color = color;
    const buttons = document.querySelectorAll("button");
    buttons.forEach((item) => {
      item.style.background = color;
    });
  };

  const getQuote = async (arr) => {
    const url =
      "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    const res = await $.getJSON(url, (data) => {
      document.querySelector("#text").innerHTML = data.quoteText;
      document.querySelector("#author").innerHTML = data.quoteAuthor;
    });
  };

  const btn = document.querySelector("#new-quote");
  const wrapper = document.querySelector("#quote-box");

  btn.addEventListener("click", () => {
    getQuote();
    getColor();
    wrapper.classList.add("change");
  });

  wrapper.addEventListener("animationend", () => {
    wrapper.classList.remove("change");
  });

  getColor();
  getQuote();
});
