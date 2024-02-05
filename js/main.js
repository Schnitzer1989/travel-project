/* $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 40,
    startPosition: 1,
    item: 3,
  });
}); */



var owl = $('.owl-carousel');
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 40,
  startPosition: 1,
  item: 3,
});

$('.slider__button--next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slider__button--prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})
