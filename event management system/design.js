document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function fadeInSection(section, delay) {
        setTimeout(function () {
            section.style.display = "block";
            section.classList.add("fade-in");
        }, delay);
    }

    let delay = 0;
    sections.forEach(function (section) {
        fadeInSection(section, delay);
        delay += 500; // Adjust delay as needed
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Adjust as needed
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("text-animation");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    var targets = document.querySelectorAll(".text-animation");
    targets.forEach(function(target) {
        observer.observe(target);
    });
});