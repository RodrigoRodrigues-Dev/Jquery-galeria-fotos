$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botaoCancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class ="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#endereço-imagem-nova').val('');
    }); 
})


