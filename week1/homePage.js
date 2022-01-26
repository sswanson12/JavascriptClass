let $ = function(id){
    return document.getElementById(id);
};

function wageCalculator(){

    let hourlyRate = $("hourlyRate").value;
    let hoursWorked = $("hoursWorked").value;
    console.log(hourlyRate);
    console.log(hoursWorked);

    $("totalWage").innerHTML = hourlyRate * hoursWorked;

    //document.getElementById("totalWage").innerHTML = String(hourlyRate * hoursWorked);
}
