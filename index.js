
const batteryLiquid = document.querySelector(".Bliquid");
const batteryStatus = document.querySelector(".Bstatus");
const Bpercentage = document.querySelector(".Bpercentage");
navigator.getBattery().then((batt)=>{
    let lev=Math.floor(batt.level*100)
    console.log(lev);
    console.log(batt.charging)

    function updateBattery(){
        if(batt.charging){
            batteryStatus.innerHTML = `Charging ... <i class="ri-flashlight-line animated-green"></i>`
        }
        else{
            batteryStatus.innerHTML = ``
        }
        
    Bpercentage.innerHTML=`${lev}%`
    batteryLiquid.style.height=`${lev}%`
    if(lev>=60){
        batteryLiquid.style.background='linear-gradient(90deg,hsl(92,89%,46%) 15%,hsl(92,90%,68%)100%)'
    }
    else if(lev<60 && lev>40){
        batteryLiquid.style.background='linear-gradient(90deg,hsl(54,89%,46%) 15%,hsl(92,90%,45%)100%)'
    }
    else if(lev<=40 && lev>20){
        batteryLiquid.style.background='linear-gradient(90deg, hsl(22,89%,46%) 15%,hsl(54,90%,68%)100%)'
    }
    else if(lev<=20){
        batteryLiquid.style.background='linear-gradient(90deg, hsl(7, 89%, 46%) 15%, hsl(11, 93%, 68%) 100%)'
        batteryStatus.innerHTML = `Low Charge <i class="ri-plug-line animated-red animated-red"></i>`
        
        
    }
    else{ batteryStatus.innerHTML = ``}
    
    }
    updateBattery()
    batt.addEventListener("chargingchange", () => { updateBattery() });
    batt.addEventListener("levelchange", () => { updateBattery });
    
})

