function configurarFormulario() {

    const formulario = document.querySelector("#formCadastro");

    if (!formulario) {
        return;
    }

    const telefone = document.querySelector("#telefone");
    const cpf = document.querySelector("#cpf");
    const cep = document.querySelector("#cep");


    telefone.addEventListener("input", function() {

        let valor = telefone.value.replace(/\D/g, "");

        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }

        if (valor.length > 0) {
            valor = "(" + valor;
        }

        if (valor.length > 3) {
            valor = valor.slice(0, 3) + ") " + valor.slice(3);
        }

        if (valor.length > 10) {
            valor = valor.slice(0, 10) + "-" + valor.slice(10);
        }

        telefone.value = valor;

        validarCampo(telefone);
    });


    cpf.addEventListener("input", function() {

        let valor = cpf.value.replace(/\D/g, "");

        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }

        if (valor.length > 3) {
            valor = valor.slice(0, 3) + "." + valor.slice(3);
        }

        if (valor.length > 7) {
            valor = valor.slice(0, 7) + "." + valor.slice(7);
        }

        if (valor.length > 11) {
            valor = valor.slice(0, 11) + "-" + valor.slice(11);
        }

        cpf.value = valor;

        validarCampo(cpf);
    });


    cep.addEventListener("input", function() {

        let valor = cep.value.replace(/\D/g, "");

        if (valor.length > 8) {
            valor = valor.slice(0, 8);
        }

        if (valor.length > 5) {
            valor = valor.slice(0, 5) + "-" + valor.slice(5);
        }

        cep.value = valor;

        validarCampo(cep);
    });


    function validarCampo(campo) {

        const container = campo.closest(".campo");

        if (!container) {
            return;
        }

        const mensagemExistente = container.nextElementSibling;


        if (campo.validity.valid) {

            container.classList.remove("erro");

            if (
                mensagemExistente &&
                mensagemExistente.classList.contains("mensagem-erro")
            ) {
                mensagemExistente.remove();
            }

            return;
        }


        container.classList.add("erro");


        if (
            mensagemExistente &&
            mensagemExistente.classList.contains("mensagem-erro")
        ) {
            mensagemExistente.remove();
        }


        const mensagem = document.createElement("div");

        mensagem.className = "mensagem-erro";


        if (campo.validity.valueMissing) {

            mensagem.textContent = "Este campo é obrigatório.";

        } else if (campo.validity.typeMismatch) {

            mensagem.textContent = "Digite um e-mail válido.";

        } else if (campo.validity.patternMismatch) {

            mensagem.textContent = "Digite o formato correto.";

        } else {

            mensagem.textContent = "Verifique o preenchimento deste campo.";
        }


        container.insertAdjacentElement("afterend", mensagem);
    }


    formulario.addEventListener("submit", function(event) {

        event.preventDefault();


        const campos = formulario.querySelectorAll("input, select");


        campos.forEach(function(campo) {

            validarCampo(campo);

        });


        if (!formulario.checkValidity()) {
            return;
        }


        const dadosFormulario = new FormData(formulario);

        const cadastro = Object.fromEntries(dadosFormulario.entries());

        salvarCadastro(cadastro);

        Swal.fire({
        title: "Cadastro realizado!",
        text: "O voluntário foi cadastrado com sucesso.",
        icon: "success",
        confirmButtonText: "OK"
    });

        formulario.reset();


        campos.forEach(function(campo) {

            const container = campo.closest(".campo");

            if (container) {

                container.classList.remove("erro");

                const mensagem = container.nextElementSibling;

                if (
                    mensagem &&
                    mensagem.classList.contains("mensagem-erro")
                ) {
                    mensagem.remove();
                }
            }
        });
    });
}
