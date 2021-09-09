var billAmt=document.querySelector(".billamt")
var amtGiven=document.querySelector(".amtgiven")
var calculate=document.querySelector("button")
calculate.addEventListener("click",function validateAmt(){
    if(billAmt.value>0 &&  amtGiven.value>=billAmt.value)
    {
      calculateChange(billAmt.value,amtGiven.value)
    }
    else
    {
        alert("amt unavalid")
    }
})

function calculateChange(bill,amt){
    var change=amt-bill;
    
}

/*change.addEventListener("click",function(){
    if( inputBill.value<=inputAmt.value)
    {changeCalcuator(inputBill.value,inputAmt.value)}
    else if(inputBill.value<inputAmt.value)
   { alert("fail")
   console.log("clicked")
}
   

})

function changeCalcuator(bill,amt){
    alert("success")
    console.log(bill)
    console.log(amt)
}*/