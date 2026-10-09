//variables
let questionBlock1 = [
  "Catculus: How much is 1 + 1?  Answer0 = 2;  Answer1 = 3; Answer2 = 1 googol; Answer4 = 0,1",
  "Nintendo E3, finish the sentence:..and ofcouse Mario will never start shooting ??? Answer0 = hookers; Answer1 = koopa's; Answer2 = goomba's; Answer3 = people",
  "Meowgraphy: what is the capital of Turkey? Answer0 = Constantinople; Answer2 = Ankara; Answer1 = Byzantium; Answer3 = Bursa",
  "Meowlogics: What does a cowsay? Answer0 = moo; Answer2 = depends on the word after cowsay; Answer1 = the earth is flat; Answer3 = fortnite",
  "Meow: Why did the last two questions mix answers? Answer2 = to throw you of; Answer0 = because am lazy; Answer4 = because cats mix things up; Answer3 = heh",
  "Catculus: How much is 2 + 2; Answer 3 = 2 googol Answer 4 = 5; Answer 2 = 4; Answer 4 = 10; Answer1 = 0",
  "Communism: Which country ISNT communist? Answer 0 = laos; Answer 1 = DPRK; Answer 3 = uzbekistan; Answer 2 = China",
  "Who??: Who's cool?  Answer3 = me Answer 123 = not me :(",
  "Meowgraphy: Where's greece? Answer 0: under serbia; Answer 2: under montenegro; Answer 3: north macedonia;Answer 4: under cyprus",
  "Meowlogics: Why is grass green? Answer 4 it reflects blue light; answer 1 it absorbs green light; answer 3 it reflects green light answer 2 it reflects green lights",
  "you hvae clmpeoted the erliaer tirals now the lsat the mddile of the wrdos are shffuled; im felsh nor bolod, sikn nor bnoe, but i hvae tuhmbs and fngiers of my own?Asnwer4: gvloeAnsewr2:ckichnefngiersAwnser0:ntoihng "
]

let answerBlock1 = [];
let answerBlock2 = [];
let answerBlock3 = [];
let answerBlock4 = [];

let prizes = ["€50,-","€100,-","€250,-","€500,-","€1.000,-","€4.000,-","€8.000,-","€16.000,-","€32.000,-","€128.000,-","€256.000,-","€1.000.000,-"];
let buttons = [];
let refresh = false;
let startTimer = false;
let isStarted = false;
let playerVar = 0;
let questionVar = 0;
let optionVar = 0;
let timer = 0;
let timer2 = 0;
let questionsRight = 0;
let questionsWrong = 0;

let isFalse = false;

let bgImg;
let hostImg;
let img1;
let img2;
let img3;

let currentQuestion
let answerButton1;
let answerButton2;
let answerButton3;
let answerButton4;
let answerButton;

let x = 1;
let y = 1;

function setup() {
createCanvas(800, 600);  
currentQuestion = random(questionBlock1);
}

function preload() {
    bgImg = loadImage("Assets/BG.png");
    hostImg = loadImage("Assets/Host.png");
    img1 = loadImage("Assets/PlayerCharacter1.png");
    img2 = loadImage("Assets/PlayerCharacter2.png");
    img3 = loadImage("Assets/PlayerCharacter3.png");
}

function buildUI() {
  //de balk boven en de prijzenbalk
  textSize(8)
  fill("blue");
  rect(340,60,100,300);
  rect(0,0,800,60);
  fill("white");

  //buttons
if (refresh == false) {
  for (let i = 0; i < 4; i++) {
  if (i == 0) {
    answerButton = answerButton1;
  } else if (i == 1) {
     y += 1;
    answerButton = answerButton2;
  } else if (i == 2) {
    y-= 1;
    x +=1;
    answerButton = answerButton3;
  } else {
    y += 1;
    answerButton = answerButton4
  }
      
  answerButton = createButton("ANSWER " + i);
  answerButton.style('background-color', '#0b124d');
  answerButton.style('font-size', '50px');
  answerButton.position(x*300 - 200, y*100 + 300);
  answerButton.mousePressed(answerButtonFunction);
  buttons.push(answerButton);
  }
}
refresh = true;
// tekst van de ui
  for (let i = 0; i < prizes.length; i++) {
    if (questionVar == i) {
     fill("yellow");
    } else {
      fill("white");
    }
    text(prizes[i], 350, i* 20 + 80 )
  }
  text(questionBlock1[questionVar],20,30);
}

function answerButtonFunction() {
  // checkt waar de muis is wanneer de button is geklikt
  if (mouseX < 370 && mouseY < 470 && questionVar < 2){
    questionVar += 1;
   } else if (mouseX > 370 && mouseY < 470 && questionVar >= 2 && questionVar < 4) {
     questionVar += 1;
   } else if (mouseX < 370 && mouseY > 470 && questionVar >= 4 && questionVar < 6) {
      questionVar += 1;
   }  else if (mouseX > 370 && mouseY > 470 && questionVar >= 6 && questionVar < 12) {
     questionVar += 1;
} else {
  isFalse = true;
  isStarted = false;
  }
}
function draw() {
 background("black");
 fill("white");
 if (isStarted == false && isFalse == true) {
  background("black");
  fill("white");
  text("you won " + prizes(questionVar) + "because you had " + questionVar + "questions right",20,20);
 }

 if (isStarted == false && isFalse == false) {

   text("Who wants to be a millionaire but with cats, also the building will suffer a mild blackout when you lose!,  1:Default cat 2:kitten 3: Le chat",20,20)
 }

 if (keyIsPressed == true && isStarted == false) {
  if (keyCode == 49) {
   playerVar = 1;
   isStarted = true;
 } else if (keyCode == 50) {
   playerVar = 2;
  isStarted = true;
 } else if (keyCode == 51) {
   playerVar = 3;
  isStarted = true;
 } else if (keyCode == 52)  {
   playerVar = 4;
   isStarted = true;
 }
} 

 if (isStarted == true) {
   image(bgImg, 0,0,800,600);
   image(hostImg, 600,170,140,240);
   if (timer >= 120) {
     buildUI();
   } else {
    timer += 1;
   }
 }


  if (playerVar == 1 && isFalse == false) {
    image(img1, 20,180,140,240);
  } else if (playerVar == 2) {
   image(img2, 20,180,140,240);
  } else if (playerVar == 3) {
   image(img3, 20,180,140,240);
  } else if (playerVar == 4) {
   fill("yellow");
  } else {
   fill("black");
  }
}