// We will enclose all game functionality in one function to guard the scope
function game() {
  const squares = document.querySelectorAll(".square");
  const score = document.querySelector("#score");
  const timeLeft = document.querySelector("#time-left");
  let seconds = 60;

  function play() {
    seconds--;
    timeLeft.textContent = seconds;
    if (seconds > 0) {
      setMole();
      setTimeout(play, 1000);
    } else {
      alert("GAME OVER");
    }
  }

  function addScore(event) {
    if (event.target.classList.contains("mole")) {
      score.textContent = parseInt(score.textContent) + 1;
    }
  }

  function setMole() {
    //random gives me a number x between 0 < x < 1
    // x * 9, for x = 0,9999 => 8.something
    //Math.floor ignores the fractional part of a double/float
    squares.forEach((square) => square.classList.remove("mole"));
    const index = Math.floor(Math.random() * 9);
    squares[index].classList.add("mole");
  }

  squares.forEach((square) => square.addEventListener("click", addScore));

  play();
}

// start the game by invoking the function game()
game();
