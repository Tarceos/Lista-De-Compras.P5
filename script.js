var listas = null;
var listasHtml = document.querySelector('.item1');
var item = document.createElement('p');
var mensagem = document.createElement('p');
listasHtml.appendChild(mensagem);

var bCriarLista = document.querySelectorAll('button')[0];
var inputItem = document.querySelector('input');
var bAddItem = document.querySelectorAll('button')[1];
var item = document.createElement('p')
var bAddLista = document.querySelectorAll('button')[2];

bCriarLista.style.visibility = 'visible';
inputItem.style.visibility = 'hidden';
bAddItem.style.visibility = 'hidden';
bAddLista.style.visibility = 'hidden';

bCriarLista.addEventListener('click', criarLista);
inputItem.addEventListener('keypress', addItemEnter);
bAddItem.addEventListener('click', addItem);
bAddLista.addEventListener('click', addLista);

if (listas === null) {
    mensagem.textContent = 'Nenhuma lista encontrada.';
} else {
    mensagem.textContent = 'Listas encontradas:';
}

function criarLista() {
    bCriarLista.style.visibility = 'hidden';
    inputItem.style.visibility = 'visible';
    bAddItem.style.visibility = 'visible';
    bAddLista.style.visibility = 'visible';

    mensagem.textContent = 'Crie uma lista';

    listas = [];
}

function addItemEnter() {
if (inputItem.value != '' && inputItem.value != ' ' && event.key === 'Enter') {
        listasHtml.appendChild(item);
        item.textContent = inputItem.value;

        inputItem.value = '';

        listas.push( ' ' + item.textContent );
        console.log(listas);
    }
}

function addItem() {
    if (inputItem.value != '' && inputItem.value != ' ') {
        listasHtml.appendChild(item);
        item.textContent = inputItem.value;

        inputItem.value = '';

        listas.push( ' ' + item.textContent );
        console.log(listas);
    }
}

function addLista() {
    if (listas != '' && listas != ' ' && inputItem.style.visibility === 'visible') {
        item.textContent = ''

        let novaLista = document.createElement('p');
        listasHtml.appendChild(novaLista);
        novaLista.textContent = '=>' + listas + '.';

        mensagem.textContent = 'Listas encontradas:';

        bCriarLista.style.visibility = 'visible';
        inputItem.style.visibility = 'hidden';
        bAddItem.style.visibility = 'hidden';
        bAddLista.style.visibility = 'hidden';
    }
}
