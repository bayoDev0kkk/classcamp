const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});



let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click',function (){
offset = offset + 251; //offset += 251;
    if (offset > 1004) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click',function (){
    offset = offset - 251; //offset -= 251;
    if (offset < 0) {
        offset = 1004;
    }
    sliderLine.style.left = -offset + 'px';
});