
document.addEventListener('DOMContentLoaded', function(){
  var selectBill = calculateRadio();// instance
  //////////////////////////////////////////////////////////////////////////
  // get a reference to the sms or call radio buttons
  var billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");
  //get a reference to the add button
  var radioTotalAddBtn = document.querySelector(".radioBillAddBtn");
 // get reference to display the template
  var templateDispaly = document.querySelector(".contentTwo");
  // reference the template from html
  var template = document.querySelector(".totalTemplate").innerHTML;
  // compile the template from html
  var compiletemplate = Handlebars.compile(template);
// feeder to the compiled template
  var data = {
    callcost : "0.00",
    smscost:"0.00",
    totalcost : "0.00",
  }

  templateDispaly.innerHTML = compiletemplate(data);

  //////////////////////////////////////////////////////////////////////

  // Dom functions
  function radioBillTotal(){
    //To get the bill type to add from the radio button
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;
      // billItemType will be 'call' or 'sms'
  }
         var billItemSelected = selectBill.count(billItemType);
         var totalCostTwo = selectBill.combineTotal()

         var dataTwo ={
           callcost: selectBill.callsTotal(),
           smscost:  selectBill.smsTotal(),
           totalcost: selectBill.combineTotal(),
           addColour: selectBill.colours(),

         }
         templateDispaly.innerHTML = compiletemplate( dataTwo );

  }
  //add an event listener for when the add button is pressed
  radioTotalAddBtn.addEventListener('click', radioBillTotal);

});
