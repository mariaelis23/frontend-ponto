const listaRegistros = document.getElementById("lista-registros");
const modalEditar = document.getElementById("modal-editar");
const campoData = document.getElementById("campo-data");
const campoHora = document.getElementById("campo-hora");
const campoTipo = document.getElementById("campo-tipo");
const botaoSalvar = document.getElementById("botao-salvar");
const botaoFechar = document.getElementById("botao-fechar");

let pontos = JSON.parse(localStorage.getItem("register")) || [];

// Função para exibir os pontos na tabela
function exibirPontos() {
    listaRegistros.innerHTML = ""; // Limpa a tabela antes de adicionar os pontos

    pontos.forEach((ponto, index) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${ponto.data}</td>
            <td>${ponto.hora}</td>
            <td>${ponto.tipo}</td>
            <td>${ponto.localizacao}</td>
            <td>${ponto.obs || ''}</td>
            <td>${ponto.anexo || ''}</td>
            <td><button class="editar" data-index="${index}">Editar</button></td>
        `;
        listaRegistros.appendChild(linha);
    });

    // Adiciona os listeners para o botão de editar
    const botoesEditar = document.querySelectorAll(".editar");
    botoesEditar.forEach(botao => {
        botao.addEventListener("click", (evento) => {
            const index = evento.target.dataset.index;
            abrirModalEditar(index);
        });
    });
}

// Função para abrir o modal de edição
function abrirModalEditar(index) {
    const ponto = pontos[index];

    // Preenche os campos do modal com os dados do ponto
    campoData.value = ponto.data;
    campoHora.value = ponto.hora;
    campoTipo.value = ponto.tipo;

    // Salva o índice do ponto para editar depois
    botaoSalvar.dataset.index = index;

    modalEditar.showModal();
}

// Função para salvar a edição
botaoSalvar.addEventListener("click", () => {
    const index = botaoSalvar.dataset.index;
    pontos[index].data = campoData.value;
    pontos[index].hora = campoHora.value;
    pontos[index].tipo = campoTipo.value;

    // Atualiza o localStorage
    localStorage.setItem("pontos", JSON.stringify(pontos));

    // Fecha o modal e atualiza a tabela
    modalEditar.close();
    exibirPontos();
});

// Função para fechar o modal
botaoFechar.addEventListener("click", () => {
    modalEditar.close();
});

function getRegisterLocalStorage(register) {
    
    let registers = JSON.parse(localStorage.getItem(register))

    if (!registers) {
        return []
    }

    return registers

}

// Inicializa a tabela com os dados do localStorage
exibirPontos();