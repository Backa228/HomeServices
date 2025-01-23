// import Splide = require('@splidejs/splide/css')

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle')
    const menuBody = document.getElementById('menuBody')
    const overlay = document.getElementById('overlay')
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const body = document.body;

    menuToggle.addEventListener('click', () => {
        menuBody.classList.toggle('active');
        menuToggle.classList.toggle('open');
        overlay.classList.toggle('active');
        body.classList.toggle('body-no-scroll')
    });

    overlay.addEventListener('click', () => {
        menuBody.classList.remove('active');
        menuToggle.classList.remove('open');
        overlay.classList.remove('active');
         body.classList.remove('body-no-scroll')
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 767.98) {
            menuBody.classList.remove('active');
            menuToggle.classList.remove('open');
            overlay.classList.remove('active');
            menuBody.classList.add('no-transition')
            body.classList.remove('body-no-scroll')
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

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.reviews__slider', {
        sliderPerView: 1, 
        spaceBetween: 20, 
        navegation: {
            nextEl: ".reviews__arrow-right", 
            prevEl: ".reviews__arrow-left",
        },
        pagination: {
            el: ".swiper-pagination", 
            clickable: true, 
        }, 
        loop: true,
    })
})


const view = document.querySelector('.insights__more')
const textMore = document.querySelectorAll('.item-info__text-par')
const arrowMore = document.querySelector('.more__image')
const moreTitle = document.querySelector('.more__title')
console.log(view)
console.log(textMore)

view.addEventListener('click', function(){
    textMore.forEach(text => {
        text.classList.toggle('view-more')
    })
    const isExpanded = moreTitle.textContent.trim() === 'View More'
    moreTitle.textContent = isExpanded ? 'View Less' : 'View More'
    
    if(this.textContent.trim() === 'View Less'){
        arrowMore.classList.add('less')
    } else {
        arrowMore.classList.remove('less')
    }
})

const cards = document.querySelectorAll('.item-info__tags')
console.log(cards)

function toggleText(tag){
    if(tag.textContent === '...'){
        tag.textContent = tag.dataset.originalText
    } else {
        tag.textContent = '...'
    }
}

function handleScreenChange(event){
    cards.forEach((card) => {
        const tags = card.querySelectorAll('.tag')
        if(tags.length === 0) return
        const lastTag = tags[tags.length - 1]

        if(!lastTag.dataset.originalText){
            lastTag.dataset.originalText = lastTag.textContent
        }

        if (event.matches){
            lastTag.textContent = '...'
            lastTag.style.cursor = 'pointer'
            lastTag.addEventListener('click', () => toggleText(lastTag))
        } else {
            lastTag.textContent = lastTag.dataset.originalText
            lastTag.style.cursor = 'default'
            lastTag.replaceWith(lastTag.cloneNode(true))
        }
    })
}

//створили(ініціалізували) медіазапит
const mediaQuery = window.matchMedia('(max-width: 415px)')

//перевірка на медізапит при завантиженні сторінки
handleScreenChange(mediaQuery)

//перевірка на медізапит при зміні розміру вікна
mediaQuery.addEventListener('change', handleScreenChange)

const splide = new Splide('.splide', {
    perPage: 1,
    pagination: false,
}).mount();

const paginationContainer = document.querySelector('.splide-pagination');

if (paginationContainer) {
  const slideCount = splide.length;

  for (let i = 0; i < slideCount; i++) {
    const button = document.createElement('button');
    button.classList.add('splide-pagination__button');
    button.setAttribute('data-slide', i);

    button.addEventListener('click', () => {
      splide.go(i);
    });

    paginationContainer.appendChild(button);
  }

  splide.on('move', (index) => {
    const buttons = document.querySelectorAll('.splide-pagination__button');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('is-active', i === index); 
    });
  });

  paginationContainer.querySelector('.splide-pagination__button').classList.add('is-active');
}

const slides = document.querySelectorAll('.splide__slide');

slides.forEach(slide => {
    const inputs = slide.querySelectorAll('.star-input');

    inputs.forEach((input, index) => {
        input.addEventListener('change', () => {
            inputs.forEach((inp, idx) => {
                inp.checked = idx <= index
        })
    })
})
});

const spoillers = document.querySelectorAll('.spoiller')

spoillers.forEach(spoiller => {
    spoiller.addEventListener('click', () => {
        spoiller.classList.toggle("open")

        const title = spoiller.querySelector('.spoiller__title')
        title.classList.toggle('active')

        const content = spoiller.querySelector('.spoiller__text')
        content.classList.toggle('active')
    })
})

// .parentElement - пошук батьківського елемента
// .nextSiplingElement - пошук наступного елемента на одному рівні вкладеності ('брата/сестри')

const talkImage = document.querySelector('.talk__image img')
console.log(talkImage)
function updateImageSource() {
    if (window.matchMedia('(max-width: 991.98px)').matches) {
        talkImage.src = 'source/images/Image 7.png'
    } else {
        talkImage.src = 'source/images/Image 6.png'
    }
}

updateImageSource()
window.addEventListener('resize', updateImageSource)