// const btn = document.querySelector('body')
// btn.onclick = () => {
//     let div = document.createElement('div')
//     div.classList.toggle('gravity')
//     div.style.width = '200px'
//     div.style.height = '200px'
//     div.style.backgroundColor = 'red'
//     div.style.zIndex = 4
//     document.body.append(div)
// }


// const btn = document.querySelector('body')

// btn.onclick = () => {
//     const numberOfNew = 10

//     if (numberOfNew < 11) {
//         let div = document.createElement('div')
    
//         let animeDiv = anime({
//             targets: div,
//             translateY: 500,
//             delay: 3,
//             duration: 200,
//             easing: 'linear'
    
//         })
    
//         div.style.width = '200px'
//         div.style.height = '200px'
//         div.style.backgroundColor = 'blue'
//         div.classList.toggle('gravity') 
//     }
//  }

const numberOfNew = 10

    if (numberOfNew < 11) {
        let div = document.createElement('div')
        div.style.width = '200px'
        div.style.height = '200px'
        div.style.position = 'absolute'
        div.style.top = 0
        div.style.zIndex = 3
        div.style.left = '45%'
        div.style.backgroundColor = 'blue'
    
        let animeDiv = anime({
            targets: div,
            translateY: 300,
            delay: 60,
            duration: 4000,
            easing: 'linear'
    
        })
    
        div.classList.toggle('gravity') 
        document.body.append(div)
    }


