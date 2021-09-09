var billAmt=document.querySelector("#billamt")
var amtGiven=document.querySelector("#amtgiven")
var calculate=document.querySelector("button")
const noteNumber=document.querySelectorAll(".no-of-notes")

const denomination=[2000,500,100,20,10,5,1]
calculate.addEventListener("click",function validateAmt(){
    if(billAmt.value>0 &&  amtGiven.value>=billAmt.value)
    {
        var moneyLeft=amtGiven.value-billAmt.value;
      calculateChange(moneyLeft)
    }
    else
    {
        alert("amt unavalid")
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

/*Doesnt accept all nos look into it*/