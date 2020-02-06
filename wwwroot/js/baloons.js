$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });

    //array to randomize attention seeker
    var attentionSeeker = ['animated bounce', 'animated flash', 'animated pulse', 'animated rubberBand', 'animated shake', 'animated swing', 'animated tada', 'animated wobble', 'animated jello', 'animated heartBeat'];
    //randomizing object to select attention seeker
    var rand = Math.floor(Math.random() * 10);
    //select and change action when page loads
    $('#animation').removeClass().addClass(attentionSeeker[rand]);

    //show toast when no ballons are selected
    // preload audio
    var toast = new Audio('media/toast.wav');
        
    $('#submit').on('click', function (e) {
        var isOneChecked = false;
        $('.form-check-input').each(function () {
            if ($(this).prop("checked") == true) {
                isOneChecked = true;
            }
        });

        if (!isOneChecked) {
            e.preventDefault();
            // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
            $('#toast').toast({ autohide: false }).toast('show');
        }

    });

    //select or unselect all check boxes box
    $('#allCheck').on('change', function () {
        //all checked
        if ($(this).is(':checked')) {
            $('.form-check-input').each(function () {
                // make the image visible
                $('#' + this.id + 'Img').css('visibility', 'visible')
                // animate balloon in
                $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown');
                //check all boxes
                $('.form-check-input').each(function () {
                    $(this).prop('checked', true);
                });
            });
        } else {
            $('.form-check-input').each(function () {
                // make the image visible
                $('#' + this.id + 'Img').css('visibility', 'visible')
                // animate balloon in/out based on checkbox
                $('#' + this.id + 'Img').addClass('animated bounceOutUp');
                //uncheck all boxes
                $('.form-check-input').each(function () {
                    $(this).prop('checked', false);
                });
            });
        }
    });


    $('.form-check-label').mouseover(function () {
        $('#animation').css('color', $(this).data('color'));
    });


    $('.form-check-label').mouseleave(function () {
        $('#animation').css('color', 'black');
    });
           
    
    
});