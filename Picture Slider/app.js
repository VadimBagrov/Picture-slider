const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
//Получили кнопки
const sidebar = document.querySelector('.sidebar')
//Получили левый бар

const container = document.querySelector('.container')

const mainSlide = document.querySelector ('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
//Получили кол-во слайдов

let activeSlideIndex = 0 //Переменная которая следит какой сейчас слайд активен

sidebar.style.top = `-${(slidesCount -1) * 100}vh` //Передвинули цвета так чтобы они совпадали умножив 100 на кол-во слайдов(так как 1 на экране уже его вычли)

upBtn.addEventListener('click', () => {
    changeSlide('up')
}) //Если кликаю вверх то вызываю функцию с параметром up

downBtn.addEventListener('click', () => {
    changeSlide('down')
}) //Если кликаю вниз то вызываю функцию с параметром down

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount -1
        }
    } // В if проверяем чтобы индекс не уходил выше или ниже

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)` //Вычеслили высоту экрана,теперь слайды переключаются ровно

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)` //С помощью вычесления,sidebar переключается ровно
}
