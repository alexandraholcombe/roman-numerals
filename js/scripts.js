//Business Logic
var userInput = 0
var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
var arabicEquivalents = [1, 5, 10, 50, 100, 500, 1000];
var result = 0;
var thousandsPlace = 0;
var hundredsPlace = 0;
var tensPlace = 0;
var onesPlace = 0;
var finalAnswer = 0;

var placeConverter = function (char) {
  return parseInt(userInput.toString().charAt(char));
}

var placeAssigner = function(input) {
  finalAnswer = "";
  thousandsPlace = "";
  hundredsPlace = "";
  tensPlace = "";
  onesPlaces = "";
  if (input.toString().length === 4) {
    thousandsPlace = placeConverter(0)
    hundredsPlace = placeConverter(1);
    tensPlace = placeConverter(2);
    onesPlace = placeConverter(3);
  } else if (input.toString().length === 3) {
    hundredsPlace = placeConverter(0);
    tensPlace = placeConverter(1);
    onesPlace = placeConverter(2);
  } else if (input.toString().length === 2) {
    tensPlace = placeConverter(0);
    onesPlace = placeConverter(1);
  } else if (input.toString().length === 1) {
    onesPlace = placeConverter(0);
  };
  // console.log(ones(onesPlace));
  finalAnswer = thousands(thousandsPlace) + hundreds(hundredsPlace) + tens(tensPlace) + ones(onesPlace);
  return finalAnswer;
  finalAnswer = "";
}

var baseChecker = function(input){
  for(var index = 0; index < arabicEquivalents.length; index++) {
    if(input === arabicEquivalents[index]) {
      return romanNumerals[index];
    }
  }
};

var iAppender = function(input){
  for (var i = 1; i <= input; i++) {
    result += "I";
  };
};

var xAppender = function(input){
  for (var i = 1; i <= input; i++) {
    result += "X";
  };
};

var cAppender = function(input){
  for (var i = 1; i <= input; i++) {
    result += "C";
  };
};

var mAppender = function(input) {
  for (var i = 1; i <= input; i++) {
    result += "M";
}
}

var thousands = function(input) {
  result = "";
  if (input <= 3) {
    mAppender(input);
    return result;
  } else {
    "Too high, bitch"
  }
};

var hundreds = function(input) {
  result = "";
  if (input === 4) {
    result = "DC";
    return result;
  } else if (input === 9) {
    result = "CM";
    return result;
  } else if (input <= 3) {
    cAppender(input);
    return result;
  } else if(input => 5 && input < 9) {
    input = input - 5;
    result = "L";
    cAppender(input);
    return result;
  }
};

var tens = function(input) {
  result = "";
  if (input === 4) {
    result = "XL";
    return result;
  } else if (input === 9) {
    result = "XC";
    return result;
  } else if (input <= 3) {
    xAppender(input);
    return result;
  } else if(input => 5 && input < 9) {
    input = input - 5;
    result = "L";
    xAppender(input);
    return result;
  }
};

var ones = function(input) {
  result = "";
  if (input === 4) {
    result = "IV";
    return result;
    console.log(result);
  } else if (input === 9) {
    result = "IX";
    return result;
  } else if (input <= 3) {
    iAppender(input);
    return result;
  } else if(input => 5 && input < 9) {
    input = input - 5;
    result = "V";
    iAppender(input);
    return result;
  } else {
    return "Your number sucks";
  }
};

//User Interface Logic

$(function() {
  $("form").submit(function() {
    event.preventDefault();
    userInput = parseInt($("#user-input").val());

    $("#result").text(placeAssigner(userInput));
  });
});
