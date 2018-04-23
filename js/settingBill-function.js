
function calculatebill(){
var callValue = 0;
var smsValue = 0;
var totalcalls = 0;
var totalsms =0;
var criticalCost = 0;
var warningCost = 0;
var totalCostSet =0;

      // logic function for settingBill//
      function setCallValue(updateCall){
      if(updateCall  !== ""){
      callValue = parseFloat(updateCall);
      }
      }

      function setSmsValue(updateSms){
       if(updateSms !== ""){
        smsValue = parseFloat(updateSms);
      }
      }

       function warningLevelSet(updateWarning){
       warningCost = parseFloat(updateWarning);

      }

       function criticalLevelSet(updateCritical){
       criticalCost = parseFloat(updateCritical);
      }

  //logic function for billtotal//
  function calculateValues(billItemTypeSet){
  if (billItemTypeSet === 'call'){
  totalcalls += callValue;
  }

  else if( billItemTypeSet === 'sms'){
  totalsms += smsValue;
  }
  }

  function addTotals(){
    totalCostSet= totalsms + totalcalls;
  }

  return{
    //how to get and calculate
    callValueSet:setCallValue,
    smsValueSet:setSmsValue,
    setWarningLevel:warningLevelSet,
    setcriticalLevel:criticalLevelSet,
    billCalculate:calculateValues,
    totalBill:addTotals,

    //return variables
    updatedCallValue:function(){
     return callValue
    },
     updatedSmsValue:function(){
     return  smsValue
    },
     updatedcriticalCost:function(){
     return  criticalCost
    },
     updatedwarningCost:function(){
     return   warningCost
    },
     addCalls:function(){
     return  totalcalls.toFixed(2)
    },
    addSms:function(){
     return  totalsms.toFixed(2)
    },
     TotalOverAll:function(){
     return  totalCostSet.toFixed(2)
    }

  }

}

  
