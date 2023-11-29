let nickname = "Felipão Mestre dos Magos"

let xpHeroi = 7000

if(xpHeroi <= 1000) {
  console.log ("ferro")
}else if(xpHeroi >= 2000) {
  console.log ("Bronze")
}else if(xpHeroi >= 5000) {
  console.log ("Prata")
}else if(xpHeroi >= 7000) {
  console.log ("ouro")
}else if(xpHeroi >= 8000) {
  console.log ("platina")
}else if(xpHeroi >= 9000) {
  console.log ("ascendente")
}else if(xpHeroi >= 10000) {
  console.log ("imortal")
}else(xpHeroi >= 10001)
  console.log ("radiante")

switch (xpHeroi){
 
case 1000:
console.log("Ferro")
break

case 2000:
console.log("bronze")
break

case 5000:
console.log("prata")
break

case 7000:
console.log("ouro")
break

case 8000:
console.log("platina")
break

case 9000:
console.log("ascendente")
break

case 10000:
console.log("imortal")
break

case 10001:
console.log("radiante")
break

}
console.log(" O Heroi de nome " + nickname)
console.log(" e está no nivel " + xpHeroi)
