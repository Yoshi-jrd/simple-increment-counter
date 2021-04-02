// set intial count
let count = 0

// select value and buttons
let value = document.querySelector('#value')
let buttons = document.querySelectorAll('.btn')

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let style = event.currentTarget.classList
        if (style.contains('decrease')) {
            count--;
        } else if (style.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0 ) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})