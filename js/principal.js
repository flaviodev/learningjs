var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPaciente = document.querySelector('#primeiro-paciente');
var tdPeso = trPaciente.querySelector('.info-peso');
var tdAltura = trPaciente.querySelector('.info-altura');
var tdImc = trPaciente.querySelector('.info-imc');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true; 
var alturaEhValida = true; 

if(peso <=0 || peso >= 1000) {
    pesoEhValido = false;
    tdPeso.textContent = 'peso inválido';
 }
 
 if(altura <= 0 || altura >= 3.00) {
   alturaEhValida = false;
   tdAltura.textContent = 'altura inválida';
 }
 
 if(pesoEhValido && alturaEhValida) {
    var imc = peso / ( altura * altura);
    tdImc.textContent = imc; 
 }