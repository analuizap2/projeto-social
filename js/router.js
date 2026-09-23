function navegar() {

    const rota = window.location.hash || "#inicio";

    const app = document.querySelector("#app");

    switch (rota) {

        case "#inicio":
            app.innerHTML = templateInicio();
            break;

        case "#projetos":
            app.innerHTML = templateProjetos();
            break;

        case "#cadastro":
            app.innerHTML = templateCadastro();
            configurarFormulario();
            break;

        case "#historico":
            app.innerHTML = templateHistorico();
            break;

        default:
            app.innerHTML = templateInicio();
    }
}

window.addEventListener("hashchange", navegar);