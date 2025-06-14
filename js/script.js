//header fixe and scroll to top


const header = document.querySelector(".navbar");
const scrollToTopButton = document.querySelector(".scrollToTopButton");


window.addEventListener('scroll', () => {


    if (document.body.scrollTop > 50) {
        header.classList.add('navbar-fixed-top');
        scrollToTopButton.style.display = "block";

    } else {
        header.classList.remove('navbar-fixed-top');
        scrollToTopButton.style.display = "none";
    }

});



