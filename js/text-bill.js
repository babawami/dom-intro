
document.addEventListener('DOMContentLoaded', function(){
  var logic = totalVar(); // instance
///////////////////////////////////////////////////////////////////////
// get a reference to the textbox where the bill type is to be entered
 var billTypeTextElem = document.querySelector(".billTypeText");
 var callsTotalElem = document.querySelector(".callTotalOne");
 var  smsTotalElem = document.querySelector(".smsTotalOne");
 var  totalCostElem = document.querySelector(".totalOne");
//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");
////////////////////////////////////////////////////////////////////
var logic = totalVar(); // instance
// Dom function
function textBillTotal(){
    // get the value entered in the billType textfield

    var billTypeEntered = billTypeTextElem.value.trim();

    billTypeEntered= logic.calulateValue(billTypeEntered);
    var totalCost = logic.totalValue().toFixed(2);

    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = logic.callsValue().toFixed(2);
    smsTotalElem.innerHTML = logic.smsValue().toFixed(2);
  //  var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = logic.totalValue().toFixed(2);

    //color the total based on the criteria
   if (totalCost >= 50){
       // adding the danger class will make the text red
       totalCostElem.classList.add("danger");
   }
   else if (totalCost >= 30){
       totalCostElem.classList.add("warning");
   }
}
//add an event listener for when the add button is pressed
textTotalAddBtn.addEventListener('click', textBillTotal);
});
