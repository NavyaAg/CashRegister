var billAmt=document.querySelector("#billamt")
var amtGiven=document.querySelector("#amtgiven")
var calculate=document.querySelector("button")
var message=document.querySelector(".message")
const noteNumber=document.querySelectorAll(".no-of-notes")

const denomination=[2000,500,100,20,10,5,1]
calculate.addEventListener("click",function validateAmt(){
    if(Number(billAmt.value)>0 && Number( amtGiven.value)>= Number(billAmt.value))
    {
        var moneyLeft=amtGiven.value-billAmt.value;
        message.innerText="Here is the change you have to give"
      calculateChange(moneyLeft)
    }
    else
    {
        message.innerText="How about doing the dishes instead ?"
    }
})

function calculateChange(change){
    
    console.log(change);
    for(i=0;i<=6;i++){
        var noOfnotes=Math.trunc(change/denomination[i]);
        change%=denomination[i];
        noteNumber[i].innerText=noOfnotes;
    }
    
}

