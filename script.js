// exercice2
//  demander à l'utilisateur de rentrer un nombre

let Note =prompt("Entrer votre note");
Note =parseFloat(Note);

//  les condition sur les notes entrées pars l'utilsateur et lès comparer

if(Note > 90){
    console.log("A");
}
else if( Note >=80  && Note <=90 ){
    console.log("B");
}

else if (Note >= 70 && Note<=80){
    console.log("C");
}
else if (Note<70){ 
    console.log("D");
}

// exercice1 

let langue = prompt("Entrer votre langue?");
console.log(langue.toLowerCase());
// condition avec switch case
switch (langue){ 
    case "francais":
        console.log("Bonjour");
        break;
        case "anglais":
        console.log("Hello");
        
        break;
        case "hébreu":
        console.log("Shalom");
        
        break;
    default:
        console.log("01110011 01101111 01110010 01110010 01111001'");
        break;
}


// exercice3

let string = prompt("entrer un mot ");

//taille d'une chaine de caractère 
if(string.length > 3){
  

    console.log( `The string is :${ string}  , your program should  ${ string + "ing"}`);
}
 if (string.length > 3){
    console.log(` The string is : ${string}, your program should console.log :${string +"ly"}`);
}
else if(string.length < 3)
{
    console.log(` The string is : ${string}, your program should console.log :${string}`);
}