const form = document.querySelector('.inputs');
const buttonLimpar = document.getElementById('limpar');
const resultadoEl = document.getElementById('resultado-texto');

form.addEventListener('submit', calcular);
buttonLimpar.addEventListener('click', limpar);

function calcular(e) {
  e.preventDefault();

  const valores = lerCoeficientes();

  if (!valores) {
    resultadoEl.innerText = 'Preencha todos os coeficientes.';
    return;
  }

  const resultado = calcularBhaskara(valores.a, valores.b, valores.c);

  renderResultado(resultado);
}

function lerCoeficientes() {
  const inputA = document.getElementById('num1');
  const inputB = document.getElementById('num2');
  const inputC = document.getElementById('num3');

  if (!inputA.value || !inputB.value || !inputC.value) {
    return null;
  }

  return {
    a: Number(inputA.value),
    b: Number(inputB.value),
    c: Number(inputC.value)
  };
}

function calcularBhaskara(a, b, c) {
  if (a === 0) {
    return { erro: 'Coeficiente A não pode ser 0.' };
  }

  const delta = calcularDelta(a, b, c);

  if (delta > 0) {
    const raizDelta = Math.sqrt(delta);

    return {
      tipo: 'duas_raizes',
      raiz1: (-b + raizDelta) / (2 * a),
      raiz2: (-b - raizDelta) / (2 * a)
    };
  }

  if (delta === 0) {
    return {
      tipo: 'raiz_unica',
      raiz: -b / (2 * a)
    };
  }

  return {
    tipo: 'sem_raizes'
  };
}

function renderResultado(resultado) {
  if (resultado.erro) {
    resultadoEl.innerText = resultado.erro;
    return;
  }

  switch (resultado.tipo) {
    case 'duas_raizes':
      resultadoEl.innerText =
        `Raiz 1 = ${formatarNumero(resultado.raiz1)} | Raiz 2 = ${formatarNumero(resultado.raiz2)}`;
      break;

    case 'raiz_unica':
      resultadoEl.innerText =
        `Raiz única = ${formatarNumero(resultado.raiz)}`;
      break;

    case 'sem_raizes':
      resultadoEl.innerText =
        'Delta < 0, não existem raízes reais.';
      break;
  }
}

function formatarNumero(numero) {
  return Number.isInteger(numero) ? String(numero) : numero.toFixed(2);
}

function calcularDelta(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}

function limpar() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('num3').value = '';

  resultadoEl.innerText = '';
}
