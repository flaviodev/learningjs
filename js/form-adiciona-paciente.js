var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var paciente = extrairPacienteDoFormulario(form);
  var pacienteTr = criaPacienteTr();

  populaPacienteTr(paciente, pacienteTr);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
});

function extrairPacienteDoFormulario(form) {
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  return criaPaciente(nome, peso, altura, gordura);
}
