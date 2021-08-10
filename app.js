var dob=document.querySelector("#dob");
var luckNumber=document.querySelector("#lucky-no");
var checkButton=document.querySelector("#check-btn");
var container=document.querySelector(".container")
var message=document.createElement("p");
console.log(dob.value);

function sumOfDigits(doB){
    var dob=Number(doB);
    var sum=0;
    while(doB>0){
       sum+=dob%10;
       dob=dob/10;
    }
    console.log(sum);
    return sum;
}
function checkLukyNumber(dob,luckNumber){
    var doB=dob;
    var luckNo=luckNumber;
    doB=doB.replaceAll("-","");
    var sum=sumOfDigits(doB);
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

