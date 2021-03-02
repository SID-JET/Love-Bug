document.querySelector(".big-heading").addEventListener("click", function(){var audio = new Audio("audio/laly1.aac");
audio.play();
animation();
if($("h1").text()==="I Love you so much Sid!!!"){$("h1").text("I Love you so much Siddy bear!!");}
else{$("h1").text("I Love you so much Sid!!!");} 
});

function animation(){
var a = document.querySelector(".big-heading");
  a.classList.add("pressed");
  setTimeout(function() {a.classList.remove("pressed")}, 100);
}
