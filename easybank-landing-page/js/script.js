
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const hamburger = document.querySelector('.fas')
const btnPrimary = document.getElementById('btn-primary')

navToggle.addEventListener('click', function() {
    
    if (links.classList.contains('show-links')) {
        document.querySelector('.overlay').style.display = 'none';
        links.classList.remove('show-links')
        hamburger.classList.remove('fa-times')
        hamburger.classList.add('fa-bars')
    } else {
        document.querySelector('.overlay').style.display = 'block';
        links.classList.add('show-links')
        hamburger.classList.remove('fa-bars')
        hamburger.classList.add('fa-times')
    }
})



window.addEventListener("resize", function() {
    if (window.innerWidth > 768) { 
        links.classList.remove("show-links");
        document.querySelector('.overlay').style.display = 'none';
    }
  });