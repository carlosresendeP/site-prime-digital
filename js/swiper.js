let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    //tamamho do swiper
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,

        },
    }
});


// // Add event listener to update swiper on window resize
// window.addEventListener('resize', () => {
//     swiper.update();
// });

// //desativar o swiper quando a tela for menor que 992px
// const cardsSwiper = document.querySelector('.service-cards');
// window.addEventListener('resize', () => {
//     if (window.innerWidth < 992) {
//         swiper.disable();
//         cardsSwiper.classList.remove('swiper-wrapper');
//     } else {
//         swiper.enable();
//         cardsSwiper.classList.add('swiper-wrapper');
//     }

//     swiper.update();

//     console.log(cardsSwiper)
// });