
function totalVar(){
  var callsTotal = 0;
  var smsTotal = 0;
  var totalBillS = 0;

// do logic calculations
  function cal(value){
    if(value ==="call"){
      callsTotal += 2.75;
    }

    else if(value ==="sms"){
      smsTotal += 0.75;
    }
   }

   function colour(){
     if(totalBillS>=30 && totalBillS<50){
       return 'warning';
     }

     if(totalBillS>=50){
       return 'danger';
     }
   }
  // give access to the functions and variables
  return {
    calulateValue : cal,

    smsValue: function(){
     return  smsTotal;
    },

    callsValue: function(){
      return callsTotal ;
    },

    totalValue: function(){
      totalBillS = callsTotal + smsTotal;
      return totalBillS;
    },

    colour:colour,




  }
}
