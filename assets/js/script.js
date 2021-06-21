
/*
- javascript é caseSensitive
por Tag: getElementById()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

// INDEX

function sobreMim(){
    
    
}
// CONTATO

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOK = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#tFxtNome')
    if (nome.value.length == 0) {
        txtNome.innerHTML = (' ')
    } else if (nome.value.length >= 3) {
        txtNome.innerHTML = ('Nome válido')
        txtNome.style.color = '#00FA9A'
    } else if (nome.value.length < 3) {
        txtNome.innerHTML = ('Nome Inválido')
        txtNome.style.color = 'red'
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') != 1 || email.value.indexOf('.com') != 1) {  // Se não tem @ nem .com
        txtEmail.innerHTML = ('Email Inválido')
        txtEmail.style.color = 'red'
    } else if (email.value.indexOf('@') >= 1 || email.value.indexOf('.com') >= 1) {  // Se tem @ e .com
        txtEmail.innerHTML = ('Email Válido')
        txtEmail.style.color = '00FA9A'
    } else if (email.value.indexOf('@') == 0 || email.value.indexOf('.com') == 0) { // Limpa a label
        txtEmail.innerHTML = (' ')
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Mensagem atingiu o limite de caracteres | máximo: 100'
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.style.display = 'none'
    }

}
function enviar() {
    if (nomeOk == true && emailOK == true && assuntoOk == true) {
        alert = ('Preencha o formulário corretamente antes de enviar.')
    } else {
        alert = ('Formulário enviado com sucesso!')
    }
}
function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}
function mapaNormal() {
    mapa.style.width = '600px'
    mapa.style.height = '400px'
}

