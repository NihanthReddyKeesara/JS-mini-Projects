let inpt=document.querySelector("input");

let btn=document.querySelector("button");

let ul=document.querySelector("ul");

btn.addEventListener("click",function(){

    let item=document.createElement("li");
    item.innerText=inpt.value;
    let btn2=document.createElement("button");
    btn2.innerText="delete";
    item.appendChild(btn2);
    ul.appendChild(item);

    // btn2.addEventListener("click",function(){
    //     item.remove();
    // })

})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})

