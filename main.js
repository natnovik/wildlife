(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageXOffset > 50) {
            header.classList.add('header_active');
        } else{
            header.classList.remove('header_active');
        }
    };
}());