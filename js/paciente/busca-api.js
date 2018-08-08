var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var tabela = document.querySelector("#tabela-pacientes");
        
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach((p) => adicionaPaciente(new Paciente(p.nome, p.peso, p.altura, p.gordura),tabela));
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});