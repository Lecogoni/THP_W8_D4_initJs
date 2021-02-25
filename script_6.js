const adn = [
  { msg: "UCU", proteineName: "Sérine" },
  { msg: "UCA", proteineName: "Sérine" },
  { msg: "UCG", proteineName: "Sérine" },
  { msg: "AGU", proteineName: "Sérine" },
  { msg: "AGC", proteineName: "Sérine" },
  { msg: "CCU", proteineName: "Proline" },
  { msg: "CCC", proteineName: "Proline" },
  { msg: "CCA", proteineName: "Proline" },
  { msg: "CCG", proteineName: "Proline" },
  { msg: "UUA", proteineName: "Leucine" },
  { msg: "UUG", proteineName: "Leucine" },
  { msg: "UUU", proteineName: "Phénylalanine" },
  { msg: "UUC", proteineName: "Phénylalanine" },
  { msg: "UUC", proteineName: "Arginine" },
  { msg: "CGU", proteineName: "Arginine" },
  { msg: "CGC", proteineName: "Arginine" },
  { msg: "CGA", proteineName: "Arginine" },
  { msg: "CGG", proteineName: "Arginine" },
  { msg: "AGA", proteineName: "Arginine" },
  { msg: "AGG", proteineName: "Arginine" },
  { msg: "UAU", proteineName: "Tyrosine" },
  { msg: "UAC", proteineName: "Tyrosine" }
];


let arn = "CCGUCGUUGCGCUACAGC"
let arn2 = "CCUCGCCGGUACUUCUCG"


codon = []
bIndex = 0
eIndex = 3

function divideInCodon(str) {
  while(str.length > 0 ) {
    codon.push(str.split("", 3).join(""));
    str = str.replace(str.substring(bIndex, eIndex), "");
  }
  bIndex += 3
  eIndex += 3
}


function translateInProteine(arrayOfCodon) {
  proteine = [];
  for(let i=0; i < arrayOfCodon.length; i++) {
    for(let j=0; j < adn.length; j++) {

      if (arrayOfCodon[i] === adn[j].msg ) {
        proteine.push(adn[j].proteineName);
      }

    }
  }
  return proteine
}

divideInCodon(arn);
console.log(codon);

translateInProteine(codon);
console.log(proteine);
