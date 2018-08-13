class PacientesView extends View {

    constructor(elemento) {
         super(elemento);
    }

    template(model) {

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Peso(kg)</th>
                        <th>Altura(m)</th>
                        <th>Gordura Corporal(%)</th>
                        <th>IMC</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.pacientes.map(p =>  `
                    <tr>
                        <td>${p.nome}</td>
                        <td>${p.peso}</td>
                        <td>${p.altura}</td>
                        <td>${p.gordura}</td>
                        <td>${p.imc}</td>
                        <td><button>Excluir</button></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        `;
    }
}