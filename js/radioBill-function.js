
//logic function
function calculateRadio(){
  var callsTotalTwo = 0;
  var smsTotalTwo = 0;
  var totalCostTwo = 0;

function count(billType){
  if (billType === "call"){
      callsTotalTwo += 2.75
  }

  if (billType === "sms"){
      smsTotalTwo += 0.75;
  }
}


 function colours(){
   if(totalCostTwo>=30 && totalCostTwo<50){
     return 'warning';
   }

   if(totalCostTwo>=50){
     return 'danger';
   }
 }


return {
  count,

  callsTotal: function(){
    return callsTotalTwo.toFixed(2);
  },

  smsTotal: function(){
    return smsTotalTwo.toFixed(2);
  },


  combineTotal: function(){
    totalCostTwo = callsTotalTwo + smsTotalTwo;
    return totalCostTwo.toFixed(2);
  },

    colours:colours
  }
}
