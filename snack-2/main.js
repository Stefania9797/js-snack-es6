/*Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome, punti fatti,falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

let squadre=[
    {nome:"Juventus",puntiFatti:0,falliSubiti:0},
    {nome:"Inter",puntiFatti:0,falliSubiti:0},
    {nome:"Milan",puntiFatti:0,falliSubiti:0},
    {nome:"Roma",puntiFatti:0,falliSubiti:0},
]
//funzione che genera numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//generare numeri random per punti e falli degli oggetti dell'array
for (let index = 0; index < squadre.length; index++) {
    squadre[index].puntiFatti=getRandomNumber(1,100);
    squadre[index].falliSubiti=getRandomNumber(1,100);
}
console.log(squadre);
//Infine creiamo un nuovo array i cui elementi contengono 
//solo nomi e falli subiti e stampiamo tutto in console.
const newSquadre=[];
for (let index = 0; index < squadre.length; index++) {
    const {nome,falliSubiti}=squadre[index]
    newSquadre.push({nome, falliSubiti})
}
console.log(newSquadre);


