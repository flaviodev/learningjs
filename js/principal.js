

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
  const paciente = getPaciente(pacientes[i]);

  var pesoValido = paciente.isPesoValido();
  var alturaValida = paciente.isAlturaValida();
  var imc = paciente.imc();

  setImc(imc, pacientes[i]);
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

  return criaPaciente(_nome,_peso, _altura, gordura);
}

function setImc(imc, trPaciente) {
  var tdImc = trPaciente.querySelector('.info-imc');
  tdImc.textContent = imc.toFixed(2);
}


/* -------------------------- */

function calculaImcDoPaciente(trPaciente) {
  var tdPeso = trPaciente.querySelector('.info-peso');
  var tdAltura = trPaciente.querySelector('.info-altura');
  var tdImc = trPaciente.querySelector('.info-imc');

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  
  if(isPesoEAlturaValidos(trPaciente)) {
    tdImc.textContent = calculaImc(peso,altura).toFixed(2);
  }
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




