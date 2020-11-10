$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 700,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('autoplay.play.owl', [4000])
})
$('.stop').on('click', function () {
    owl.trigger('autoplay.stop.owl')
})
let number = document.querySelector('#quantity');
let result = document.querySelector('.configuration-price span');
let price = document.querySelector('#quantity').getAttribute('data-price');
let label = document.querySelectorAll('.btn-default-rabs');

function totalPrice() {
    for (let i = 0; i < label.length; i++) {
        label[i].onclick = function () {
            result.innerHTML = this.getAttribute('data-volume') * (price * number.value);
        }
        number.onchange = function () {
            result.innerHTML = price * this.value;
        }
    }
}
totalPrice();