let questions = ["",""]
let messages = ["lectori salutem", "sniffit or whiffit"];

let message = "";
let question = "";

let roundStarted = false;
let questionVar = 0;

let health = "";

let gameOver = false;

let amountRight = 0;
let amountWrong = 0;

let optionVar = 1;

function setup() {
  createCanvas(800, 600);
  message = random(messages);
  question = random(questions);
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (roundStarted == true) {
      roundStarted = false;
    } else {
      health = 600;
      roundStarted = true;
      questionVar = 0;  
      gameOver = false;   
    }
  }
}

function draw() {
 background("black");
 fill("white");
 strokeWeight(0);

 if (roundStarted == false && gameOver == false) {
    textSize(50);
    text(message,200,200);
    text("Press return to start",150,400);
 } else if (roundStarted == true && gameOver == false) {
    textSize(20);
    message = random(messages);
    text("HP = " + health,20,20);
    text(question,200,20)
    health --;
  } else {
    textSize(50);
    text("Press return to start",150,400);
  }

  if (health == 0 && roundStarted == true) {
    roundStarted = false;
    gameOver = true;
  }

  if (roundStarted == true) {
  for (let y = 0; y < 2; y++) {
     for (let x = 0; x < 2; x++) {
      
      if (y == 0 && x == 0) {
        optionVar = 0
      }

      optionVar ++;

      stroke("brown");
      strokeWeight(4);
      fill("yellow");
      square(x*600 + 50, y*400 + 50,100,5);

      stroke("black");
      textSize(30);
      fill("white");
      text(optionVar,x*600 + 90, y*400 + 110);

      let button = createButton(optionVar);
      button.position(x*600 + 90, y*400 +110);
     } 
   }
  }
}