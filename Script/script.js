let age = document.querySelector('input[type]')
let height = document.querySelectorAll('input')[3]
let weight = document.querySelectorAll('input')[4]
let calculate = document.getElementsByClassName('calculate')[0]
let reset = document.getElementsByClassName('reset')[0]
let display = document.querySelector('[data-result]')
let health = document.querySelector('[data-value]')
let message = document.querySelectorAll('p')[4]

let male = document.querySelectorAll("input")[1]
let female = document.querySelectorAll("input")[2]

calculate.addEventListener('click', Calculation)

function Calculation(){
    let result = parseInt(weight.value) / parseInt(height.value) / parseInt(height.value) * 10000
    let round = Math.round(result * 100) / 100 
    display.innerText = round
    console.log(result);

    categoryNum()
}

reset.addEventListener('click', Reset)

function Reset() {
    age.value = ""
    height.value = ""
    weight.value = ""
    display.innerText = "00.00"
    health.innerText = ""
    message.style.display = "block"

    for(let i = 0; i < male.length; i++) {
        if (male[i].type == 'radio') {
            male[i].checked = false;
        }
    }
}

health.style.color = 'rgb(100, 115, 207)'

function categoryNum() {
    if (display.innerText <= 18.4) {
        health.innerText = "Underweight"
    } else if (display.innerText > 18.4 && display.innerText <= 24.9) {
        health.innerText = "Normal"
    } else if (display.innerText > 24.9 && display.innerText <= 39.9) {
        health.innerText = "Overweight"
    } else if (display.innerText >= 40.0) {
        health.innerText = "Obese"
    } else {
        message.innerText = "Please enter height and weight"
    }
}


