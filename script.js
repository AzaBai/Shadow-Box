let blur = document.querySelector('.blur')
let spread = document.querySelector('.spread')
let vertical = document.querySelector('.vertical')
let horizontal = document.querySelector('.horizontal')
let color = document.querySelector('.color')
let box = document.querySelector('.box')
let boxShadowCode = document.querySelector('.box-shadow-code')
let settingsRanges = document.querySelectorAll('.settings-block input')

settingsRanges.forEach(input => {
    input.addEventListener('input', () =>{
        generateShadow()
    })
})

function generateShadow() {
    const property = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
    box.style.boxShadow = property
    boxShadowCode.textContent = `box-shadow: ${property};`
}
generateShadow()

//
// blur.addEventListener('input', () => {
//     // console.log(event.target.value)
//     // box.style.borderRadius = `${event.target.value}%`//интерполояция
//     // box.style.borderRadius = event.target.value + '%'//конкатинвция
//     box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value} `
// })
// spread.addEventListener('input', () => {
//     box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
// })
// horizontal.addEventListener('input', () => {
//     box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
// })
// vertical.addEventListener('input', () => {
//     box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
// })
// color.addEventListener('input', () => {
//     box.style.boxShadow =`${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
// }
