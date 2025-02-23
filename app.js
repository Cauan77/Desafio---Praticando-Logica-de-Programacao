var nomes = [];
let nome = "";
let numeroAleatorioMaximo = 0;
let numeroAleatorioMinimo = 0;
var listaDeNumerosSorteados = [];
let numeroAleatorio = 0;
let n = 0;



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

function lista () {
    const listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML += '<li>' + nome + '</li>';
    listaNomes.innerHTML += '';
}

function sortearAmigo () {
    const resultadoNome = document.getElementById('resultado');
    resultadoNome.innerHTML += '<li> O nome sorteado é: ' + nomes[gerarAmigoAleatorio()] + '</li>';

}

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



console.log (numeroAleatorio);

