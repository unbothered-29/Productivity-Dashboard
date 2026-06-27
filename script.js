function openFeatures() {
    var allElems = document.querySelectorAll('.elem')
    var allFullElems = document.querySelectorAll('.fullElem')
    var closebtn = document.querySelectorAll('.fullElem .back')

    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            allFullElems[elem.id].style.display = 'block'
        })
    })

    closebtn.forEach(function (back) {
        back.addEventListener('click', function () {
            allFullElems[back.id].style.display = 'none'
        })
    })
}

openFeatures()

let form = document.querySelector('.addtask form')
let taskInput = document.querySelector('.addtask form input')
let taskDetailsInput = document.querySelector('.addtask form textarea')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    console.log(taskInput.value);
    console.log(taskDetailsInput.value);

})