const formulario = document.getElementById('contatos');
const contato = []
const telefone = []


let linhas = ''

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    
})

function adicionaLinha() {

    const inputNomeContato = document.getElementById('contato');
    const inputNumeroTelefone = document.getElementById('telefone');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
}
inputNomeContato.value = ''
inputNumeroTelefone.value = ''


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}





