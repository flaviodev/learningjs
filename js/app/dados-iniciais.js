const iniciarPaciente = () => {
  var tabela = document.querySelector("#tabela-pacientes");
  
  adicionaPaciente(new Paciente("Paulo", 100, 2.0, 10), tabela);
  adicionaPaciente(new Paciente("João", 80, 1.66, 40), tabela);
  adicionaPaciente(new Paciente("Erica", 54, 1.64, 14), tabela);
  adicionaPaciente(new Paciente("Douglas", 85, 1.73, 24), tabela);
  adicionaPaciente(new Paciente("Tatiana", 46, 1.55, 19), tabela);
}

iniciarPaciente();