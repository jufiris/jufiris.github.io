(function () {
  var words = [
      "loslaten",
      "ontdekken",
      "expressie",
      "zelfvertrouwen",
      "impulsief",
      "luisteren",
      "bewustworden",
      "vakoverschreidend",
      "elkaar leren kennen",
      "leuk",
    ],
    i = 0;
  setInterval(function () {
    $("#changingword").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 2500);
})();
