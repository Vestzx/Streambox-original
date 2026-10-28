const filmes = [
    {
        titulo: "Além do Horizonte",
        genero: "Ficção científica",
        ano: 2026,
        capa: "capa-um"
    },
    {
        titulo: "Última Estação",
        genero: "Drama",
        ano: 2026,
        capa: "capa-dois"
    },
    {
        titulo: "O Código Perdido",
        genero: "Suspense",
        ano: 2026,
        capa: "capa-tres"
    },
    {
    titulo: "A Cidade das Estrelas",
    genero: "Aventura",
    ano: 2025,
    capa: "capa-um"
}
];

const gradeFilmes = document.getElementById("gradeFilmes");
const campoBusca = document.getElementById("campoBusca");

function mostrarFilmes(listaFilmes) {
    gradeFilmes.innerHTML = "";
    
    if (listaFilmes.length === 0) {
    gradeFilmes.innerHTML = "<p class='mensagem-vazia'>Nenhum filme encontrado.</p>";
    return;
}

    listaFilmes.forEach(function (filme, indice) {
        const card = document.createElement("article");

        card.classList.add("filme");

        card.innerHTML = `
            <div class="capa ${filme.capa}">
                ${String(indice + 1).padStart(2, "0")}
            </div>
            <h3>${filme.titulo}</h3>
            <p>${filme.genero} · ${filme.ano}</p>
        `;

        gradeFilmes.appendChild(card);
    });
}

mostrarFilmes(filmes);

campoBusca.addEventListener("input", function () {
    const textoBusca = campoBusca.value.toLowerCase();

    const filmesFiltrados = filmes.filter(function (filme) {
        return filme.titulo.toLowerCase().includes(textoBusca);
    });

    mostrarFilmes(filmesFiltrados);
});