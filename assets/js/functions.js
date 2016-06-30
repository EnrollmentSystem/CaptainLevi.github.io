$(function() {
  setInterval(function(){worksJelly()}, 4000);

});

function worksJelly(){
  var randNum = Math.floor(Math.random() * $('.des-img').length) + 1
  $('.des-img').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}
