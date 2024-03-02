let h1=document.querySelector("h1");

let currentDate=new Date();

function updateClock(){
    let currentDate=new Date();
    let hours=currentDate.getHours();
    let minutes=currentDate.getMinutes();
    let seconds=currentDate.getSeconds();
    if(hours>=12 && hours<24){
        h1.innerText=hours+":"+minutes+":"+seconds+" PM";
    }
    else{
        h1.innerText=hours+":"+minutes+":"+seconds+" AM";
    }
    
}

setInterval(updateClock,1000);