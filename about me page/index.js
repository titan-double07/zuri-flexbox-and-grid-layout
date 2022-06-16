const btn = document.querySelector('.hamburger')
const hamMenu=document.querySelector('.ham-menu')
const hamburger= ()=>{

    btn.classList.toggle('open')
hamMenu.classList.toggle('hidden')
}

btn.addEventListener('click', hamburger)