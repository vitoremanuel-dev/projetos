function slider(anything) {
    document.querySelector('.one') .src = anything
}

let menu = document.querySelector('#icons')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}