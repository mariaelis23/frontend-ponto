const diaSemana = document.getElementById("dia-semana")
const diaMesAno = document.getElementById("dia-mes-ano")
const horaMinSeg = document.getElementById("hora-min-seg")

diaSemana.textContent = getCurrentDay()
diaMesAno.textContent = getCurrentDate()
horaMinSeg.textContent = getCurrentHour()

function getCurrentDay() {
    const date = new Date()
    
    switch (date.getDay()) {
        case 0:
            return "Domingo"
        break
        case 1:
            return "Segunda-feira"
        break
        case 2:
            return "Terça-feira"
        break
        case 3:
            return "Quarta-feira"
        break
        case 4:
            return "Quinta-feira"
        break
        case 5:
            return "Sexta-feira"
        break
        case 6:
            return "Sábado"
        break
    }

}

function getCurrentDate() {
    const date = new Date()

    let day = date.getDate()
    if (day.length < 2)
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