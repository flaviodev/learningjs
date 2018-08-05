var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var paciente = criaPaciente(nome, peso, altura, gordura);
  var pacienteTr = criaPacienteTr();

  populaPacienteTr(paciente, pacienteTr);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.nome.value = '';
  form.peso.value = '';
  form.altura.value = '';
  form.gordura.value = '';
});
