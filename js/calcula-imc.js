

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
  calculaImcDoPaciente(pacientes[i]);
}

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




