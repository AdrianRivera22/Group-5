var slideIndex = 1;
showSlidesManual(slideIndex); 

function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

function currentSlide(n) {
    showSlidesManual(slideIndex = n);
}

function showSlidesManual(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var autoSlideIndex = 0;
showSlidesAuto(); 

function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot"); 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) { autoSlideIndex = 1 }
    slides[autoSlideIndex - 1].style.display = "block";
    dots[autoSlideIndex - 1].className += " active";
    setTimeout(showSlidesAuto, 15000); 
}