$(document).ready(function(){

    $('.cross').hide();
    $('.menu-mobile').hide();
    
    $('.hamburger').click(function(){
        $('.menu-mobile').slideToggle("slow",function(){
            $('.cross').show();
            $('.hamburger').hide();
            
        });
        
    });
    
    $( ".cross" ).click(function() {
        $( ".menu-mobile" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });

    }); 

    
});