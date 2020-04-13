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

let btn = document.querySelector('.logo')

let one = anime.timeline ({
 easing: 'easeInOutCubic',
 direction: 'linear',
 duration: 500,
 autoplay: false
})

one
.add ({
    targets: '.new',
    duration: 10,
    opacity:  1,
})
.add ({
    targets: '.new26',

    translateY: ['-150vw',0],
})
.add ({
    targets: '.new25',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new24',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new23',
    duration: 100,
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new22',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new21',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new20',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new19-1',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new19',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new18',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new17',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new16',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new15-1',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new15',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new14',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new13',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new12',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new11',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new10',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new9',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new8',
    translateY: ['-150vw',0],
    scale: 0.7,
    rotate: 84,
})
.add ({
    targets: '.new7',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new6',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new5',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new4',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new3',
    translateY: ['-150vw',0],
})
.add ({
    targets: '.new2',
    translateY: ['-150vw',0],
    scale: 1.5,
})
.add ({
    targets: '.new1',
    translateY: ['-150vw',0],
})

btn.onclick = one.play

















