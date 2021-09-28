$( document ).ready(function() {
  console.log( "ready!" );

    
  $( ".col-6" ).fadeIn( 2000 , function() {
            
    let card = $( ".card" )
    card.fadeIn(2000)
    card.animate({left: '150px'})
    card.animate({height: '500px', opacity: '0.4'}, "slow");
    card.animate({width: '500px', opacity: '0.8'}, "slow");
    card.animate({height: '300px', opacity: '0.4'}, "slow");
    card.animate({width: '300px', opacity: '0.8'}, "slow");
  });
  
  
 

   
    $( "button" ).click(function(e) {
      const parent = $(e.target).parent().parent();
      $(parent).fadeOut("slow")
    });

});
