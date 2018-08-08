const setImc = (imc, trPaciente) => trPaciente.querySelector('.info-imc').textContent = imc.toFixed(2);

const setPesoInvalido = (peso, trPaciente) => trPaciente.querySelector('.info-peso').textContent = peso + ' (peso inválido)';

const setAlturaInvalida = (altura, trPaciente) => trPaciente.querySelector('.info-altura').textContent = altura + ' (altura inválida)';

const setPacienteInvalido = (trPaciente) => trPaciente.classList.add("paciente-com-valor-invalido");

const populaPacienteTr = (paciente, trPaciente) => {
    var tdNome = trPaciente.querySelector('.info-nome');
    var tdPeso = trPaciente.querySelector('.info-peso');
    var tdAltura = trPaciente.querySelector('.info-altura');
    var tdGordura = trPaciente.querySelector('.info-gordura');
  
    tdNome.textContent = paciente.nome;
    tdPeso.textContent = paciente.peso;
    tdAltura.textContent = paciente.altura;
    tdGordura.textContent = paciente.gordura;
    
    if(!paciente.pesoValido) {
      setPesoInvalido(paciente.peso, trPaciente);
    }
  
    if(!paciente.alturaValida) {
      setAlturaInvalida(paciente.altura, trPaciente);
    }
  
    if(paciente.pesoValido && paciente.alturaValida) {
      setImc(paciente.imc, trPaciente);
    } else {
      setPacienteInvalido(trPaciente);
    }
  }
  
const criaPacienteTr = () => {
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

const adicionaPaciente = (paciente, tabela) => {

  var pacienteTr = criaPacienteTr();
  populaPacienteTr(paciente, pacienteTr);
  tabela.appendChild(pacienteTr);

  var campoFiltro = document.querySelector("#filtrar-tabela");

  var pacientes = document.querySelectorAll(".paciente");
  filtraPacientes(campoFiltro.value, pacientes);
};