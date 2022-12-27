let title = document.getElementById("title")
let red = document.getElementById("red")
let green = document.getElementById("green")
let yellow = document.getElementById("yellow")
let answer = document.getElementById("answer")
let choice = document.getElementById("choice")
let resetButton = document.getElementById("reset")

  const changeText = () => {                             
    title.innerText = "Hello Jeff"
    console.log(title.style.color)
    title.style.color = "green"
    console.log(title.style.color)
    title.style.backgroundColor = "pink"
  }

  const reset = () => {
    // resetButton.onclick = () => {
    //   answer.innerText = '';
    //   choice.innerText = '';
    //   let clicksRed = document.getElementById("redClick")
    //   clicks.innerText = 0
    //}
    location.reload()
  }

// rock beats scissors, rock loses to paper. 
//
//paper beats rock and scissors beat paper. 

// red.onclick = () => {
//   compute(0);
//   choice.innerText = "You clicked Rock"
// }
// yellow.onclick = () => {
//   compute(1)
//   choice.innerText = "You clicked Paper"
// }

// green.onclick = () => {
//   choice.innerText = "You clicked Scissors"
//   compute(2);
// }

const compute = (choice) => {
  let decision = Math.floor(Math.random() * 3)
  
  if(decision == choice){
    answer.innerText = "You chose the same thing"
  } 
    // we select rock, rock beats scissors loses to paper. 
  else if(choice == 0){
    if (decision == 1){
        answer.innerText = "You lost to Paper"
    } else if(decision == 2){
      answer.innerText = "You beat Scissors"
    }
  }
    // if we select paper, if they choose rock, they lose, if they choose scissors, we lose. 
  else if(choice == 1){
    if(decision == 0){
      answer.innerText = "You beat Rock"
    } else if(choice == 2){
    answer.innerText = "You lost to Scissors"
  }

  } else if(choice == 2){
      if(decision == 0){
        answer.innerText = "You lost to Rock"
      } else if(decision == 1){
        answer.innerText = "You beat Paper"
      }
  }
}

let colors = document.querySelectorAll(".colorSquare")
// for each square.


const timesClicked = {'red':0, 'yellow': 0, 'green':0};

colors.forEach(square => {
  square.onclick = () => {
      timesClicked[square.value]++;
       let clicks = document.getElementById(`${square.value}Click`)
        clicks.innerText = timesClicked[square.value]
    
     if(square.value == "red"){
         compute(0);
        choice.innerText = "You clicked Rock"
     } else if(square.value == "yellow"){
       compute(1)
      choice.innerText = "You clicked Paper"
           
     } else if(square.value == "green"){
        choice.innerText = "You clicked Scissors"
        compute(2);
     }
  }
})