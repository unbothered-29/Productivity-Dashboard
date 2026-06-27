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
let taskCheckbox = document.querySelector('.addtask form #check')

let currentTask = [
    {
        task: 'Do React',
        details: 'Two-way binding',
        imp: true
    },
    {
        task: 'Do Java',
        details: 'Loops & Patterns',
        imp: true
    },
    {
        task: ' Laxmi Bakes Meet',
        details: 'Basic Set-up & workflow',
        imp: false
    },
]

function renderTask() {
    var allTask = document.querySelector('.alltask');

    var sum = ''

    currentTask.forEach(function (elem) {
        sum = sum + `   <div class="task">
                        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                        <button>Mark as Completed</button>
                        <!-- <button>Delete</button> -->
                    </div>`
    })

    allTask.innerHTML = sum
}

renderTask()

form.addEventListener('submit', function (e) {
    e.preventDefault()

    // console.log(taskInput.value);
    // console.log(taskDetailsInput.value);
    // console.log(taskCheckbox.checked);

    currentTask.push({ task: taskInput.value, details: taskDetailsInput.value, imp: taskCheckbox.checked })

    console.log(currentTask);
})
