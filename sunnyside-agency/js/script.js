
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const hamburger = document.querySelector('.fas')
const btnPrimary = document.getElementById('btn-primary')

navToggle.addEventListener('click', function() {
    if (links.classList.contains('show-links')) {
        btnPrimary.style.backgroundColor = 'white'
        links.classList.remove('show-links')
        hamburger.classList.remove('fa-times')
        hamburger.classList.add('fa-bars')
    } else {
        btnPrimary.style.backgroundColor = 'hsl(51, 100%, 49%)'
        links.classList.add('show-links')
        hamburger.classList.remove('fa-bars')
        hamburger.classList.add('fa-times')
    }
})