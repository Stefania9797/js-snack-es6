var a=2;
var b=5;
array=["mario","luigi","giulia","lucia","giorgia","marco","stefania","francesco",]
console.log(GetNewArray(a,b,array));
//Scrivere una funzione che accetti tre argomenti, un array e due numeri 
function GetNewArray(a,b,array){
    let newArray=[];
    /*La funzione ritornerà un nuovo array con i valori che 
    hanno la posizione compresa tra i due numeri.*/
    array.forEach((element,i,list)=>{
        if(i>=a&&i<=b){
            newArray.push(element)
        }
    })
    return newArray
}

