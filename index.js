console.log("Welcome to Rock Paper Scissors!");

// PseudoCode
// 1. User chooses rock, paper, or scissors
// 2. Computer chooses rock, paper, or scissors
// 3. Compare user choice to computer choice
// 4. Determine winner
// 5. Display winner

// Code Implementation

const userChoice = () => {
  const theChoice = prompt("Choose rock or paper or scissor [case sensitive]");
  if (
    theChoice === "rock" ||
    theChoice === "paper" ||
    theChoice === "scissor"
  ) {
    // console.log(`User Choosen ${theChoice}`);
    return theChoice;
  } else {
    alert("please choose rock or paper or scissor [case sensitive]");
    return userChoice(); //Recursion
  }
};

const computerChoice = () => {
  const choices = ["rock", "paper", "scissor"];
  const algo = Math.floor(Math.random() * 3);
  //   console.log(`Randomly Generated Number is ${algo}`);
  const theChoice = choices[algo];
  //   console.log(theChoice);

  return theChoice;
};

const compare = (one, two) => {
  if (
    (one == "rock" && two == "paper") ||
    (one == "paper" && two == "scissor") ||
    (one == "scissor" && two == "rock")
  ) {
    return `User wins!`;
  } else if (
    (two == "rock" && one == "paper") ||
    (one == "paper" && one == "scissor") ||
    (one == "scissor" && one == "rock")
  ) {
    return "PC wins!";
  } else if (one === two) {
    return "Tie";
  } else {
    alert("Unknown error Restart the Game!");
  }
};
const theWinner = () => {
  alert(compare(userChoice(), computerChoice()));
};

console.log(theWinner());
