const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#igual");
const resposta = document.querySelector("#resposta");

// Validação de entrada apenas números
campo1.addEventListener("input", validarNumero);
campo2.addEventListener("input", validarNumero);
botao.addEventListener("click", calcular);

function validarNumero(e) {
    // Remove caracteres não numéricos, mantendo o sinal de menos
    let valor = e.target.value.replace(/[^\d-]/g, "");
    // Garante que só tenha um sinal de menos no início
    if (valor.startsWith("-")) {
        valor = "-" + valor.replace(/-/g, "");
    }
    e.target.value = valor;
}

function calcular() {
    // Limpa resultado anterior
    resposta.innerHTML = "";
    
    // Valida campos vazios
    if (!campo1.value || !campo2.value) {
        resposta.innerHTML = "Preencha os dois números";
        return;
    }

    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    
    if (isNaN(valor1) || isNaN(valor2)) {
        resposta.innerHTML = "Digite números válidos";
        return;
    }

    let resultado;
    const operacao = seletor.value;

    switch (operacao) {
        case "somar":
            resultado = valor1 + valor2;
            break;
        case "subtrair":
            resultado = valor1 - valor2;
            break;
        case "multiplicar":
            resultado = valor1 * valor2;
            break;
        case "dividir":
            if (valor2 === 0) {
                resposta.innerHTML = "Não é possível dividir por zero";
                return;
            }
            resultado = Math.floor(valor1 / valor2);
            break;
    }

    resposta.innerHTML = resultado;
}
    