navigator.geolocation.getCurrentPosition((position) => {
    
})

const diaSemana = document.getElementById("dia-semana")
const diaMesAno = document.getElementById("dia-mes-ano")
const horaMinSeg = document.getElementById("hora-min-seg")

const btnBaterPonto = document.getElementById("btn-bater-ponto")
btnBaterPonto.addEventListener("click", register)

let registerLocalStorage = getRegisterLocalStorage()

const dialogPonto = document.getElementById("dialog-ponto")
const selectDialogTipo = document.getElementById("select-dialog-tipo")
const btnDialogRegistrar = document.getElementById("btn-dialog-registrar")
btnDialogRegistrar.addEventListener("click", () => {

    // Recuperar data, hora, localização e tipo e salva em objeto javascript

    let ponto = {
        data: getCurrentDate(),
        hora: getCurrentHour(),
        localizacao: getCurrentPosition(),
        id: 1,
        tipo: selectDialogTipo.value
    }

    console.log(ponto)
    saveRegisterLocalStorage(ponto)
    localStorage.setItem("lastTypeRegister", selectDialogTipo.value)

    dialogPonto.close()

    // Mostrar mensagem de confirmação

})
const btnDialogFechar = document.getElementById("btn-dialog-fechar")
btnDialogFechar.addEventListener("click", () => dialogPonto.close())
const dialogData = document.getElementById("dialog-data")
const dialogHora = document.getElementById("dialog-hora")

diaSemana.textContent = getCurrentDay()
diaMesAno.textContent = getCurrentDate()
horaMinSeg.textContent = printHour()

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

    let hour = String(date.getHours()).padStart(2, '0')

    let minutes = String(date.getMinutes()).padStart(2, '0')

    let seconds = String(date.getSeconds()).padStart(2, '0')

    return hour + ":" + minutes + ":" + seconds
}

function printHour() {
    horaMinSeg.textContent = getCurrentHour()
}

function getCurrentPosition() {

    navigator.geolocation.getCurrentPosition((position) => {
        return position
      });
      

}

function saveRegisterLocalStorage(register) {

    registerLocalStorage.push(register)
    localStorage.setItem("register", JSON.stringify(registerLocalStorage))
}

function getRegisterLocalStorage(register) {
    
    let registers = JSON.parse(localStorage.getItem("register"))

    if (!registers) {
        return []
    }

    return registers

}

function register() {
    
    dialogPonto.showModal()

    // Atualizar horário a cada segundo e data 00:00:00
    dialogData.textContent = "Data: " + getCurrentDate()
    dialogHora.textContent = "Hora: " + getCurrentHour()
    
}

printHour()
setInterval(printHour, 1000)
