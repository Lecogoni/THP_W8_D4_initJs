
str = prompt("Talk to me");
let strAnalysed

if (str.slice(-1) === "?") {
  strAnalysed = 1
} else if (str.includes("Fortnite")) {
  strAnalysed = 3
} else if (str == "") {
  strAnalysed = 4
} else if (str === str.toUpperCase()){
  strAnalysed = 2
} 

let expr = strAnalysed;
switch (expr) {
  case 1:
    console.log('Ouais Ouais...');
    break;
  case 2:
    console.log('Pwa, calme-toi...');
    break;
  case 3:
    console.log("on s' fait une partie soum-soum ?");
    break;
  case 4:
      console.log("t'es en PLS ?");
      break;
  default:
    console.log(`balek`);
}


/* 
Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
*/