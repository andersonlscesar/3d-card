const card = document.querySelector('.card')
const limit = 20

card.addEventListener('mousemove', handleCard)
card.addEventListener('mouseleave', resetStyle)

function handleCard(e){
    const { clientX, clientY } = e
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = this

    const horizontal = (clientX - offsetLeft) / clientWidth
    const vertical = (clientY - offsetTop) / clientHeight

    const rotateX = (limit / 2 - horizontal * limit).toFixed(2)
    const rotateY = (limit * vertical - limit / 2).toFixed(2)

    this.style.transform = `perspective(${clientWidth}px) rotateY(${rotateX}deg) rotateX(${rotateY}deg)`

}

function resetStyle(){
    this.style.transform = `perspective(${this.clientWidth}px) rotateY(0deg) rotateX(0deg)`
}