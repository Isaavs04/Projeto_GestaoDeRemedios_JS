$('#document').ready(function(){
    let remedios = document.getElementById('remedios')
    id = 0;
    $('#btnCadastrar').click(function(){
        //Pegando valores dos inputs e atribuindo as variáveis
        let nmRemedio = $('#nmRem').val();
        let qtdREm = $('#nrRem').val();
        let dtVal = $('#dtRem').val();
        let dosRem = $('#dosRem').val();
        //Criando elementos novos
        let divReme = document.createElement('div');
        let noomeRemedio = document.createElement('p');
        noomeRemedio.textContent = nmRemedio;
        let estoqueRem = document.createElement('p');
        estoqueRem.textContent = qtdREm;
        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('estilo-btn');
        //colocando na tela
        divReme.appendChild(noomeRemedio);
        divReme.appendChild(estoqueRem);
        divReme.appendChild(btnRemover);
        remedios.appendChild(divReme);
        $(btnRemover).click(function(){
            $(this).parent().remove();
        })

    })
})