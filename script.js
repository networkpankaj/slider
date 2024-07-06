let slideIndex = 1;
showSlides(slideIndex);

const left = document.querySelector(".prev");
const right = document.querySelector(".next");

left.addEventListener("click", () => {
    plusSlides(-1);
});
right.addEventListener("click", () => {
    plusSlides(1);
});

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length - 2) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length - 3; 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = slideIndex-1 ; i < slideIndex + 2; i++) { 
        if (slides[i]) {
            slides[i].style.display = "block";
        }
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
