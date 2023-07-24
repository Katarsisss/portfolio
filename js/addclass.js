$(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ) {
            $('.navbar').addClass('active-menu');
        } else {
            $('.navbar').removeClass('active-menu');
        }
    })