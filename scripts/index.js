// Store the wallet amount to your local storage with key "amount"




// console.log(amt)



function addMoney(){
    let amount= +(document.getElementById("amount").value) ;
    
    // console.log(amount)

    let amt =    JSON.parse(localStorage.getItem("amount")) + amount ;
    
    

    localStorage.setItem("amount", JSON.stringify(amt))
    location.reload();

}


let getAmt = JSON.parse(localStorage.getItem("amount"))
let balance = document.getElementById("wallet").innerText= getAmt;



