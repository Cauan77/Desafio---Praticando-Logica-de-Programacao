var nomes = [];
let nome = "";
let numeroAleatorioMaximo = 0;
let numeroAleatorioMinimo = 0;
var listaDeNumerosSorteados = [];
let numeroAleatorio = 0;


/* Usa nomes.push(nome) para adicionar nomes ao array e incrementa numeroAleatorioMaximo.
Além disso, usa a função lista para mandar o nome adicionado para uma lista visível para o usuário 
como forma de lembra-lo dos nomes que já foram colocados */
function adicionarAmigo() {
    nome = document.getElementById('amigo').value;
    if (nome.trim() != "") {
        nomes.push(nome);
        console.log (nomes);

        lista();
        numeroAleatorioMaximo++;
    } else {
        alert ('Nome inválido, tente inserir um nome novamente');
    }   
    limpaCampo();
}

function limpaCampo () {
    document.getElementById('amigo').value = '';
}

/* Manda o nome adicionado para uma lista visível para o usuário 
como forma de lembra-lo dos nomes que já foram colocados */
function lista () {
    const listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML += '<li>' + nome + '</li>';
    listaNomes.innerHTML += '';
}

/* Recupera o nome sorteado usando 'nomes[numeroAleatorio]' (índice gerado). */
function sortearAmigo () {
    const resultadoNome = document.getElementById('resultado');
    resultadoNome.innerHTML += '<li> O nome sorteado é: ' + nomes[gerarAmigoAleatorio()] + ' </li>';

}

/* Calcula numeroAleatorio usando numeroAleatorioMinimo e numeroAleatorioMaximo, e 
verifica duplicatas em listaDeNumerosSorteados.*/
function gerarAmigoAleatorio () {
    numeroAleatorioMinimo = Math.ceil(numeroAleatorioMinimo);
    numeroAleatorioMaximo = Math.floor(numeroAleatorioMaximo);
    numeroAleatorio = Math.floor(Math.random() * (numeroAleatorioMaximo - numeroAleatorioMinimo) + numeroAleatorioMinimo);

    if (listaDeNumerosSorteados.includes(numeroAleatorio)) {
        return gerarAmigoAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroAleatorio);
        console.log(listaDeNumerosSorteados);
        return numeroAleatorio;
    }
}

