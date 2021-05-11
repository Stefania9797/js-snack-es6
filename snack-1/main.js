/*Snack 1:
Creare un array di oggetti, 
ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e peso.
Stampare a schermo la bici con peso minore utilizzando 
destructuring e template literal*/

//creo array di biciclette
let biciclette=[
    {nome:"SuperSix Evo", peso:4},
    {nome:"Giant TCR", peso:5},
    {nome:"Tarmac SL7", peso:10},
    {nome:"Pinarello F12", peso:7.5},
    {nome:"Trek SLR", peso:9.2},
]
//controllo quale bicicletta è la più leggera
let [biciLeggera]=biciclette
for (let i = 0; i < biciclette.length; i++) {
    if(biciLeggera.peso>biciclette[i].peso){
        biciLeggera=biciclette[i]
    }
}
//la stampo
document.getElementById("testo").innerHTML=`La bici con peso minore è ${biciLeggera.nome}, e pesa: ${biciLeggera.peso} kg`