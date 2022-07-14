const tanya = document.querySelector('.tanya')
const john = document.querySelector('.john')
const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')

john.classList. add('hide')

const changeSlide = () =>  {
    if (john.classList.contains('hide')) {
        john.classList.remove('hide')
        tanya.classList.add('hide')
    } else if (tanya.classList.contains('hide')) {
        tanya.classList.remove('hide')
        john.classList.add('hide')
    } else {
        john.classList.add('hide')
    }
}


prev.forEach(item => item.addEventListener('click', changeSlide))
next.forEach(item => item.addEventListener('click', changeSlide))