const img = document.querySelector('img') 
const button = document.querySelector('button')
const phrases = [
                'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
                'Procure acender uma vela em vez de amaldiçoar a escuridão', 
                'Sei perfeitamente como o tempo é precioso. Aproveite o momento.', 
                'A maior de todas as torres começa no solo.', 
                'Não há que ser forte. Há que ser flexível.',
                'Siga os bons e aprenda com eles.', 
                'O bom-senso vale mais do que muito conhecimento.', 
                'O riso é a menor distância entre duas pessoas.',
                'Você é do tamanho do seu sonho.', 
                'Nós somos o que pensamos.',
                'Você sempre será a sua melhor companhia!'
                ]

                
//callback function
function handleClick (e){
    const screen2 = document.querySelector("div.screen2")
    const screen1 = document.querySelector("div.screen1")

    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

img.addEventListener('click', function(){
    document.getElementById("mensage").innerText = phrases[Math.round(Math.random() * 10)]
    handleClick()
})

function buttonClick(){
    handleClick()
}


