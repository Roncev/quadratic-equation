module.exports = function solveEquation(equation) {
  equation = equation.split('').filter(function (x) {return x!= " "}).join('').split("x");
  var answer = [,,];
  console.log(equation);
  var x1, x1;
  var a = parseInt(equation[0]);
  var b = parseInt(equation[1].split('').slice(2, equation[1].length).join(''));
  var c = parseInt(equation[2]);
  console.log(a, b, c);
  var D = b*b - 4*a*c;
  console.log(D);
  if (D>0) {
    answer[0] = Math.round(((-1)*b + Math.sqrt(b*b-4*a*c)) /(2*a));
    answer[1] = Math.round(((-1)*b - Math.sqrt(b*b-4*a*c))/(2*a));

  }
console.log(answer)
return answer.sort(function(x,y) {return x-y});

}
