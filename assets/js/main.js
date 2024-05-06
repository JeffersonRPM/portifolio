window.onload = function () {
    window.scrollTo(0, 0);
};

var timeouts = [];
var isScrolling = false;

function scrollToSection(id, timeout) {
    timeouts.push(setTimeout(function () {
        isScrolling = true;
        var targetAnchor = document.getElementById(id);
        targetAnchor.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function () {
            isScrolling = false;
        }, 1000);
    }, timeout));
}

if (window.innerWidth < 992) {
    scrollToSection("section2", 5000);
    scrollToSection("section3", 7500);
    scrollToSection("section4", 10000);
    scrollToSection("section5", 12500);
    scrollToSection("section1", 15000);
} else {
    scrollToSection("section2", 5000);
    scrollToSection("section4", 10000);
    scrollToSection("section1", 15000);
}

window.addEventListener('scroll', function () {
    if (!isScrolling) {
        for (var i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }
    }
});

function updateDivClass() {
    const div = document.getElementById('img-home');
    const h1Intro1 = document.querySelector('.h1-intro-1');
    const h1Intro2 = document.querySelector('.h1-intro-2');
    const h2 = document.getElementById('h2-intro');
    const git = document.getElementById('git-logo');

    if (window.innerWidth > 1199) {
        div.classList.remove('justify-content-center');
        div.classList.add('justify-content-end');

        h1Intro1.classList.remove('text-center');
        h1Intro1.classList.add('margin-h1');

        h1Intro2.classList.remove('text-center');
        h1Intro2.classList.add('margin-h1');

        h2.classList.remove('text-center');
        h2.classList.add('margin-h2');

        git.classList.add('ajuste-logo');

    } else {
        div.classList.remove('justify-content-end');
        div.classList.add('justify-content-center');

        h1Intro1.classList.remove('margin-h1');
        h1Intro1.classList.add('text-center');

        h1Intro2.classList.remove('margin-h1');
        h1Intro2.classList.add('text-center');

        h2.classList.remove('margin-h2');
        h2.classList.add('text-center');

        git.classList.remove('ajuste-logo');
    }
}

window.addEventListener('load', updateDivClass);

window.addEventListener('resize', updateDivClass);

