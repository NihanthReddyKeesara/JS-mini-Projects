let btn=document.querySelector("button");
let input=document.querySelector("input");


function checkString(str){
    let hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(str);
    if(hasSpecialChar==false){
            let SS=33+Math.floor(Math.random()*14);
            let ss=String.fromCharCode(SS);
            str=str+ss;
    }

    let hasUpperCase = /[A-Z]/.test(str);
    if(hasUpperCase==false){
            let UL=65+Math.floor(Math.random()*25);
            let ul=String.fromCharCode(UL);
            str=str+ul;
    }

    let hasLowerCase = /[a-z]/.test(str);
    if(hasLowerCase==false){
            let LL=97+Math.floor(Math.random()*25);
            let ll=String.fromCharCode(LL);
            str=str+ll;
    }

    let hasNumber = /\d/.test(str);
    if(hasNumber==false){
        let num$=Math.floor(Math.random()*10); 
        str=str+num$;
    }

    return str;

}




btn.addEventListener("click",function(){
    let size=8+Math.floor(Math.random()*10);
    let str="";
    for(let i=0;i<size;i++){
        let num=Math.floor(Math.random()*4);
        switch(num){
            case 0:
                let num$=Math.floor(Math.random()*10); 
                str=str+num$;
                break;
            case 1:
                let UL=65+Math.floor(Math.random()*25);
                let ul=String.fromCharCode(UL);
                str=str+ul;
                break;
            case 2:
                let LL=97+Math.floor(Math.random()*25);
                let ll=String.fromCharCode(LL);
                str=str+ll;
                break;
            case 3:
                let SS=33+Math.floor(Math.random()*14);
                let ss=String.fromCharCode(SS);
                str=str+ss;
                break;
        }
    }

   input.value=checkString(str); 
});


