const menuButtons = document.querySelectorAll('.menu button');
const sections = document.querySelectorAll('.section');
const pageTitle = document.getElementById('pageTitle');

menuButtons.forEach((button) => {
    button.addEventListener('click', () => {
        menuButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        const sectionId = button.dataset.section;

        sections.forEach((section) => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });

        pageTitle.textContent = button.textContent;
    });
});

// Simulação de filtro de editais
const buscaEdital = document.getElementById('buscaEdital');
const filtroBanca = document.getElementById('filtroBanca');
const filtroArea = document.getElementById('filtroArea');
const filtroStatus = document.getElementById('filtroStatus');
const btnFiltrarEditais = document.getElementById('btnFiltrarEditais');
const btnLimparEditais = document.getElementById('btnLimparEditais');
const editalCards = document.querySelectorAll('.edital-card');
const resultadoFiltroEditais = document.getElementById('resultadoFiltroEditais');

function aplicarFiltrosEditais() {
    const termo = buscaEdital.value.trim().toLowerCase();
    const banca = filtroBanca.value.trim().toLowerCase();
    const area = filtroArea.value.trim().toLowerCase();
    const status = filtroStatus.value.trim().toLowerCase();

    let encontrados = 0;

    editalCards.forEach((card) => {
        const nomeCard = card.dataset.nome.toLowerCase();
        const bancaCard = card.dataset.banca.toLowerCase();
        const areaCard = card.dataset.area.toLowerCase();
        const statusCard = card.dataset.status.toLowerCase();

        const matchTermo = !termo || nomeCard.includes(termo);
        const matchBanca = !banca || bancaCard === banca;
        const matchArea = !area || areaCard === area;
        const matchStatus = !status || statusCard === status;

        const mostrar = matchTermo && matchBanca && matchArea && matchStatus;

        card.classList.toggle('hidden', !mostrar);

        if (mostrar) {
            encontrados++;
        }
    });

    if (encontrados > 0) {
        resultadoFiltroEditais.textContent = `Resultado: ${encontrados} edital(is) encontrado(s) com os filtros aplicados.`;
    } else {
        resultadoFiltroEditais.textContent = 'Resultado: nenhum edital encontrado para os filtros informados.';
    }
}

function limparFiltrosEditais() {
    buscaEdital.value = '';
    filtroBanca.value = '';
    filtroArea.value = '';
    filtroStatus.value = '';

    editalCards.forEach((card) => card.classList.remove('hidden'));
    resultadoFiltroEditais.textContent = 'Resultado: exibindo todos os editais cadastrados.';
}

if (btnFiltrarEditais) {
    btnFiltrarEditais.addEventListener('click', aplicarFiltrosEditais);
}

if (btnLimparEditais) {
    btnLimparEditais.addEventListener('click', limparFiltrosEditais);
}