// const input = document.querySelector('input')
// const errorIcon = document.querySelector('.error-icon')
// const small = document.querySelector('small')
const errElements = document.querySelectorAll('.err-test')

// const allElements = [input, errorIcon, small]

errElements.forEach((e) => {
    e.classList.add('error')
})