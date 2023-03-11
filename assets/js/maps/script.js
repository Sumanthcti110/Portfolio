jQuery(function($) {
    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    // console.log(new Date().getFullYear());
    new NextParticle(document.all.logo);
    document.getElementById('enter-btn').addEventListener('click', () => {
        $('.logo-wrap').slideUp(500);
    });

    document.getElementById('last-modi').innerText = document.lastModified;

    (function() {
        $('#successmail').hide();
        $('#errormail').hide();
        $('#preloader')
            .delay(200)
            .fadeOut('slow');
        $('#copyYear').html('2018-' + new Date().getFullYear());
    })();

    $(function() {
        $('#contactForm').submit(function(e) {
            e.preventDefault();
            $('#successmail').hide(500);
            $('#errormail').hide(500);
            var form_data = $(this).serialize();
            $.ajax({
                    type: 'POST',
                    url: 'mail.php',
                    dataType: 'json', // Add datatype
                    data: form_data,
                })
                .done(function(data) {
                    console.log(data);
                    $('#errormail').hide();
                    $('#successmail').show(700);
                    $('#contactForm').trigger('reset');
                })
                .fail(function(data) {
                    $('#successmail').hide();
                    $('#errormail').show(700);
                    console.log(data);
                });
        });
    });

    lightbox.option({
        alwaysShowNavOnTouchDevices: true,
        wrapAround: true,
        fadeDuration: 800,
        disableScrolling: true,
    });

    // Gallery Images
    // g-img class is used to copy image src to anchore tag
    // href value to activate lightbox
    // $('.g-img').each(function () {
    //     $(this).attr("href", $(this).find('img').attr('src'));
    // });

    // $("#Submit").click(function(){
    //     var data = {
    //         name: $("#InputName").val(),
    //         email: $("#InputEmail").val(),
    //         subject: $("#InputSubject").val(),
    //         message: $("#message-text").val()
    //     };
    //     $.ajax({
    //         type: "POST",
    //         url: "sendemail.php",
    //         data: $("#contactForm").serialize(),
    //         success: function(){
    //             alert("Success");
    //         },
    //         error: function(){
    //             alert("Error");
    //         }
    //     });
    // });
}); // JQuery end