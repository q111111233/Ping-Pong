$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var number = parseInt($("#number").val());
    var output = convertor(number);
    $(".output").text(output);
    $("#story").show();
    event.preventDefault();
  });
});

function convertor(words){
  var nums = [];
  for(var i=1; i<=words; i++){
    if(i%3 === 0){
      nums.push("ping");
    }
    else   
      nums.push(i);
    }
  return nums;
}
