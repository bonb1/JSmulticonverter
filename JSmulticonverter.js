

// Starte hier:
//Drei Conversion Funktionen definieren:
//knots/kilometer, fahrenheit/celsius/, inch/centimeter

function knotsTokmh(knots) {
    return knots * 1.852;
}

function fahrenheitTocelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function inchesTocentimeter(inches) {
    return inches * 2.54;
}



//function: Ask if user wants to convert one of the elements Y/N

function askContinue() {
    var answer = window.prompt("Do you want to convert a value? Print: Yes or No?");

    if(answer == "yes") {
        return true;        //Why Boolean and not if, else if and else?
    } else {
        return window.prompt("Good by!");
        
    }
    
    //else if(answer == "yes") {
        //return true;
    
    //else {
        //return window.prompt("Good bye!");
    //}
}




//Ask user to select conversion type
function askSelect() {
    var answer = window.prompt("Which conversion would you like to do? knots / fahrenheit  / inches");
    return answer;
}

//Ask user for a value:

function askValue(){
    var answer = window.prompt("Please enter a number");
    return answer;
}

// while-loop, boolean value:
while(askContinue()) {
    var conversionType = askSelect();
    var conversionValue = askValue();
    var resultMessage = "The result of the conversion is ";     // ev if, else if, else, einbauen
    

    if(conversionType == "knots"){
        resultMessage += knotsTokmh(Number(conversionValue)).toString() + " Kmh";
    } else if (conversionType == "fahrenheit") {
        resultMessage += fahrenheitTocelsius(Number(conversionValue)).toString() + " Degrees Celsius";
    } else if(conversionType == "inches") {
        resultMessage += inchesTocentimeter(Number(conversionValue)).toString() + " Centimeter";
    } else {
        resultMessage = "This conversion is not possible. Please check your input!";
    }
    console.log(resultMessage); //result in the console
    window.prompt(resultMessage);    // result in the window   

}


