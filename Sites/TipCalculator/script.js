let amount = document.getElementById("amount")
let people = document.getElementById("people")
let bill_total = document.getElementById("total")
let tip = document.getElementById("tip")


let info = {"amount":0, "people":1, "total":0, "tip": 0}

const compute = () => {
    let calc = ((info["total"] + info["tip"]) / info.people)
      
    info["amount"] = (Math.round(calc * 100) / 100).toFixed(2);
    amount.innerText = `$${info["amount"]}`
}

const totalAmount = () => {
  let am = bill_total.value
  info["total"] = Number(am);
  tipCalc()
  compute();
}

const tipCalc = () => {
  let am = Number(tip.value) / 100;
  let tipAmount = info["total"] * am;
  console.log(tipAmount)
  info["amount"] = info["total"] + tipAmount;
  info["tip"] = tipAmount;
  compute();
}

const subtract = () =>{
  if(info.people != 1){
    info["people"]--;
    people.innerHTML = info["people"]
    compute();
  }
}

const addPeople = () => {
    info["people"]++;
    people.innerHTML = info["people"]
    compute();
}







