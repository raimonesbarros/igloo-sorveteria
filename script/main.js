const product = [...document.querySelectorAll('#vitrine .option')];

let random = Math.floor(Math.random()*product.length)
product[random].classList.remove('disable')