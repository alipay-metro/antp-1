var start = $('input[type=hidden]').val();

$('.slide').css('left', (start - 1) * 144 + 'px');

//$('.nav-link').each(function (index) {
//  $(this).hover(function () {
//    var end = index + 1;
//    if (start !== end) {
//      $('.slide').attr('class', 'slide move' + start + end);
//      start = end;
//    }
//  });
//});

var timer1, timer2;

$('.nav-link').eq(2).hover(function () {
  clearTimeout(timer2);
  $('.dropdown').removeClass('close').addClass('open');
}, function () {
  timer1 = setTimeout(function () {
    $('.dropdown').removeClass('open').addClass('close');
  }, 300);
});

$('.dropdown').mouseleave(function () {
  timer2 = setTimeout(function () {
    $('.dropdown').removeClass('open').addClass('close');
  }, 300);
});

$('.dropdown').mouseenter(function () {
  clearTimeout(timer1);
  $('.dropdown').removeClass('close').addClass('open');
});