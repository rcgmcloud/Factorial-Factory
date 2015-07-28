//This function should return n!
function factorial (n) {
var total = 1;
  for(var i = n; i > 0; i--){
    total *= i;
  }
  if (n < 0){
  total = undefined;
  }
  return total;
}