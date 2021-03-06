$(document).ready(function () {


    function enviarEmail() {

        var $requisicao = $.ajax({
            method: "POST",
            url: 'http://contato-twsatc.rhcloud.com/contato-api/email',
            crossDomain: true,
            data: {
                nome: $("#nome").val(),
                email: $("#email").val(),
                telefone: $("#telefone").val(),
                mensagem: $("#mensagem").val(),
                para: $("#para").val()
            }
        });

        $requisicao.then(function (resposta) {

            $("#carregando").hide();
            if (resposta === true) {
                $("#contact-form").trigger("reset");
                $("#mensagem-sucesso").addClass("show");
            } else {
                $("#mensagem-erro").addClass("show");
            }
        });
    }


    $("#contact-form").on("submit", function (event) {
        event.preventDefault();
        enviarEmail();
    });

    $(document).ajaxStart(function () {
        $("#carregando").show();
    });
    
    var cont = 0;

    setInterval(function () {
        if (cont === 0 ) {
           $('.header').css({
            'transition': '1s',
            'opacity':'1',
        });
           cont++;

       } else {

        $('.header').css({
            'trasition': '1s',
            'opacity':'1',
        });
        cont = 0;
    }



}, 2000);

    $('.headerList').siblings('.list').hide();

    $('.headerList').click(function(){
        $(this).siblings().slideToggle();
    });

    

});
