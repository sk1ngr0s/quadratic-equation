module.exports = function solveEquation(equation) {
  // your implementation
  let str = equation.split(" ")
  let solArr = [];
  let a = str[0]
  let b = (str[3] + str[4])
  let c = (str[7] + str[8])
  let d = Math.round(b * b - 4 * a * c)
  solArr[0] = Math.round((-b + Math.sqrt(d)) / (2 * a))
  solArr[1] = Math.round((-b - Math.sqrt(d)) / (2 * a))

  return (solArr.sort((a, b) => a - b))
}