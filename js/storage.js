function salvarCadastro(cadastro) {

    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

    cadastros.push(cadastro);

    localStorage.setItem("cadastros", JSON.stringify(cadastros));
}


function obterCadastros() {

    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

    return cadastros;
}