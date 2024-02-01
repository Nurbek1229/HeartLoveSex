const signInBtn = document.querySelector('.signin-btn')
const signUpBtn = document.querySelector('.signup-btn')
const Box = document.querySelector('.box')
const body = document.body;

signUpBtn.addEventListener('click', function () {
    Box.classList.add('active');
    body.classList.add('active');
})

signInBtn.addEventListener('click', function () {
    Box.classList.remove('active');
    body.classList.remove('active');
})