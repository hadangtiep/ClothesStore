let slideIndex = 0;
headerSlidesShow();
function headerSlidesShow() {
    let i;
    let slides = document.getElementsByClassName("header__slides");
    let dots = document.querySelectorAll(".header-dot__item");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(headerSlidesShow, 5000);
}

function prevEvaluation(param) {
    let sliderElm = param.parentElement.parentElement.children[0];
    let slidesElm = sliderElm.getElementsByClassName("evaluation__slides");
    sliderElm.append(slidesElm[0]);
}

function nextEvaluation(param) {
    let sliderElm = param.parentElement.parentElement.children[0];
    let slidesElm = sliderElm.getElementsByClassName("evaluation__slides");
    sliderElm.prepend(slidesElm[slidesElm.length - 1]);
}
