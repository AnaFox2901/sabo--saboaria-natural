function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    // Se campoPesquisa for uma string sem nada

    if (!campoPesquisa) {
          section.innerHTML = "<p>Você precisa digitar o nome de um ingrediente ou tipo de pele.</p>"
          return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa)
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="blank">Mais Informações</a>
        </div>
      `;

      }  
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }
  
    // Atribui o HTML construído à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }



