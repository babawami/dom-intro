
document.addEventListener('DOMContentLoaded', function(){
///////////////////////////////////////////////////////////////////////
var logic = totalVar(); // instance
// get a reference to the textbox where the bill type is to be entered
 var billTypeTextElem = document.querySelector(".billTypeText");
//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");

// reference area to dispay the template
var displayTemplate = document.querySelector(".content");
// get a reference to the template script tag
var template = document.querySelector(".totalTemplate").innerHTML;
// compile the template script
var compileTemplate   = Handlebars.compile(template);

// template data to feed the complier
var data ={
  callcost: '0.00',
  smscost:  '0.00',
  totalcost: '0.00',
}
displayTemplate.innerHTML = compileTemplate(data);
////////////////////////////////////////////////////////////////////

// Dom function
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();
    billTypeEntered= logic.calulateValue(billTypeEntered);


    // template data to feed the complier
    var data ={
      callcost: logic.callsValue().toFixed(2),
      smscost:  logic.smsValue().toFixed(2),
      totalcost: logic.totalValue().toFixed(2),
      addColour: logic.colour(),
    }

    displayTemplate.innerHTML = compileTemplate(data);
}
//add an event listener for when the add button is pressed
textTotalAddBtn.addEventListener('click', textBillTotal);
});
