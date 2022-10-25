function cCesar(codific, texto, numIncremento) {
    numIncremento = Number(numIncremento);

    let mensagemFinal = "";

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let codigo = letra.charCodeAt();

        if (codific == "codificar") {
            codigo += numIncremento;
        } else {
            codigo -= numIncremento;
        }
        mensagemFinal += String.fromCharCode(codigo);
    }
    return mensagemFinal;
}

let escolhas = document.querySelector("select");

escolhas.addEventListener("change", function (evento) {
    evento.preventDefault();

    let incremento = document.getElementById("valorIncremento");

    if (evento.target.value == "cifraCesar") {
        incremento.style = "display: flex";
    } else {
        incremento.style = "display: none";
    }
});

let formulario = document.forms.formulario;

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let texto = formulario.texto.value;
    let escolha = formulario.escolhaMetodo.value;
    let botoes = formulario.codificar.value;
    let numIncremento = formulario.numIncrementos.value;
    let mensagemFinal = "";

    if (escolha == "cifraCesar") {
        mensagemFinal = cCesar(botoes, texto, numIncremento);
    } else {
        mensagemFinal = base64(botoes, texto);
    }

    let resultadoTexto = document.getElementById("saidaTexto");
    resultadoTexto.innerHTML = `${mensagemFinal}`;
});

function base64(codific, texto) {
    if (codific == "codificar") {
        return btoa(texto);
    } else {
        return atob(texto);
    }
}


