
// logic function
function calculateBillEvent(billCaptured){
  var billItem = billCaptured.split(",");
   var billTotal = 0;
  for (var i=0;i<billItem.length;i++){
  var billCount = billItem[i].trim();

      if (billCount === "call"){
          billTotal += 2.75;
      }

      if (billCount === "sms"){
          billTotal += 0.75;
      }
  }
  return billTotal.toFixed(2);
}
