$ = jQuery;
$( function() {
  $('.top li').each(function(){
  var pathname = window.location.pathname.split( '/' );
  
  if($(this).hasClass('backend') && pathname[1] === 'backend'){
    $(this).hide();
  }else if($(this).hasClass('frontend') && pathname[1] !== 'frontend'){
    $(this).hide();
  }else{
   $(this).show();
   }
   
  });
});
