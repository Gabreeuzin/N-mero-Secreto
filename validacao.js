function verificaChuteValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        chuteNumeroSecreto.innerHTML += '<div>Valor Inválido</div>';
        return;
    } if (numeroMaiorOuMenor(numero)) {
        chuteNumeroSecreto.innerHTML += `<div>Valor inválido! O valor deve estar entre ${menorValor} e ${maiorValor}</div>`;
        return;
    } if (numero === numeroSecreto) {
        document.body.innerHTML = `
           <h2>Você acertou o número secreto!</h2>
           <h3>O número secreto era ${numeroSecreto}</h3>

           <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        chuteNumeroSecreto.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
    } else {
        chuteNumeroSecreto.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
    }
    
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente');
    window.location.reload();
})
