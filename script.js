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

function motivationalQuote() {
    var motivationQuote = document.querySelector(".moti-2 h1")
    var motivationAuthor = document.querySelector(".moti-3 h2")

    async function fetchQuote() {
        let response = await fetch('https://yugc.site/quotes/quotes.php')
        let data = await response.json()

        motivationQuote.innerHTML = data.content
        motivationAuthor.innerHTML = '-', data.author

    }

    fetchQuote()
}

motivationalQuote()

function pomodoroPage() {

    let timer = document.querySelector('.pomo-timer h1')
    var startBtn = document.querySelector('.pomo-timer .start-timer')
    var pauseBtn = document.querySelector('.pomo-timer .pause-timer')
    var resetBtn = document.querySelector('.pomo-timer .reset-timer')
    var session = document.querySelector('.pomo-pg .session')
    var isWorkSession = true


    let timerInterval = null
    let totalSeconds = 25 * 60

    function updateTimer() {
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = totalSeconds % 60

        timer.innerHTML = `${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')}`
    }

    function startTimer() {
        clearInterval(timerInterval)

        if (isWorkSession) {

            timerInterval = setInterval(function () {
                if (totalSeconds > 0) {
                    totalSeconds--
                    updateTimer()
                }
                else {
                    isWorkSession = false
                    clearInterval(timerInterval)
                    timer.innerHTML = '05:00'
                    session.innerHTML = 'Take A Break'
                    session.style.backgroundColor = 'var(--blue)'
                    totalSeconds = 5 * 60
                }
            }, 1000);
        }
        else {

            timerInterval = setInterval(function () {
                if (totalSeconds > 0) {
                    totalSeconds--
                    updateTimer()
                }
                else {
                    isWorkSession = true
                    clearInterval(timerInterval)
                    timer.innerHTML = '25:00'
                    session.innerHTML = 'Work Session'
                    session.style.backgroundColor = 'var(--green)'
                    totalSeconds = 25 * 60
                }
            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(timerInterval)
    }

    function resetTimer() {
        totalSeconds = 25 * 60
        clearInterval(timerInterval)
        updateTimer()
    }

    startBtn.addEventListener('click', startTimer)
    pauseBtn.addEventListener('click', pauseTimer)
    resetBtn.addEventListener('click', resetTimer)
}

pomodoroPage()

function weatherFunction() {
    const apiKey = "b1de82898b5c4f8fb74130108260607";
    const city = "Mumbai";

    var header1Time = document.querySelector('.header1 h1')
    var header1Date = document.querySelector('.header1 h2')
    var header2Temp = document.querySelector('.header2 h2')
    var header2Condition = document.querySelector('.header2 h4')
    var heatIndex = document.querySelector('.header2 .heat-index')
    var humidity = document.querySelector('.header2 .humidity')
    var wind = document.querySelector('.header2 .wind')





    var data = null

    async function weatherApi() {
        var response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${(apiKey)}&q=${(city)}`)
        data = await response.json()

        header2Temp.innerHTML = `${data.current.temp_c}°C`
        header2Condition.innerHTML = `${data.current.condition.text}`
        wind.innerHTML = `Wind: ${data.current.wind_kph}km/h`
        humidity.innerHTML = `Humidity: ${data.current.humidity}%`
        heatIndex.innerHTML = `Heat Index: ${data.current.heatindex_c}km/h`



    }
    weatherApi()


    function timeDate() {
        const totdaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const totMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = new Date()
        var dayOfWeek = totdaysOfWeek[date.getDay()]
        var hours = date.getHours()
        var minutes = date.getMinutes()
        var minutes = date.getMinutes()
        var seconds = date.getSeconds()
        var dates = date.getDate()
        var month = totMonths[date.getMonth()]
        var year = date.getFullYear()


        header1Date.innerHTML = `${dates} ${month}, ${year}`

        if (hours > 12) {
            header1Time.innerHTML = `${month}, ${String(hours - 12).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')} AM`
        }
        else {
            header1Time.innerHTML = `${month}, ${String(hours).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')} AM`
        }
    }
    setInterval(() => {
        timeDate()
    })
}

weatherFunction()

function theme() {

    var theme = document.querySelector('.theme')
    var rootElement = document.documentElement

    var flag = 0

    theme.addEventListener('click', function () {

        if (flag == 0) {
            rootElement.style.setProperty('--pri', '#f8f4e1')
            rootElement.style.setProperty('--sec', '#222831')
            rootElement.style.setProperty('--tri1', '#948979')
            rootElement.style.setProperty('--tri2', '#393e46')
            flag = 1
        }
        else if (flag == 1) {
            rootElement.style.setProperty('--pri', '#f1efec')
            rootElement.style.setProperty('--sec', '#030303')
            rootElement.style.setProperty('--tri1', '#d4c9be')
            rootElement.style.setProperty('--tri1', '#123458')
            flag = 2
        }
        else if (flag == 2) {
            rootElement.style.setProperty('--pri', '#f8f4e1')
            rootElement.style.setProperty('--sec', '#381c0a')
            rootElement.style.setProperty('--tri1', '#feba17')
            rootElement.style.setProperty('--tri2', '#74512d')
            flag = 0
        }
    })
}
//saarthack
theme()