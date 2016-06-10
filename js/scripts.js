$(document).ready(function() {
  $("#blank form").submit(function(event) {
    $(".output").empty();
    var number = $("#number").val();
    if( number.match(/^[1-9]\d*$/)){
      for(var i=1; i<=parseInt(number); i++){
        $(".output").append("<li>" + convertor(i) + "</li>");
      }
    }
    else{
      $(".output").append("<h3>Please enter a positive integer<h3>");
    }

    $("#story").show();
    event.preventDefault();
  });
});

function convertor(num){
  if(num%3 === 0 || num%5 === 0){
    if(num%15 === 0){
      return "pingpong";
    }
    else if(num%3 === 0){
      return "ping";
    }
    else{
      return "pong";
    }
  }
  else{
    return num;
  }
}
