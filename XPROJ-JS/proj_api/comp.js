let botao = document.querySelector('button');
botao.addEventListener('click', function() {

    let cep = document.querySelector('#cep').value;
    let api = `https://viacep.com.br/ws/${cep}/json/`;

    let request = new XMLHttpRequest();
    request.open('GET', api);

    request.onload = function() {
        let ender = JSON.parse(request.responseText);

        let logradouro = document.querySelector('#logradouro');
        logradouro.innerHTML = ender.logradouro;

        let bairro = document.querySelector('#bairro');
        bairro.innerHTML = ender.bairro;

        let localidade = document.querySelector('#localidade');
        localidade.innerHTML = ender.localidade;
    }

    request.send();
  
});