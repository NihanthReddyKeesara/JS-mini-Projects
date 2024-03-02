let playButtons=document.querySelectorAll(".button");
let pauseButtons=document.querySelectorAll(".button2");
let audio=document.querySelectorAll(".myAudio");

console.dir(audio);

let elements1=Array.from(playButtons);

elements1.forEach((element)=>{
    element.addEventListener("click",function(){
            str=element.innerText
            num=parseInt(str[str.length-1])
             if(audio[`${num}`].paused){
                audio[`${num}`].play();
            }
    });
});

let elements2=Array.from(pauseButtons);

elements2.forEach((element2)=>{
    element2.addEventListener("click",function(){
        str=element2.innerText
        num=parseInt(str[str.length-1])
        if(audio[`${num}`].play){
            audio[`${num}`].pause();
        }
    })
})