// var firstName = document.getElementById('fname').value
// var lastName = document.getElementById('lname').value
// var email = document.getElementById('email').value
// var password = document.getElementById('password').value
// function onSubmit() {
//     var divOfInput = document.getElementById('output')
//     divOfInput.innerHTML = `<p>This is your name: ${firstName}</p></br><p>This is your name: ${lastName}</p></br>`
// }

// function changeBorder(elem) {
//     elem.style.border = "1px solid blue"
// }

// function onBlur(elem) {
//     elem.style.border = "1px solid red"
// }


var bucket = '12345ABCDabcde@#$%'

function randomPass() {
    var random = Math.floor(Math.random() * bucket.length);
    console.log('password: ', bucket[random])
}