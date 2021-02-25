num = prompt("Combien d'étages fera ta pyramide ?");
cross = 1

function repeatStringNumTimes(str, number) {
  return str;
}
repeatStringNumTimes("abc", 3);

while(cross <= num) {
  spaceNum = num - cross;
  console.log((" ".repeat(spaceNum)) + ("#".repeat(cross)));
  cross += 1
} 
