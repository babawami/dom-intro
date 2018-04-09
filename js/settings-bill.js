// get a reference to the sms or call radio buttons
var billItemElem = document.querySelector(".billItemTypeWithSettings");
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var  smsTotalSettingElem = document.querySelector(".smsTotalSettings");
var  totalSettingElem = document.querySelector(".totalSettings");
// get refences to all the settings fields
var callCostSettingElem = document.querySelector(".callCostSetting");
var  smsCostSettingElem = document.querySelector(".smsCostSetting");
var  warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var addTwoBtn = document.querySelector(".addTwo");
//get a reference to the 'Update settings' button
var updateSettingBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callValue = 0;
var smsValue = 0;
var totalcalls = 0;
var totalsms =0;
var criticalCost = 0;
var warningCost = 0;
//callCostSettingElem.value = 0;

function settingClick(){
var updateCall = callCostSettingElem.value;
callValue = parseFloat(updateCall);

var updateSms = smsCostSettingElem.value;
smsValue = parseFloat(updateSms);

  var updateCritical =  criticalLevelSettingElem.value ;
  criticalCost = parseFloat(updateCritical);

var updateWarning = warningLevelSettingElem.value;
warningCost = parseFloat(updateWarning);

//   if(callCostSettingElem != ""){
//    callValue = parseFloat(updateCall)
//
//
//    }
   console.log(criticalCost);
 }

function billTotal(billItemElem){
  //To get the bill type to add from the radio button
  var pickedRadioBtn = document.querySelector("input[name='billItemTypeWithSetting']:checked");
if (pickedRadioBtn){
    var billItemTypeWithSet= pickedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
  //  console.log(billItemTypeWithSet);
  }
  // update the correct total
  if (billItemTypeWithSet === 'call'){
  totalcalls += callValue;
  }

  else if( billItemTypeWithSet === 'sms'){
    totalsms += smsValue;

  }
  //console.log(totalsms);
     callTotalSettingsElem.innerHTML = totalcalls.toFixed(2);
     smsTotalSettingElem.innerHTML = totalsms.toFixed(2);
     var totalCostSet = totalcalls + totalsms;
     totalSettingElem.innerHTML= totalCostSet.toFixed(2);
  //color the total based on the criteria
     if(totalCostSet >= warningCost){
       totalSettingElem.classList.add("warning");

     }

      if( totalCostSet >= criticalCost ){
        totalSettingElem.classList.add("danger");
        alert("you can no longer add");
        addTwoBtn.disabled = true;
     }
}
// create a variables that will keep track of all three totals.
addTwoBtn.addEventListener("click" , billTotal);
//add an event listener for when the 'Update settings' button is pressed
updateSettingBtn.addEventListener("click" , settingClick);
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
