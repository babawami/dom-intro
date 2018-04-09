// get a reference to the sms or call radio buttons
var billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");
var callsTotalElemTwo = document.querySelector(".callTotalTwo");
var  smsTotalElemTwO = document.querySelector(".smsTotalTwo");
var  totalCostElemTwo = document.querySelector(".totalTwo");

//get a reference to the add button
var radioTotalAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
// these variables are global and defined outside of the Add button event listener.
var callsTotalTwo = 0;
var smsTotalTwo = 0;

function radioBillTotal(billItemTypeRadioElem){
  //To get the bill type to add from the radio button
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
}
    // update the correct total
    if (billItemType === "call"){
        callsTotalTwo += 2.75
    }

    else if (billItemType === "sms"){
        smsTotalTwo += 0.75;
    }


    //update the totals that is displayed on the screen.
    callsTotalElemTwo.innerHTML = callsTotalTwo.toFixed(2);
    smsTotalElemTwO.innerHTML = smsTotalTwo.toFixed(2);
    var totalCostTwo = callsTotalTwo + smsTotalTwo;
    totalCostElemTwo.innerHTML = totalCostTwo.toFixed(2);

    //color the total based on the criteria
   if (totalCostTwo >= 50){
       // adding the danger class will make the text red
       totalCostElemTwo.classList.add("danger");
   }
    if (totalCostTwo >= 30){
       totalCostElemTwo.classList.add("warning");
   }
}
//add an event listener for when the add button is pressed
radioTotalAddBtn.addEventListener('click', radioBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
