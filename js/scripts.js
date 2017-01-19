var userInput = 0
var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
var arabicEquivalents = [1, 5, 10, 50, 100, 500, 1000];
var firstThree;
var result = "I";

var settingBase = function(input) {
  result = "I"
  for(var index = 0; index < arabicEquivalents.length; index++) {
    if(input === arabicEquivalents[index]) {
      return romanNumerals[index];
    } else if (input <= 3) {
      for (var i = 0; i <= input; i++) {
        result += "I";
        return result;
      };
    };
  };
};



$(function() {
  $("form").submit(function() {
    event.preventDefault();
    userInput = parseInt($("#user-input").val());

    $("#result").text(settingBase(userInput));
  });
});
