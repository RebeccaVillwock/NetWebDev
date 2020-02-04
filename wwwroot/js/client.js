$(function () {
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function (e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    });


    var displayDiscountCode = $("#code");
    var displayProductName = $("#product");

    //display first discount code and product name
    $('#discount1').on('click', function (e) {
        e.preventDefault();
        displayDiscountCode.html("1587");
        displayProductName.html("Italian Seasoning");


        
    });
    //display secound discount code and product name
    $('#discount2').on('click', function (e) {
        e.preventDefault();
        displayDiscountCode.html("8426");
        displayProductName.html("Genen Shouya");
    });
    //display third discount code and product name
    $('#discount3').on('click', function (e) {
        e.preventDefault();
        displayDiscountCode.html("6548");
        displayProductName.html("Schoggi Schokolade");
    });

    //close toast with enter
    $(document).on('keyup', function (event) {
        if (event.key === "Escape") {
            $('#toast').toast('hide');
        }
    });

});
