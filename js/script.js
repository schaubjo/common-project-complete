document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.getElementById('scrollButton');

    // Click event listener to the button
    scrollButton.addEventListener('click', function () {
        continueScrolling = true;
        scrollToBottom();
    });

    // stop autoscrolling on click
    document.addEventListener('click', stopScrolling);
});

var continueScrolling = true;

function scrollToBottom() {
    var startTime;

    // autoscroll for one minute
    var duration = 60000;

    function animateScroll(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        var progress = timestamp - startTime;

        var easing = function (t) { return t; };

        var scrollTo = progress < duration ? easing(progress / duration) * (document.body.scrollHeight - window.innerHeight) : document.body.scrollHeight;

        window.scrollTo(0, scrollTo);

        // Continue scrolling if not at the bottom and continueScrolling is true
        if (progress < duration && continueScrolling) {
            window.requestAnimationFrame(animateScroll);
        }
    }

    // Start the animation
    window.requestAnimationFrame(animateScroll);
}

function stopScrolling(event) {
    // Check if the click event is not on the scrollButton
    if (!event.target.closest('#scrollButton')) {
        // Set the flag to stop the scrolling animation
        continueScrolling = false;
    }
}


const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });