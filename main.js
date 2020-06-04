// alert("javascript")

// 1 - variables - targetting elements in the DOM
// target the button
// const header = document.querySelector(".header");
// console.log(header);
// const anotherWayToGetHeader = document.querySelector("header");
// console.log(anotherWayToGetHeader);
// const grabHeaderWithClassSelector = document.getElementsByClassName('top-h2')[0];
// console.log(grabHeaderWithClassSelector);
// const email = document.getElementById("email");
// const paragraph = document.querySelector("p");
// console.log(paragraph)
// paragraph.classList.add('big-font');
// const girl = document.getElementsByClassName('girl');
// console.log(girl)
// document.getElementsByTagName('input')
const form = document.querySelector('form');
const email = document.querySelector('.email-address');
console.log(form)
console.log(email.placeholder)
const showErrorMessage = document.querySelector('.show-error-message');
console.log(showErrorMessage);
const showErrorImage = document.querySelector('.show-error-image');
// 2 - functions 
// submit function



// 3 - event listeners
// button is clicked and calls submit function
form.addEventListener('submit', function (e){
    e.preventDefault();
    // console.log(e.target);
    const emailValue = email.value;
    console.log(email.value)

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passOrFail = re.test(emailValue)
    // console.log(passOrFail);

    if (passOrFail) {
        // do nothing
        console.log("great email")
    } else {
        // console.log("please your email")
        showErrorMessage.innerHTML = '<h1>Please provide a valid email</h1>';
        // write code here
        showErrorImage.innerHTML = '<img src="images/icon-error.svg" alt ="error">'
    }

});

