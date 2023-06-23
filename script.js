function nombresFou(max) {
  return Math.floor(Math.random() * max);
}
let chifreSecret = nombresFou(100);
let nbrJoueur = 0;
let nbresssai = 0;
let finDeParti = 0;

nbrJoueur = prompt("devine mon chifre");

while (nbrJoueur != chifreSecret) {
    
    if(nbrJoueur < 0 || nbrJoueur > 100) {
        nbrJoueur = prompt("en 0 et 100 tu va ou la ??? ");
        nbresssai += 1;

    } else if (nbrJoueur >= chifreSecret) {
    nbrJoueur = prompt("trop GRAND, tu peux réessayer");
    nbresssai += 1;

  } else if (nbrJoueur <= chifreSecret) {
    nbrJoueur = prompt("trop PETIT, tu peux réessayer");
    nbresssai += 1;
  }else{


  }
}

finDeParti = prompt(`!!!!!!! FÉLICITATION !!!!!!! tu à reussi en ${nbresssai} essai tu veux rejouer ?`);
if(finDeParti != null){
    history.go(0);
    nbresssai = 0;

}else{
    nbresssai = 0;
}
