$(function(){
    // Adjust the height of the sider

    var winH = $(window).height(),
        navH = $('.navbar').innerHeight(),
        upperbar = $('.upper-bar').height();



    $('.slider, .carousel-item').height(winH - (navH + upperbar));


    // Shuffle images
    $('.featured-work ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        
        if($(this).data('class') === 'all'){
            $('.images .col-md').css('opacity', 1)
        } else{
            $('.images .col-md').css('opacity', '0.08');
            $($(this).data('class')).css('opacity', 1);
            
        }
    })






});