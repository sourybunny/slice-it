var isPlaying=false;

const fruits=["./images/banana.png",
"./images/pear.png",
"./images/grapes.png",
"./images/orange.png",
"./images/pineapple.png",
"./images/melon.png",
"./images/lemon.png",
"./images/strawberry.png",
"./images/basket.png"];
var score;
var lives=3;
var fallcount;
var movefruit;
$('button').on('click',function(){
  if(isPlaying==true){
    score=0;
    isPlaying=false;
    lives=3;
    clearInterval(movefruit);
    $('#life').html("");
    $('#score').html(score);
    $('.start').html('start');
    $('.fruit').hide();
    $("#getfruit").attr("src","");
  }else{
    score=0;
    lives=3;
    isPlaying=true;
    $('#score').html(score);
    $('.start').html('reset');
    $('.gameover').hide();
    showLives();
    getFruits();
    }
})
$("#getfruit").mouseover(function(){
  score++;
  $("#score").html(score);
  $("#sound")[0].play();
  clearInterval(movefruit);
  $("#getfruit").hide("explode",500);
  setTimeout(getFruits,500);
});

function showLives(){
      $("#life").empty();
      for(var i=0;i<lives;i++){
    $('#life').append('<i class="fa fa-gratipay" aria-hidden="true"></i>');
    }
}
var fruitnum;
function getFruits(){
  $('.fruit').show();
  fruitnum=Math.floor(Math.random()*9);
  console.log(fruitnum)
  $("#getfruit").attr("src",fruits[fruitnum]);
  $("#getfruit").css({'top':-40,'left':Math.random()*($('.fruitbox').width()-100)})
  fallcount=Math.floor(Math.random()*5)+1;
  movefruit=setInterval(function(){
    $("#getfruit").css('top',$("#getfruit").position().top+fallcount);
    if($("#getfruit").position().top>$(".fruitbox").height()){
    if(lives>1){
        fruitnum=Math.floor(Math.random()*8);
  console.log(fruitnum)
  $("#getfruit").attr("src",fruits[fruitnum]);
  $("#getfruit").css({'top':-60,'left':Math.random()*($('.fruitbox').width()-100)})
  fallcount=Math.floor(Math.random()*5)+1;
      lives--;
      showLives();
    }else{
     lives=0;
      showLives();
      isPlaying=false;
      $('.start').text('start')
      clearInterval(movefruit);
      $('.gameover').show();
      $('#finalscore').html(score);
    }
  }
  },10);
  
}
