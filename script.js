
//Muestra el valor de rate
//Shows the rate value
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

//Obtiene valores y muestra el resultado
//Get values and display the result
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    //Valida que se ingrese un valor aceptable
    //Validates that an acceptable value is entered
    if (principal == "" || principal <=0){
        alert("Enter a positive number");
            document.getElementById('principal').focus();
    }else{
        document.getElementById("result").innerHTML=document.getElementById("result").innerHTML="If you deposit "+"<span class='highlight'>"+principal+"</span>"+",\<br\>at an interest rate of "+"<span class='highlight'>"+rate+"%.</span>\<br\>You will receive an amount of "+"<span class='highlight'>"+interest+",</span>\<br\>in the year "+"<span class='highlight'>"+year+"</span>\<br\>"
    }
    


}

