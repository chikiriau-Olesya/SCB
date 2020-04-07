
// const numberOfNew = 10

//     if (numberOfNew < 11) {
//         let div = document.createElement('div')
//         div.style.width = '200px'
//         div.style.height = '200px'
//         div.style.position = 'absolute'
//         div.style.top = 0
//         div.style.zIndex = 3
//         div.style.left = '45%'
//         div.style.backgroundColor = 'blue'
    
//         let animeDiv = anime({
//             targets: div,
//             translateY: 300,
//             delay: 60,
//             duration: 4000,
//             easing: 'linear'
    
//         })
    
//         div.classList.toggle('gravity') 
//         document.body.append(div)
//     }

const btn = document.querySelector('body')
btn.onlick = function () {
    let div = document.querySelectorAll('hidden')
    for (let i = 0; i < div.length; i++) {
        const element = div[i];
        element.style.top = '0'
        element.style.visibility = 'visible'
        
    }
   
}


