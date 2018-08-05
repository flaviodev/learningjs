var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
  populaPaciente(pacientes[i]);
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var nomeTd = document.createElement("td");
  nomeTd.classList.add("info-nome");
  var pesoTd = document.createElement("td");
  pesoTd.classList.add("info-peso");
  var alturaTd = document.createElement("td");
  alturaTd.classList.add("info-altura");
  var gorduraTd = document.createElement("td");
  gorduraTd.classList.add("info-gordura");
  var imcTd = document.createElement("td");
  imcTd.classList.add("info-imc");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);


  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  populaPaciente(pacienteTr);

  form.nome.value = '';
  form.peso.value = '';
  form.altura.value = '';
  form.gordura.value = '';
});

function populaPaciente(trPaciente) {
  var tdPeso = trPaciente.querySelector('.info-peso');
  var tdAltura = trPaciente.querySelector('.info-altura');
  var tdImc = trPaciente.querySelector('.info-imc');

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  
  if(isPesoEAlturaValidos(trPaciente)) {
    tdImc.textContent = calculaImc(peso,altura).toFixed(2);
  }
}


function calculaImc(peso, altura) {
  return peso / ( altura * altura);
}

function isPesoEAlturaValidos(trPaciente) {

  var tdPeso = trPaciente.querySelector('.info-peso');
  var tdAltura = trPaciente.querySelector('.info-altura');

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = true; 
  var alturaEhValida = true; 

  if(peso <=0 || peso >= 200) {
    pesoEhValido = false;
    tdPeso.textContent =  tdPeso.textContent + ' (peso inválido)';
    trPaciente.classList.add("paciente-com-valor-invalido");
  }
  
  if(altura <= 0 || altura >= 3.00) {
    alturaEhValida = false;
    tdAltura.textContent = tdAltura.textContent + ' (altura inválida)';
    trPaciente.classList.add("paciente-com-valor-invalido");
  }
  
  return pesoEhValido && alturaEhValida;
}