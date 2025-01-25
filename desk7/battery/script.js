var cell = document.getElementById('cell');
 navigator.getBattery().then(function(battery) {
   function updateAllBatteryInfo(){
     updateChargeInfo();
     updateLevelInfo();
     updateChargingInfo();
     updateDischargingInfo();
   }
   updateAllBatteryInfo();

   battery.addEventListener('chargingchange', function(){
     updateChargeInfo();
   });
   function updateChargeInfo(){
      if(battery.charging){
          cell.style.color="#00ff00";
      }
      else{
        if(battery.level<0.25){
          cell.style.color="#ffffff";
        }
        else{
        cell.style.color="#ffffff";
        }
      }
   }

   battery.addEventListener('levelchange', function(){
     updateLevelInfo();
   });
   function updateLevelInfo(){
     cell.innerHTML = Math.round(battery.level * 100) + "%";
   }

   battery.addEventListener('chargingtimechange', function(){
     updateChargingInfo();
   });
   function updateChargingInfo(){
     console.log("Battery charging time: "
                  + battery.chargingTime + " seconds");
   }

   battery.addEventListener('dischargingtimechange', function(){
     updateDischargingInfo();
   });
   function updateDischargingInfo(){
     console.log("Battery discharging time: "
                  + battery.dischargingTime + " seconds");
   }

 });
