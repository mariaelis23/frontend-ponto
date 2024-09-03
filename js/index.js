navigator.geolocation.getCurrentPosition((position) => {
    
})

const diaSemana = document.getElementById("dia-semana")
const diaMesAno = document.getElementById("dia-mes-ano")
const horaMinSeg = document.getElementById("hora-min-seg")

const btnBaterPonto = document.getElementById("btn-bater-ponto")
btnBaterPonto.addEventListener("click", register)

const dialogPonto = document.getElementById("dialog-ponto")
const btnDialogFechar = document.getElementById("btn-dialog-fechar")
btnDialogFechar.addEventListener("click", () => dialogPonto.close())
const dialogData = document.getElementById("dialog-data")
const dialogHora = document.getElementById("dialog-hora")

diaSemana.textContent = getCurrentDay()
diaMesAno.textContent = getCurrentDate()
horaMinSeg.textContent = printHour()

dialogData.textContent = "Data: " + getCurrentDate()
dialogHora.textContent = "Hora: " + getCurrentHour()

function getCurrentDay() {
    const date = new Date()
    
    let days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    return days[date.getDay()]

}

function getCurrentDate() {
    // Usar padSstart ou slice
    // Considerar formatos diferentes de data e hora conforme localização do usuário
    // Verificar se no Date há algum método que possa auxiliar
    // locale

    const date = new Date()

    let day = date.getDate()
    if (day < 10)
    {
        day = "0" + day
    }

    let month = String(parseInt(date.getMonth())+1)
    if (month.length < 2) {
        month = "0" + month
    } 

    return day + "/" + month + "/" + date.getFullYear()
}

function getCurrentHour() {
    const date = new Date()

    let hour = date.getHours()
    if (hour < 10)
    {
        hour = "0" + hour
    }
    let minutes = date.getMinutes()
    if (minutes < 10)
    {
        minutes = "0" + minutes
    }
    let seconds = date.getSeconds()
    if (seconds < 10)
    {
        seconds = "0" + seconds
    }

    return hour + ":" + minutes + ":" + seconds
}

function printHour() {
    horaMinSeg.textContent = getCurrentHour()
}

setInterval(printHour, 1000)

function register() {
    
    dialogPonto.showModal()
    
}