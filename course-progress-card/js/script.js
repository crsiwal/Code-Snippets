let commonSmallInput = {
    color: "#03A9F4",
    strokeWidth: 6,
    duration: 2000, // milliseconds
    easing: "easeInOut",
}

window.onload = function onLoad() {
	var progressBar = new ProgressBar.Circle("#circle-container", {
		color: "white",
		strokeWidth: 1,
		duration: 2000, // milliseconds
		easing: "easeInOut",
    });
    
    var progressBarSmall1 = new ProgressBar.Circle("#small-container1", commonSmallInput);
    
    var progressBarSmall2 = new ProgressBar.Circle("#small-container2", commonSmallInput);
    
    var progressBarSmall3 = new ProgressBar.Circle("#small-container3", commonSmallInput);

	progressBar.animate(0.8); // percent
	progressBarSmall1.animate(0.52); // percent
	progressBarSmall2.animate(0.8); // percent
	progressBarSmall3.animate(0.45); // percent
};
