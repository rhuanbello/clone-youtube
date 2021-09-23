const menu = document.querySelector('header.top .menu')
const asideMain = document.querySelector('main .menu')
const asideOpened = document.querySelector('.menu-show')
const bottomA = document.querySelectorAll('.bottom a')

const mainPage = document.querySelector('main')
const videos = document.querySelectorAll('.content .container-video')

const videoDiv = document.querySelector('.video')
const videoOpened = videoDiv.querySelector('iframe')
const videoContent = videoDiv.querySelector('.content-video')

videos.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index == 1) {
            videoOpened.setAttribute('src', 'https://www.youtube.com/embed/HMMAstxpWSs?autoplay=1')
            videoContent.innerHTML = '<h2>Far Cry 6 - Viva la revolución</h2> <p>223.148 visualizações ⦁ Estreou em 6 de set. de 2021</p>'
        } else if (index == 2) {
            videoOpened.setAttribute('src', 'https://www.youtube.com/embed/0oBi8OmjLIg?autoplay=1')
            videoContent.innerHTML = '<h2>My Ultimate Work From Home Desk Setup for Productivity</h2> <p>1.943.795 visualizações ⦁ 25 de out. de 2020</p>'
        } else if (index == 3) {
            videoOpened.setAttribute('src', 'https://www.youtube.com/embed/D80LVouls3I?autoplay=1')
            videoContent.innerHTML = '<h2>Breaking Bad Audition Tape Screen Tests - Jesse, Skyler, Marie, Hank | Breaking Bad Extras Season 1</h2> <p>636.654 visualizações ⦁ 25 de fev. de 2021</p>'
        } else if (index == 4) {
            videoOpened.setAttribute('src', 'https://www.youtube.com/embed/jMWNNSx-mcU?autoplay=1')
            videoContent.innerHTML = '<h2>Por que useCallback faz tanto sentido? | Code/Drops #13</h2> <p>74.308 visualizações ⦁ 10 de jan. de 2020</p>'
        } else if (index == 5) {
            videoOpened.setAttribute('src', 'https://www.youtube.com/embed/jCwhOI30PBY?autoplay=1')
            videoContent.innerHTML = '<h2>Boogarins - "San Lorenzo" (Recorded Live for World Cafe)</h2> <p>24.960 visualizações ⦁ 12 de ago. de 2016</p>'
        } else if (index == 6) {
            videoOpened.setAttribute('src', 'https://www.youtube.com/embed/jtzBhKkUKXs?autoplay=1')
            videoContent.innerHTML = '<h2>O Princípio Que TODO Programador Precisa Conhecer</h2> <p>114.800 visualizações ⦁ 6 de set. de 2021</p>'
        } else if (index == 7) {
            videoOpened.setAttribute('src', 'https://www.youtube.com/embed/fzQZTti4QRI?autoplay=1')
            videoContent.innerHTML = '<h2>EU NÃO QUERO ANALISAR O TRAILER DE MATRIX RESURRECTIONS [O que importa em Matrix 4] // BORGOVERSO</h2> <p>63.700 visualizações ⦁ Transmitido ao vivo em 14 de set. de 2021</p>'
        }

        mainPage.classList.toggle('hide')
        videoOpened.classList.remove('hide')
        videoDiv.classList.remove('hide')

    })

})


menu.addEventListener('click', () => {
    asideMain.classList.toggle('hide');
    asideOpened.classList.toggle('hide');
})