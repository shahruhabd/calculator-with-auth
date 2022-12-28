let name = document.querySelector('#name')
let age = document.querySelector('#age')
let sbmt = document.querySelector('#submitBTN')
let block = document.querySelector('#opros-block')
let error = document.createElement('div');
let select = document.querySelector("#select")
let errorAge = document.createElement('div');
let errorStudent = document.createElement('div');
let ageBool = false 
let nameBool = false 
let studBool = false 


sbmt.addEventListener("click", submitForm)
function checkName() {
    if (name.value.length < 3) {
        error.innerHTML = "Вы некорректно ввели имя, должно быть от 3 символов"
        block.append(error)
    } else {
        error.innerHTML = ""
        nameBool = true
    }
}

function checkAge() {
    if (age.value < 14 || age.value > 30) {
        errorAge.innerHTML = "Вы некорректно ввели возраст"
        block.append(errorAge)
    } else {
        errorAge.innerHTML = ""
        ageBool = true
    }
}

function isStudent() {
    if (select.value == "n") {
        errorStudent.innerHTML = "Вход только для студентов"
        block.append(errorStudent)
    } else {
        errorStudent.innerHTML = ""
        studBool = true
    }
}
function submitForm() {
    checkName()
    checkAge()
    isStudent()
    if (ageBool == true && nameBool == true && studBool == true) {
        window.location.href = 'https://shahruhabd.github.io/calc.html'
    }
    
}
