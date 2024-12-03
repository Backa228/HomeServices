document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle')
    const menuBody = document.getElementById('menuBody')
    const overlay = document.getElementById('overlay')
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    menuToggle.addEventListener('click', () => {
        menuBody.classList.toggle('active');
        menuToggle.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        menuBody.classList.remove('active');
        menuToggle.classList.remove('open');
        overlay.classList.remove('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 767.98) {
            menuBody.classList.remove('active');
            menuToggle.classList.remove('open');
            overlay.classList.remove('active');
            menuBody.classList.add('no-transition')
        } else {
            menuBody.classList.remove('no-transition')
        }
    })

    window.addEventListener ('scroll', () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if ((scrollTop > lastScrollTop) && (scrollTop > header.offsetHeight)) {
            header.classList.add('hidden');
        } else if (scrollTop < lastScrollTop) {
            header.classList.remove('hidden');
        } 

    lastScrollTop = scrollTop;
});
});

