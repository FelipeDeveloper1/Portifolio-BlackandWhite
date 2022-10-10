const nav = document.querySelector('.nav')
const info = document.querySelector('.info')
const menu = document.querySelector('.menu')




nav.addEventListener('click', () => {
    if (info.classList.contains('active')) {
        info.classList.remove('active')
        document.querySelector('.menu').src = '../images/icon-hamburger.svg'
    } else {
        info.classList.add('active')
        document.querySelector('.menu').src = '../images/icon-close.svg'
    }


})