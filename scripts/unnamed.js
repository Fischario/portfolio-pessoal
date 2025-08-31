let tentativas = 0

const main = document.querySelector('main')
const fujao = document.getElementById('fujao')

fujao.addEventListener('mouseover', () => {
    const largura = main.offsetWidth
    const altura = main.offsetHeight
 
    const aleatLargura = Math.random() * (largura - fujao.offsetWidth)
    const aleatAltura = Math.random() * (altura - fujao.offsetHeight)
 
    fujao.style.position = 'absolute'
    fujao.style.left = `${aleatLargura}px`
    fujao.style.top = `${aleatAltura}px`
    tentativas++
})

fujao.addEventListener('click', () => {
    alert(`você conseguiu depois de ${tentativas} tentativas!`)
    tentativas = 0
})