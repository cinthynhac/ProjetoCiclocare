const form =
document.getElementById('cycleForm');

form.addEventListener('submit', (event) => {

  event.preventDefault();

  const nascimento =
  document.getElementById('nascimento')
  .value;

  const duracaoCiclo =
  document.getElementById('duracaoCiclo')
  .value;

  const duracaoMenstruacao =
  document.getElementById('duracaoMenstruacao')
  .value;

  const ultimaMenstruacao =
  document.getElementById('ultimaMenstruacao')
  .value;

  if(
    nascimento === '' ||
    duracaoCiclo === '' ||
    duracaoMenstruacao === '' ||
    ultimaMenstruacao === ''
  ){

    alert(
      'Preencha todos os campos'
    );

    return;
  }

  const dadosCiclo = {

    nascimento,
    duracaoCiclo,
    duracaoMenstruacao,
    ultimaMenstruacao
  };

  console.log(dadosCiclo);

  window.location.href =
  'index.html';

});