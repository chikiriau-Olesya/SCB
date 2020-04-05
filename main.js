const btn = document.querySelector('body')
btn.onclick = () => {
    let div = document.createElement('div')
    div.classList.toggle('gravity')
    div.style.width = '200px'
    div.style.height = '200px'
    div.style.backgroundColor = 'red'
    div.style.zIndex = 4
    document.body.append(div)
}
