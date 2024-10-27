const dialogEditar = document.getElementById("dialog-editar");
const inputData = document.getElementById("data");
const inputHora = document.getElementById("hora");
const selectTipo = document.getElementById("tipo");
const btnSalvar = document.getElementById("btn-salvar");
const btnFecharDialog = document.getElementById("btn-fechar-dialog");

let registros = JSON.parse(localStorage.getItem("register")) || [];
let registroAtualIndex = null;

function renderList() {
    const registrosContainer = document.getElementById("registros-relatorio");
    const registrosPorData = registros.reduce((acc, registro) => {
        const data = registro.data;
        if (!acc[data]) {
            acc[data] = [];
        }
        acc[data].push(registro);
        return acc;
    }, {});

    registrosContainer.innerHTML = "";

    for (const data in registrosPorData) {
        const divData = document.createElement("div");
        divData.innerHTML = `<h2>${data}</h2>`;

        registrosPorData[data].forEach((registro, index) => {
            const divRegistro = document.createElement("div");
            const tipoRegistro = registro.tipo.charAt(0).toUpperCase() + registro.tipo.slice(1);

            divRegistro.innerHTML = `
                <p>${tipoRegistro} | ${registro.hora} | 
                <button onclick="openEditDialog(${index})">Editar</button>
                <button onclick="alertDelete()">Excluir</button></p>
            `;

            divData.appendChild(divRegistro);
        });

        registrosContainer.appendChild(divData);
    }
}

function openEditDialog(index) {
    registroAtualIndex = index;
    const registro = registros[index];

    inputData.value = registro.data;
    inputHora.value = registro.hora;
    selectTipo.value = registro.tipo;

    dialogEditar.showModal();
}