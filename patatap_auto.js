/*****
Inputs:
  string:
    Input is expected to be a string containg keys and commas.
    e.g "w,,w,,w,,w,,"
    This example is a 8 beat measure that looks like the following,
    [W null W null W null W null]
    This is the string that contains the song you wish to play.
    
    For a better example, please see the string located at the end of this file.
  
  bpm
    (to-do)
    Input is expected to be a number.
    This will be the Beats per Minute of the song.
  
  beats
    (to-do)
    Input is expected to be a number.
    This is how many beats per measure.
    In the example above it is a 4 beat measure, which can be considered the standard.



******/

function play(string, bpm, beats) {
  bpm = bpm || 128;
  beats = beats || 1;
  var array = string.split(",");
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var keyObj = {};
  var bps = bpm / 60 * 1000 * beats;
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
