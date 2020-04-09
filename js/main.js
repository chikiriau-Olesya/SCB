// Change drag and drop cursor
function changeCursor (el) {
    el.onmousedown = function (e) {
        el.style.cursor = 'grabbing'
     }
    el.onmouseup = function (e) {
        el.style.cursor = 'grab'
     }
}

let metal= document.querySelector('.metal')
changeCursor(metal)

let can= document.querySelector('.can')
changeCursor(can)

let paper= document.querySelector('.paper')
changeCursor(paper)

let smallPaper= document.querySelector('.small-paper')
changeCursor(smallPaper)

let banana= document.querySelector('.banana')
changeCursor(banana)


let animation = anime ({
 targets: '.new10',
 autoplay: true,
 translateX: ['26vw', '26vw'],
 translateY: ['-150vw', '20vw'],
 direction: 'linear',
 duration: 3000
})










