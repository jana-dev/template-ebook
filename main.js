// Função para calcular e formatar a data 
function calcularDataPromocional() {
    const dataAtual = new Date();

    // Acrescenta 1 mês
    dataAtual.setMonth(dataAtual.getMonth() + 1);

    // Ajusta o formato da data para DD/MM/YYYY
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const ano = dataAtual.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

// Insere a data calculada no HTML
document.getElementById('data-promocao').textContent = calcularDataPromocional();