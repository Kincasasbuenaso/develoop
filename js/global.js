
$(document).ready(function() {
$('#carouselPartners .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
});

$('#datepickerLlegada').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#datepickerSalida').datepicker({
    uiLibrary: 'bootstrap4'
});

});

