/*****
Inputs:
  Array should look like this:
    [
      ["e"],
      ["o"],
      ["e"],
      ["o"]
    ]



******/

function play(string, bpm, time) {
  bpm = bpm || 128;
  time = time || 1;
  var array = string.split(",");
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var keyObj = {};
  var bps = bpm / 60 * 1000 * time;
  var spot = 0;

  for (var i = 0; i < alpha.length; i++) {
    var letter = alpha.substr(i,1);
    keyObj[letter] = jQuery.Event('keydown');
    keyObj[letter].which = i + 65;
  }

  setInterval(function() {
    var step = array[spot];

    for (var k = 0; k < step.length; k++) {
      if (step.substr(k, 1) !== "") {
        $(window).trigger(keyObj[step.substr(k, 1)]);
      }
    }
    
    if (spot === array.length - 1) {
      spot = 0;
    } else {
      spot++;
    }

  },bps);
}

play("w,,w,,w,,w,,\
e,,e,,e,,e,,\
w,,w,,w,,w,,\
e,,e,,e,,e,,\
wi,,wi,,wi,,wi,,\
ei,,ei,,ei,,ei,,\
wi,,wi,,wi,,wi,,\
ei,,ei,,ei,,ei,,\
wi,,win,,wi,,win,,\
ei,,ein,,ei,,ein,,\
wi,,win,,wi,,win,,\
ei,,ein,,ei,,ein,,\
wi,,win,,wi,n,win,,\
ei,,ein,,ei,n,ein,,\
wi,,win,,wi,n,win,,\
ei,,ein,,ei,n,ein,,", 128, 0.15);
