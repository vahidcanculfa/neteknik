document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const stickyPoint = header.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset > stickyPoint) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    // Scroll (kaydırma) olayını dinle
    window.onscroll = function() {
        stickyHeader();
    };
});