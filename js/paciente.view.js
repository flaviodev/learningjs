calcularImcPacientes();

function calcularImcPacientes() {
  var pacientes = document.querySelectorAll('.paciente');

  for(var i = 0; i < pacientes.length; i++) {
    populaPacienteTr(getPaciente(pacientes[i]), pacientes[i]);
  }
}

function getPaciente(trPaciente) {
  var tdNome = trPaciente.querySelector('.info-nome');
  var tdPeso = trPaciente.querySelector('.info-peso');
  var tdAltura = trPaciente.querySelector('.info-altura');
  var tdGordura = trPaciente.querySelector('.info-gordura');

  var _nome = tdNome.textContent;
  var _peso = tdPeso.textContent;
  var _altura = tdAltura.textContent;
  var _gordura = tdGordura.textContent;

  return criaPaciente(_nome,_peso, _altura, _gordura);
}

function populaPacienteTr(paciente, trPaciente) {
  var tdNome = trPaciente.querySelector('.info-nome');
  var tdPeso = trPaciente.querySelector('.info-peso');
  var tdAltura = trPaciente.querySelector('.info-altura');
  var tdGordura = trPaciente.querySelector('.info-gordura');

  tdNome.textContent = paciente.nome;
  tdPeso.textContent = paciente.peso;
  tdAltura.textContent = paciente.altura;
  tdGordura.textContent = paciente.gordura;

  var pesoValido = paciente.isPesoValido();
  var alturaValida = paciente.isAlturaValida();
  
  if(!pesoValido) {
    setPesoInvalido(paciente.peso, trPaciente);
  }

  if(!alturaValida) {
    setAlturaInvalida(paciente.altura, trPaciente);
  }

  if(pesoValido && alturaValida) {
    var imc = paciente.imc();
    setImc(imc, trPaciente);
  } else {
    setPacienteInvalido(trPaciente);
  }
}

function setImc(imc, trPaciente) {
  var tdImc = trPaciente.querySelector('.info-imc');
  tdImc.textContent = imc.toFixed(2);
}

function setPesoInvalido(peso, trPaciente) {
  var tdPeso = trPaciente.querySelector('.info-peso');
  tdPeso.textContent = peso + ' (peso inválido)';
}

function setAlturaInvalida(altura, trPaciente) {
  var tdAltura = trPaciente.querySelector('.info-altura');
  tdAltura.textContent = altura + ' (altura inválida)';
}

function setPacienteInvalido(trPaciente) {
  trPaciente.classList.add("paciente-com-valor-invalido");
}

function criaPacienteTr() {
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

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}
