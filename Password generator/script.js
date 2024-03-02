let btn=document.querySelector("button");
let input=document.querySelector("input");
btn.addEventListener("click",function(){
    let num=Math.floor(Math.random()*10); 
    let UL=65+Math.floor(Math.random()*25);
    let LL=97+Math.floor(Math.random()*25);
    let SS=33+Math.floor(Math.random()*14);
    let ul=String.fromCharCode(UL);
    let ll=String.fromCharCode(LL);
    let ss=String.fromCharCode(SS);
    let val=`${num}${ul}${ll}${ss}`;
    let str="";
    for(let i=0;i<4;i++){
        let Ch=65+Math.floor(Math.random()*25);
        let ch=String.fromCharCode(Ch);
        str=str+ch;
    }

    let str1="";

    let rn=Math.floor(Math.random()*10);
    for(let i=0;i<rn;i++){
        let ch=97+Math.floor(Math.random()*25);
        let Ch=String.fromCharCode(ch);
        str1=str1+Ch;
    }
    let pass=val+str+str1;
    input.value=pass;   
})