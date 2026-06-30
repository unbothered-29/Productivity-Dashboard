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


var currentTask = []
if (localStorage.getItem('currentTask')) {
    currentTask = JSON.parse(localStorage.getItem('currentTask'))
}
else {
    console.log('Task list is empty.');
}


function renderTask() {
    let allTask = document.querySelector('.alltask');

    let sum = ''

    currentTask.forEach(function (elem, idx) {
        sum = sum + `   <div class="task">
                        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                        <button id=${idx}>Mark as Completed</button>
                        <!-- <button>Delete</button> -->
                    </div>`
    })

    allTask.innerHTML = sum
    localStorage.setItem('currentTask', JSON.stringify(currentTask))

    document.querySelectorAll('.task button').forEach(function (btn) {
        btn.addEventListener('click', function () {
            currentTask.splice(btn.id, 1)
            renderTask()
            // location.reload()
        })
    })
}

renderTask()

function todoList() {
    let form = document.querySelector('.addtask form')
    let taskInput = document.querySelector('.addtask form input')
    let taskDetailsInput = document.querySelector('.addtask form textarea')
    let taskCheckbox = document.querySelector('.addtask form #check')

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        // console.log(taskInput.value);
        // console.log(taskDetailsInput.value);
        // console.log(taskCheckbox.checked);

        currentTask.push(
            {
                task: taskInput.value,
                details: taskDetailsInput.value,
                imp: taskCheckbox.checked
            }
        )
        renderTask()

        taskInput.value = ''
        taskDetailsInput.value = ''
        taskCheckbox.checked = false
    })
}

todoList()

function dailyPlanner() {
    var dayPlanner = document.querySelector('.day-planner')
    var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {}

    var hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`)

    var wholeDaySum = ''
    hours.forEach(function (elem, idx) {

        var savedData = dayPlanData[idx] || ''

        wholeDaySum = wholeDaySum + `<div class="day-time">
                    <p>${elem}</p>
                    <input id=${idx} type="text" placeholder="..." value=${savedData}>
                </div>`
    })

    dayPlanner.innerHTML = wholeDaySum

    var dayPlannerInput = document.querySelectorAll('.day-planner input')

    dayPlannerInput.forEach(function (elem) {
        elem.addEventListener('input', function () {

            dayPlanData[elem.id] = elem.value

            localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
        })
    })
}

dailyPlanner()

let abc = fetch('https://api.quotable.io/random')
console.log(abc);