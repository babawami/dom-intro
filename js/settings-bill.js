

document.addEventListener('DOMContentLoaded', function(){
  var setBill=calculatebill(); // INSTANCE
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
function settingClick(){
  //display amount entered by user
 var updateCall = callCostSettingElem.value;
 setBill.callValueSet(updateCall);
 setBill.updatedCallValue();

  var updateSms = smsCostSettingElem.value;
  setBill.smsValueSet(updateSms);
  setBill.updatedSmsValue();

  var updateCritical =  criticalLevelSettingElem.value;
  setBill.setcriticalLevel(updateCritical);


  var updateWarning = warningLevelSettingElem.value;
  setBill.setWarningLevel( updateWarning);

  var overAllCost = setBill.TotalOverAll();
     var warningPoint= setBill.updatedwarningCost();
     var crticalPoint= setBill. updatedcriticalCost();
  if( overAllCost  < warningPoint ){
       totalSettingElem.classList.remove("warning");
     }
     if( overAllCost < crticalPoint ){
        totalSettingElem.classList.remove("danger");
        addTwoBtn.disabled = false;
     }
 }
 //add an event listener for when the add button is pressed
updateSettingBtn.addEventListener("click" , settingClick);

function billTotal(billItemElem){
  //To get the bill type to add from the radio button
  var pickedRadioBtn = document.querySelector("input[name='billItemTypeWithSetting']:checked");
if (pickedRadioBtn){
    var billItemTypeWithSet= pickedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
    setBill.billCalculate(billItemTypeWithSet);
}
     setBill.totalBill();
     var overAllCost = setBill.TotalOverAll();
     var warningPoint= setBill.updatedwarningCost();
     var crticalPoint= setBill. updatedcriticalCost();
     callTotalSettingsElem.innerHTML = setBill.addCalls();
     smsTotalSettingElem.innerHTML = setBill.addSms();
     totalSettingElem.innerHTML= setBill.TotalOverAll();
  //color the total based on the criteria
     if( overAllCost  >= warningPoint ){
       totalSettingElem.classList.add("warning");
     }
   if( overAllCost >= crticalPoint ){
        totalSettingElem.classList.add("danger");
        addTwoBtn.disabled = true;
     }

}
//add an event listener for when the 'Update settings' button is pressed
addTwoBtn.addEventListener("click" , billTotal);

});
