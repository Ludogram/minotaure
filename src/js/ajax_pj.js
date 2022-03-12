var update_screen = function() {
    if ($('input:checked').length == 0) {
        $.ajax({
            url: "ajax.php?role=heartbeat",
            type: 'get',
            dataType: 'JSON',
            success: function(response){
                if (response == true) {
                    $('#loader').addClass("active");
                    $.ajax({
                        url: "ajax.php?role=pj",
                        context: document.body,
                        dataType : 'html',
                        success: function(html, code){
                            $('#character-wrapper').html(html);
                            $('#loader').removeClass("active");
                        },
                        timeout: 10000
                    });
                }
                setTimeout(update_screen, 8000 + Math.floor(Math.random() * 2000));
            },
            error: function() {
                setTimeout(update_screen, 24000 + Math.floor(Math.random() * 6000));
            },
            timeout: 5000
        });
    }
};

update_screen();
