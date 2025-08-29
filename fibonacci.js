// function fibs(n) {
//   let array = [0, 1];
//   if (n < 2) {
//     return array;
//   }
//   for (let i = 2; i < n; i++) {
//     array[i] = array[i - 1] + array[i - 2];
//   }
//   return array;
// }  ** this is the iterative method

function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const array = fibsRec(n - 1);
  return array.concat(array[array.length - 1] + array[array.length - 2]);
}

console.log(fibsRec(8));
