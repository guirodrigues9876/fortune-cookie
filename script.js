
const img = document.querySelector('img') 
const button = document.querySelector('button')

function buttonClick(){
    handleClick()
}

img.addEventListener('click', handleClick)

function handleClick (e){
    const screen2 = document.querySelector("div.screen2")
    const screen1 = document.querySelector("div.screen1")

    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}