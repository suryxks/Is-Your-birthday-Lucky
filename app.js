var dob=document.querySelector("#dob");
var luckNumber=document.querySelector("#lucky-no");
var checkButton=document.querySelector("#check-btn");
var container=document.querySelector(".container")
var message=document.createElement("p");
var privMsg=document.querySelector("#privacy");
var closeBtn=document.querySelector("#close");
console.log(privMsg,closeBtn);

function sumOfDigits(doB){
    var dob=Number(doB);
    
    var sum=0;
    while(dob>0){
       sum=sum+dob % 10;
       dob=Math.trunc(dob/10);
    }
    
    return sum;
}
function checkLukyNumber(dob,luckNumber){
    var doB=dob;

    doB=doB.replaceAll("-","");
    var sum=sumOfDigits(doB);
    if(sum%luckNumber===0)
    {   message.remove();
        message.innerText="You are Lucky👏"
        container.appendChild(message);
    }else{
        message.remove()
        message.innerText="Go Work Unitl you Become Lucky"
        container.appendChild(message);
    }

}
function checkHandler(){
   if(dob.value===""||luckNumber.value===""){
   message.innerText="Enter a valid date or luky number";
    container.appendChild(message);
   }
   else{
       message.remove();
       checkLukyNumber(dob.value,luckNumber.value);
   }
}
checkButton.addEventListener("click",checkHandler);
closeBtn.addEventListener("click",function(){
  privMsg.style.display="none";
});
