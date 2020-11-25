$(document).ready(function () {});

$(".carousel").carousel({
	interval: false
});

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
			"leuk"
		],
		i = 0;
	setInterval(function () {
		$("#changingword").fadeOut(function () {
			$(this)
				.html(words[i % words.length])
				.fadeIn("slow");
			i++;
		});
	}, 2500);
})();

$(document).ready(function () {
	$(window).on("load scroll resize", function () {
		var docHeight = $(document).height();
		var windowPos = $(window).scrollTop();
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var completion = windowPos / (docHeight - windowHeight);

		if (docHeight <= windowHeight) {
			$("#progress").width(windowWidth);
		} else {
			$("#progress").width(completion * windowWidth);
		}
	});
});
