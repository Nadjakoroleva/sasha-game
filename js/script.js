let lives;
let kosmos;
let enemy;
let MEET;
let am_nam;
let score = 0;
let x = 0;
let dx = 14;
let y = 0;
let dy = 16;
let C = 0;
let MEETX = 0;
let enemyX = 0;
let V = 0;
let MEETY = 0;
let enemyY = 0;
let health = 150;
let dhealth = 0;

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function preload() { // preload() runs once
  lives = loadImage("lives.png");
  kosmos = loadImage("kosmos.gif");
  enemy = loadImage("enemy.jpg");
  am_nam = loadImage("am_nam.png");
  MEET = loadImage("meet.jpg");
}


function draw() {
	MEETX = random(50, 750);
  MEETY = random(50, 750);
  enemyX = random(50, 750);
  enemyY = random(50, 750);
  kosmos.resize(900, 800);
  image(kosmos, 0, 0);
  lives.resize(health, 210);
  image(lives, 600, 50);
  am_nam.resize(0, 100);
  image(am_nam, x, y);
  enemy.resize(0, 100);
  image(enemy, enemyX, enemyY);
  MEET.resize(0, 100);
  image(MEET, MEETX, MEETY);
  if (x > enemyX) {
    enemyX = enemyX + 3;
  } else if (x < enemyX) {
    enemyX = enemyX - 3;
  }

  if (y > enemyY) {
    enemyY = enemyY + 3;
  } else if (y < enemyY) {
    enemyY = enemyY - 3;
  }

  if (x > enemyX - 30 && x < enemyX + 30) {
    if (y > enemyY - 30 && y < enemyY + 30) {
      dhealth = dhealth - 3;
    }
  }
  textSize(20);
  text(health, 700, 100);
  fill('#FF0004');
  textSize(50);
  text(score, 25, 25);

  if (x > MEETX - 50 && x < MEETX + 50) {
    if (y > MEETY - 50 && y < MEETY + 50) {
      MEETX = random(50, 750);
      MEETY = random(50, 750);
      dhealth = dhealth + 25;
      score = score + 1;

      if (score == 15) {
        fill('#FF0004');
        textSize(50);
        text("LEVEL 2", 350, 25);
        dx = dx + 2;
        dy = dy + 2;
      }
    }
  }

  if (health < 0) {
    health = 0;
    fill('#DE2D12');
    textSize(50);
    text("GAME OVER", 350, 350);
  } else {
    health = parseInt(100 - millis() / 1000 + dhealth);
    if (health > 150) {
      health = 150;
    }
  }
}
//if (health > 150) {
//  health = 150;
//}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = x + dx;
  } else if (keyCode == LEFT_ARROW) {
    x = x - dx;
  }

  if (keyCode == UP_ARROW) {
    y = y - dy;
  }
  if (keyCode == DOWN_ARROW) {
    y = y + dy;
  }
}
