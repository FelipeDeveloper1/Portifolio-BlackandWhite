const list = document.querySelectorAll('#nav-list')
list.forEach((value, index) => {
    value.addEventListener('click', () => {
        list.forEach((value) => {
            value.classList.remove('nav-active')
        })
        list[index].classList.add('nav-active')
    })
})