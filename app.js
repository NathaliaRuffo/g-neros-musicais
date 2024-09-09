function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Imprime no console para fins de depuração (pode ser removido em produção)
    console.log(section);
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let origem = ";"
    let genero = "";
    let caracteristica = "";
    let evolucao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      origem = dado.origem.toLowerCase()
      genero = dado.genero.toLowerCase()
      caracteristica = dado.caracteristica.toLowerCase()
      evolucao = dado.evolucao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if (origem.includes(campoPesquisa) || genero.includes(campoPesquisa) || caracteristica.includes(campoPesquisa) ||
      evolucao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada item do resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.genero}</a>
          </h2>
          <p class="descricao-meta"><strong>Origem:</strong> ${dado.origem}</p>
          <p class="descricao-meta"><strong>Caracterítica:</strong> ${dado.caracteristica}</p>
          <p class="descricao-meta"><strong>Evolução:</strong> ${dado.evolucao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>`;
        }  }
        if (!resultados) {
          resultados = "<p>Busca não encontrada!</p>"
        }
       //limpar barra de pesquisa
        document.getElementById("campo-pesquisa").value = "";
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }

