const btnHamburger = document.querySelector('#btnHumberger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');


header.addEventListener('click', function(){
    console.log('click Humberger');

    if (header.classList.contains('open')) {
        body.classList.remove('dontScroll');
        header.classList.remove('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
    }
    else {
        body.classList.add('dontScroll');
        header.classList.add('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })

    }
})