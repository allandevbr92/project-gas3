// Primeiro Produto


const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const precoAlcool = parseFloat(document.querySelector('#preco-alcool').value);
    const precoGasolina = parseFloat(document.querySelector('#preco-gasolina').value);

    if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
        result.innerHTML = '<p class="error">Por favor, preencha os valores corretamente.</p>';
    } else {
        const razaoPreco = precoAlcool / precoGasolina * 100;
        if (razaoPreco <= 70) {
            result.innerHTML = '<p><text>Abasteça com Etanol</text></p>';
        } else {
            result.innerHTML = '<p><text>Abasteça com Gasolina</text></p>';
        }
    }
});


// Segundo Produto



const abastecerForm = document.getElementById("abastecer-form");
const inputValor = document.getElementById("valor-abastecimento");
const inputLitros = document.getElementById("litros-abastecidos");
const inputPreco = document.getElementById("preco-combustivel");
const resultado = document.querySelector(".resultado");

abastecerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const valorAbastecimento = parseFloat(inputValor.value.replace(",", "."));
    const precoLitro = parseFloat(inputPreco.value.replace(",", "."));

    const litrosAbastecidos = (valorAbastecimento / precoLitro).toFixed(2);


    inputLitros.textContent = litrosAbastecidos.replace(".", ",");
    inputLitros.insertAdjacentElement("afterend", litrosLabel);
    resultado.style.display = "block";
    
});



// Terceiro Produto


const calculatorForm = document.getElementById('calculator');
const resultDiv = document.getElementById('resultado');

calculatorForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const kmLitroGasolina = parseFloat(calculatorForm.elements['km-litro-gasolina'].value);
    const kmLitroEtanol = parseFloat(calculatorForm.elements['km-litro-etanol'].value);
    const litros = parseFloat(calculatorForm.elements['litros'].value);

    if (!kmLitroGasolina || kmLitroGasolina <= 0 || !kmLitroEtanol || kmLitroEtanol <= 0 || !litros || litros <= 0) {
        resultDiv.innerText = 'Por favor, preencha todos os campos com valores válidos.';
        return;
    }

    const kmGasolina = kmLitroGasolina * litros;
    const kmEtanol = kmLitroEtanol * litros;

    resultDiv.innerHTML = `${litros.toFixed(2)} litros de gasolina, irá percorrer ${kmGasolina.toFixed(2)} km.<br>${litros.toFixed(2)} litros de etanol, irá percorrer ${kmEtanol.toFixed(2)} km.`;
});


// FAQ

$(document).ready(function() {
    $('.accordion-button').click(function() {
      $(this).toggleClass('active');
      $(this).next().slideToggle('fast');
    });
  });