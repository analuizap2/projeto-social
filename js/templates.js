function templateInicio() {
    return `
        <section>
            <h2>Sobre o Instituto</h2>

            <img
                src="../imagens/doacao-de-comida.png"
                alt="Voluntários realizando uma ação solidária pelo Instituto Mãos que Ajudam"
            >

            <p>
                O Instituto Mãos que Ajudam trabalha para promover ações sociais
                e incentivar a solidariedade e o voluntariado.
            </p>
        </section>

        <section>
            <h2>Nossas ações</h2>

            <span class="badge">Campanhas ativas</span>

            <p>
                Atualmente, o Instituto realiza campanhas de arrecadação
                de alimentos, agasalhos e materiais escolares.
            </p>
        </section>

        <section>
            <div class="alerta">
                <strong>Atenção:</strong>
                As doações podem ser entregues nos pontos de coleta
                do Instituto Mãos que Ajudam.
            </div>
        </section>

        <section>
            <div class="toast">
                <strong>Obrigado por ajudar!</strong>

                <p>
                    Sua participação pode fazer a diferença
                    na vida de muitas pessoas.
                </p>
            </div>
        </section>

        <section>
            <h2>Contato</h2>

            <p>E-mail: contato@maosqueajudam.org</p>
            <p>Telefone: (41) 99999-9999</p>
        </section>
    `;
}
const campanhas = [
    {
        titulo: "Campanha de Alimentos",
        descricao: "Arrecadação de alimentos para famílias em situação de vulnerabilidade."
    },
    {
        titulo: "Campanha do Agasalho",
        descricao: "Arrecadação de roupas e agasalhos para ajudar durante os períodos de frio."
    },
    {
        titulo: "Campanha Material Escolar",
        descricao: "Arrecadação de materiais escolares para crianças e adolescentes."
    }
];
function templateProjetos() {
    return `
        <section>
            <h2>Projetos e iniciativas</h2>

            <p>
                Conheça os projetos e iniciativas do Instituto Mãos que Ajudam
                e veja como você pode participar.
            </p>
        </section>

        <section id="voluntario">
            <h2>Seja um voluntário</h2>

            <p>
                O trabalho voluntário é uma forma de contribuir diretamente
                com as ações do Instituto.
            </p>

            <ul>
                <li>Participar das campanhas de arrecadação.</li>
                <li>Auxiliar na organização das doações.</li>
                <li>Apoiar as ações realizadas pelo Instituto.</li>
            </ul>
        </section>

        <article id="campanhas">
            <h2>Campanhas de doação</h2>

        ${campanhas.map(campanha => `
    <section class="campanha">
        <h3>${campanha.titulo}</h3>

        <p>
            ${campanha.descricao}
        </p>
    </section>
`).join("")}
        </article>

        <section class="como-ajudar" id="como-ajudar">
            <h2>Como ajudar</h2>

            <p>
                Você pode contribuir sendo voluntário ou participando
                das campanhas de doação.
            </p>

            <a href="#cadastro">Quero ser voluntário</a>
        </section>
    `;
}
function templateCadastro() {
    return `
        <section class="cadastro">

            <h2>Cadastro de voluntário</h2>

            <p>
                Preencha o formulário abaixo para participar
                das ações do Instituto Mãos que Ajudam.
            </p>

            <form id="formCadastro" novalidate>

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <div class="campo">
                        <label for="nome">Nome completo:</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>

                    <div class="campo">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="campo">
    <label for="nascimento">Data de nascimento:</label>
    <input
        type="date"
        id="nascimento"
        name="nascimento"
        min="1900-01-01"
        max="2026-12-31"
        required
    >
</div>


                    <div class="campo">
                        <label for="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            maxlength="14"
                            required
                        >
                    </div>

                    <div class="campo">
                        <label for="telefone">Telefone:</label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                            maxlength="15"
                            required
                        >
                    </div>

                </fieldset>


                <fieldset>
                    <legend>Endereço</legend>

                    <div class="campo">
                        <label for="cep">CEP:</label>
                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            pattern="[0-9]{5}-[0-9]{3}"
                            maxlength="9"
                            required
                        >
                    </div>

                    <div class="campo">
                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" required>
                    </div>

                    <div class="campo">
                        <label for="numero">Número:</label>
                        <input type="number" id="numero" name="numero" required>
                    </div>

                    <div class="campo">
                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" required>
                    </div>

                    <div class="campo">
                        <label for="estado">Estado:</label>

                        <select id="estado" name="estado" required>
                            <option value="">Selecione</option>
                            <option value="PR">Paraná</option>
                            <option value="SP">São Paulo</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="RS">Rio Grande do Sul</option>
                        </select>
                    </div>

                </fieldset>


                <fieldset>
                    <legend>Área de atuação</legend>

                    <div class="campo">
                        <label for="area">Escolha uma área:</label>

                        <select id="area" name="area" required>
                            <option value="">Selecione</option>
                            <option value="alimentos">Alimentos</option>
                            <option value="agasalho">Agasalho</option>
                            <option value="escolar">Material escolar</option>
                        </select>
                    </div>

                </fieldset>


                <fieldset>
                    <legend>Disponibilidade</legend>

                    <div class="campo">
                        <label>
                            <input
                                type="checkbox"
                                name="disponibilidade"
                                value="semana"
                                id="semana"
                            >
                            Durante a semana
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="disponibilidade"
                                value="fimSemana"
                                id="fimSemana"
                            >
                            Finais de semana
                        </label>
                    </div>
                </fieldset>


                <button type="submit">Enviar cadastro</button>

            </form>

        </section>
    `;
}
function templateHistorico() {

    const cadastros = obterCadastros();

    if (cadastros.length === 0) {
        return `
            <section class="historico">
                <h2>Voluntários cadastrados</h2>
                <p>Nenhum voluntário cadastrado até o momento.</p>
            </section>
        `;
    }

    const listaCadastros = cadastros.map(function(cadastro) {

        return `
            <div class="card-cadastro">
                <h3>${cadastro.nome}</h3>
                <p><strong>E-mail:</strong> ${cadastro.email}</p>
                <p><strong>Telefone:</strong> ${cadastro.telefone}</p>
                <p><strong>Cidade:</strong> ${cadastro.cidade}</p>
                <p><strong>Área de atuação:</strong> ${cadastro.area}</p>
            </div>
        `;

    }).join("");

    return `
        <section class="historico">

            <h2>Voluntários cadastrados</h2>

            <div class="lista-cadastros">
                ${listaCadastros}
            </div>

        </section>
    `;
}