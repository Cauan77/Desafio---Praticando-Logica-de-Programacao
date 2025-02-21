var nomes = [];
let nome = "";



function adicionarAmigo() {
    nome = document.getElementById('amigo').value;
    if (nome.trim() != "") {
        nomes.push(nome);
        console.log (nomes);
        
    } else {
        alert ('Nome inválido, tente inserir um nome novamente');
    }   
    limpaCampo();
}

function limpaCampo () {
    document.getElementById('amigo').value = '';
}


