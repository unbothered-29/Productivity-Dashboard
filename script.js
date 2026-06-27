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
    var allTask = document.querySelector('.alltask');

    var sum = ''

    currentTask.forEach(function (elem, idx) {
        sum = sum + `   <div class="task">
                        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                        <button id=${idx}>Mark as Completed</button>
                        <!-- <button>Delete</button> -->
                    </div>`
    })

    allTask.innerHTML = sum
}

renderTask()

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
    localStorage.setItem('currentTask', JSON.stringify(currentTask))

    taskInput.value = ''
    taskDetailsInput.value = ''
    taskCheckbox.checked = false
})

var markCompletedBtn = document.querySelectorAll('.task button')

markCompletedBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        currentTask.splice(btn.id, 1)
    })
});

// localStorage.clear()