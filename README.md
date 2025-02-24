# 🎉 Amigo Secreto 

<img src="https://github.com/user-attachments/assets/aa92f6c1-6609-426a-b06f-a3d005cc8e27" width="300" />


Um projeto simples em JavaScript para gerenciar uma lista de amigos e sortear nomes aleatoriamente. Ideal para rifas, jogos ou distribuição de tarefas em grupo.

## 🚀 Funcionalidades 

- **Adicionar Amigos**: Insira nomes e adicione-os à lista.
- **Listagem em Tempo Real**: Visualize todos os nomes cadastrados.
- **Sorteio Sem Repetição**: Seleciona um nome aleatório da lista sem repetir até que todos sejam sorteados.
- **Validação de Entrada**: Alerta para nomes vazios ou inválidos.

## 📋 Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Conhecimento básico de HTML/JavaScript (para personalização ou ajustes).

## 🛠️ Como Usar

1. **📌 Adicionar Nomes**:
   - Digite um nome no campo de entrada.
   - Clique no botão "Adicionar" (ou equivalente no seu HTML) para incluir na lista.

2. **👀 Visualizar Lista**:
   - Os nomes adicionados aparecerão na seção "Lista de Amigos".

3. **🎲 Realizar Sorteio**:
   - Clique no botão "Sortear" (ou equivalente no seu HTML) para selecionar um nome aleatório.
   - O resultado será exibido na seção "Resultado".

## 🔧 Detalhes Técnicos

### 📑 Funções Principais

- **`adicionarAmigo()`**:  
  Adiciona um nome ao array `nomes` e atualiza a lista exibida. Valida entradas vazias.

- **`lista()`**:  
  Atualiza dinamicamente a lista HTML com os nomes cadastrados.

- **`sortearAmigo()`**:  
  Inicia o sorteio e exibe o resultado.

- **`gerarAmigoAleatorio()`**:  
  Gera um índice aleatório único usando `Math.random()`, garantindo que nenhum nome seja repetido até que todos sejam sorteados.

## ⚙️ Configuração

1. Clone este repositório ou faça o download dos arquivos.
2. Abra o arquivo `index.html` em um navegador (certifique-se de que `script.js` está no mesmo diretório).

## 📝 Observações

- A lista é reiniciada ao recarregar a página (não há armazenamento persistente).
- Nomes duplicados são permitidos, mas tratados como entradas separadas.

## Tecnologias Utilizadas 💡

![Static Badge](https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=JavaScript&logoSize=auto&labelColor=black)
![Static Badge](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoSize=auto&labelColor=black)
![Static Badge](https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css&logoColor=663399&logoSize=auto&labelColor=black)


---

## Autor 👨💻

| [<img loading="lazy" src="https://github.com/user-attachments/assets/b2131622-e32c-40ef-a5b5-1794c019d0c5" width=115><br><sub>Cauan Henrique</sub>](https://github.com/Cauan77) |
| :---: |
