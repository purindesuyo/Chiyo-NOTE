var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var checkbox = document.getElementById("checkbox");


// Listen for changes to the inputs
input1.addEventListener("input", function() {
  // Set the input value to "chiyonoO"
  input1.value = "It's Sakura Chiyono O!!!";
});
input2.addEventListener("input", function() {
  // Set the input value to "chiyonoO"
  input2.value = "It's Sakura Chiyono O!!!";
});

input1.addEventListener("input", function() {
  if (input1.value != "" && input2.value != "") {
    checkbox.checked = true;
  }else{
    checkbox.checked = false;
  }
});
input2.addEventListener("input", function() {
  if (input1.value != "" && input2.value != "") {
    checkbox.checked = true;
  }else{
    checkbox.checked = false;
  }
});
  
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.parallax').parallax();
});

var instance = M.Parallax.getInstance(elem);



