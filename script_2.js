num = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factoriel(number) {
  let result = number
  for(let count = number; count > 1; count--){
    result = result * (count -1);
  }
  return result;
}

console.log(`le résultat est ${factoriel(num)}`);