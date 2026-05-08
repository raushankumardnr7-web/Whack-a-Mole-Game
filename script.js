const holes = document.querySelectorAll(".hole");
const scoreText = document.getElementById("score");

let score = 0;
let currentHole;
let game;

function randomHole() {

  holes.forEach(hole => {
    hole.classList.remove("mole");
  });

  const index = Math.floor(Math.random() * holes.length);

  currentHole = holes[index];

  currentHole.classList.add("mole");
}

holes.forEach(hole => {

  hole.addEventListener("click", () => {

    if(hole === currentHole){

      score++;
      scoreText.innerText = score;

      currentHole.classList.remove("mole");
    }

  });

});

function startGame(){

  score = 0;
  scoreText.innerText = score;

  game = setInterval(randomHole, 900);

  setTimeout(() => {

    clearInterval(game);

    alert("Game Over! Your Score: " + score);

  }, 10000);

}