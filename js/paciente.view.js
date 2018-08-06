iniciarPaciente();

function iniciarPaciente() {
  var tabela = document.querySelector("#tabela-pacientes");
  
  var paulo = new Paciente("Paulo", 100, 2.0, 10);
  var pauloTr = criaPacienteTr();
  populaPacienteTr(paulo,pauloTr);
  tabela.appendChild(pauloTr);

  var joao = new Paciente("João", 80, 1.66, 40);
  var joaoTr = criaPacienteTr();
  populaPacienteTr(joao,joaoTr);
  tabela.appendChild(joaoTr);

  var erica = new Paciente("Erica", 54, 1.64, 14);
  var ericaTr = criaPacienteTr();
  populaPacienteTr(erica,ericaTr);
  tabela.appendChild(ericaTr);

  var douglas = new Paciente("Douglas", 85, 1.73, 24);
  var douglasTr = criaPacienteTr();
  populaPacienteTr(douglas,douglasTr);
  tabela.appendChild(douglasTr);

  var tatiana = new Paciente("Tatiana", 46, 1.55, 19);
  var tatianaTr = criaPacienteTr();
  populaPacienteTr(tatiana,tatianaTr);
  tabela.appendChild(tatianaTr);

}


//calcularImcPacientes();

function calcularImcPacientes() {
  var pacientes = document.querySelectorAll('.paciente');

  for(var i = 0; i < pacientes.length; i++) {
    var paciente = getPaciente(pacientes[i]);

    populaPacienteTr(paciente, pacientes[i]);
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

  return new Paciente(_nome, _peso, _altura, _gordura);
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

  var pesoValido = isPesoValido(paciente.peso);
  var alturaValida = isAlturaValida(paciente.altura);
  
  if(!pesoValido) {
    setPesoInvalido(paciente.peso, trPaciente);
  }

  if(!alturaValida) {
    setAlturaInvalida(paciente.altura, trPaciente);
  }

  if(pesoValido && alturaValida) {
    var imc = calculaImc(paciente.peso, paciente.altura);
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

  var acoesTd = document.createElement("td");
  acoesTd.classList.add("info-acoes");
  
  var botaoExcluir = document.createElement("button");
  botaoExcluir.classList.add("botao");
  botaoExcluir.classList.add("botao-remover");
  botaoExcluir.textContent = "Remover";

  botaoExcluir.addEventListener(
    "click", (evento) => {
      pacienteTr.classList.add("fadeout");
      setTimeout(() => {
         pacienteTr.parentNode.removeChild(pacienteTr);
      }, 500);
    });

  acoesTd.appendChild(botaoExcluir);
  
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);
  pacienteTr.appendChild(acoesTd);

  return pacienteTr;
}
