

// Starte hier:
//Drei Conversion Formeln definieren: 
//knots/kilometer, fahrenheit/celsius/, inch/centimeter

function nodeSpeed(hoursKilometer) {
    return (hoursKilometer * 1.852);
}


function fahrenheit(celsius) {
    return((celsius - 32) * 5/9);
}

function inch(centimeter) {
    return (centimeter * 2.54);
}



//Ask user if user wants to convert Y/N

function askContinue() {
    var answer = window.prompt("Do you want to convert a value? Print: Yes or No?");
    
    if(answer == "Yes") {
        return true;        //Why Boolean and not if, else if and else?
    }
    else if(answer == "yes") {
        return true;
    } 
    else {
        return false;
    }
}   

    


//Ask user to select conversion type
function askSelect() {    
    var answer = window.prompt("Which conversion would you like to do? knots / fahrenheit / inches");
        return answer;
}
   

    
//Ask user to enter a value
function askValue() {
    var answer = window.prompt("Please enter a value to convert");
        return answer;
}
    






//Check which conversion: (hier weiter BAUSTELLE)


while(askContinue()) {
    var conversionType = askSelect();
    var conversionValue = askValue();
    var resultMessage = "The result of the conversion is ";


    if (conversionType == "knots") {
        resultMessage += nodeSpeed(Number(conversionValue)).toString();  //1. Umwandlung in Zahl (Number) 2. Das ganze zurück in Text = .toString
          
    }
    else if (conversionType == "fahrenheit") {
        resultMessage += fahrenheit(Number(conversionValue)).toString(); 
    }
    else if (conversionType == "inches") {
        resultMessage += inch(Number(conversionValue)).toString(); 
    }   else {
        resultMessage = "Sorry. I can't do this conversion";

    }
}

console.log(resultMessage);








// Main:
// -Continue while user wants to convert something.



//-Check which conversion

//- Get value

// -display result



    
    


//try: except: quit() bei fehlerhafter Eingabe durch den user

// vom dritten Fenster wieder auf das erste springen (yes) oder quit bei (no):
//Do you want to convert a value: yes or no? 

//nicht vergessen: Einzahl und Mehrzahl programmieren z.b. knot und knots