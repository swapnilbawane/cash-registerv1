var billAmount = document.querySelector("#textarea-mod1");

var cashGiven = document.querySelector("#textarea-mod2"); 

var btnCheck = document.querySelector("#btn-check"); 

var endMessage = document.querySelector("#end-message"); 

var tableCell = document.querySelectorAll(".td-1");

let notes = [2000,500,100,20,10,5,1];

console.log(typeof(billAmount.value));
console.log(typeof(cashGiven.value));

endMessage.style.display = "none";

btnCheck.addEventListener("click", function returnChange() {
    if (billAmount.value == "" || cashGiven.value == "")
        emptyString();

    else // Testing if any of the entered value is a string.
        if (isNaN(parseInt(billAmount.value)) || isNaN(parseInt(cashGiven.value)))
            checkChar();

        else // so its not an empty or string, its a number. checking if number > 0 
            if (Number(billAmount.value) > 0 && Number(cashGiven.value) > 0) {

                // if cashGiven is less than bill amount enter less amount given 
                if (Number(cashGiven.value) < Number(billAmount.value))
                    { lessAmount(); } 


                else if (Number(cashGiven.value) == Number(billAmount.value))
                   { exactAmount(); } 


                else
                    { exactChange(); } 
                // if cashGiven is equal to bill amount 
                //  else cashGiven is more than bill amount and hence calculateChange function starts  
            }


            else
                { 
                    if(Number(billAmount.value) == 0 || Number(cashGiven.value) == 0) equaltoZero(); 
                    else 
                    lessThanZero(); 
                
                } 
}


);


// functions declaration 
function emptyString() {
    {
        endMessage.style.display = "block";
        endMessage.innerText = "Sorry input not entered correctly. Please enter both the fields.";

    }
}

function checkChar() {
    {
        endMessage.style.display = "block";
        endMessage.innerText = "Sorry invalid input. Please enter a number/positive number.";
    }
}

function lessAmount() {
    {
        endMessage.style.display = "block";
        endMessage.innerText = "Entered amount is less than bill amount. Please enter amount again.";
    }
}

function exactAmount() {
    {
        endMessage.style.display = "block";
        endMessage.innerText = "Thank you for providing exact amount. Have a Good day.";
    }
}

function equaltoZero() { 
        endMessage.style.display = "block";
        endMessage.innerText = "One of the amount entered is equal to 0. Please provide correct input.";
}

function lessThanZero() {
    {
        endMessage.style.display = "block";
        endMessage.innerText = "One of the Amount entered is less than 0. Please provide correct input.";
    }
}

function exactChange() { 
    let changeReturned = cashGiven.value - billAmount.value;
    console.log(changeReturned);
 
    for ( var i=0; i<notes.length; i++)
    { 
      let numberOfNotes=Math.trunc(changeReturned/notes[i]); 
      changeReturned = changeReturned%notes[i]; 
      tableCell[i].innerText = numberOfNotes;    
    }
}