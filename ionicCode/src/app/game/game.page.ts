import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  backUrl: string;
  score: number;
  leftMin: number;
  leftMax: number;
  topMin: number;
  topMax: number;

  leftNum: number;
  topNum: number;
  spriteLeftNum: number;
  spriteTopNum: number;
  arrayNumber: number;
  backgroundArray: string[];
  spriteArray: string[];
  activeSprite: string;
  startBtn: string;
  gameDiv: string;
  seconds: number = 30;
  btnResetDisplay: string;
  btnScoreDisplay: string;
  startBtnMessage: string;

  constructor() { 
    this.leftNum = this.setLeftNumber();
    this.topNum = this.setTopNumber();
    this.spriteLeftNum;
    this.spriteTopNum;
    this.spriteArray = [
      'https://www.pngfind.com/pngs/m/524-5247358_free-stock-photo-cartoon-elephant-transparent-background-hd.png',
     'https://i.pinimg.com/564x/63/06/c0/6306c0e868d30bac5a325b076c1320fa.jpg'];
    this.activeSprite = this.spriteArray[0];
    this.btnResetDisplay = 'none';
    this.btnScoreDisplay = 'none';
    this.startBtn = 'inline-block';
    this.gameDiv = 'none';

    this.score = 0;
    this.leftMin = 10;
    this.leftMax = 70;
    this.topMin = 1;
    this.topMax = 65;

    this.backgroundArray = [
      'https://www.jing.fm/clipimg/full/86-862909_forest-background-big-tree-clip-art.png',
      'https://www.setaswall.com/wp-content/uploads/2017/06/Cartoon-Background-2560-x-1600-768x480.jpg',
      'https://images.all-free-download.com/images/graphiclarge/cartoon_city_landscape_vector_522297.jpg',
      'https://images.all-free-download.com/images/graphicthumb/supermarket_showcase_and_food_vector_set_577387.jpg',
    ];

    this.arrayNumber = 0;
    this.backUrl = this.backgroundArray[this.arrayNumber];
    this.startBtnMessage = "Start Game";
  }
  
   startGame() {
    this.startBtn = "none";
    this.gameDiv = "block";
    this.btnScoreDisplay ="none";
    this.score = 0;
  }

  doCountdown() {
    let localSeconds = this.seconds;
    let countdown: number = setInterval( () => {
      localSeconds--;
      this.seconds = localSeconds;

      if (this.seconds <= 0) {
        clearInterval(countdown);
        console.log("reached");
        this.seconds = 30;
        this.gameDiv = 'none';
        this.startBtn = 'inline-block';
        this.startBtnMessage = 'Reset Game';
        this.btnScoreDisplay = 'inline-block';
    
      }
    }, 1000);
  };

  //setting the numbers for positioning robo cat button
  setLeftNumber() {
    let random = 100 * Math.random();
    while (random <= this.leftMin || random >= this.leftMax) {
      random = 100 * Math.random();
    }
    return random;
  }
  setTopNumber() {
    let random = 100 * Math.random();
    while (random <= this.topMin || random >= this.topMax) {
      random = 100 * Math.random();
    }
    return random;
  }

  //event bound to robo cat button
  addScore() {
    this.score++;
    this.setPosition();

    if (this.activeSprite == this.spriteArray[0]) {
      this.activeSprite = this.spriteArray[1];
    } else {
      this.activeSprite = this.spriteArray[0];
    }
  

    //changes the background
    if (this.arrayNumber < this.backgroundArray.length - 1) {
      this.arrayNumber++;
      this.backUrl = this.backgroundArray[this.arrayNumber];
    } else {
      this.arrayNumber = 0;
      this.backUrl = this.backgroundArray[this.arrayNumber];
    }
  }

  //event bound to other sprite button
  decreaseScore() {
    this.score--;
    this.setPosition();

    // change sprite if wrong one clicked
    if (this.activeSprite == this.spriteArray[0]) {
      this.activeSprite = this.spriteArray[1];
    } else {
      this.activeSprite = this.spriteArray[0];
    }
  }

  setPosition() {
    //position robo cat
    this.leftNum = this.setLeftNumber();
    this.topNum = this.setTopNumber();
    //to position the other button (sprite)
    this.placeOtherSprite(this.leftNum, this.topNum);
  }
  //more conditionals can be added here to make it more dyanmic
  placeOtherSprite(leftNum, topNum) {
    if (leftNum - 20 > this.leftMin && topNum - 20 > this.topMin) {
      this.spriteLeftNum = leftNum - 20;
      this.spriteTopNum = topNum - 20;
    } else if (leftNum - 20 > this.leftMin && topNum - 20 < this.topMin) {
      this.spriteLeftNum = leftNum - 20;
      this.spriteTopNum = topNum + 20;
    } else if (leftNum - 20 < this.leftMin && topNum - 20 > this.topMin) {
      this.spriteLeftNum = leftNum + 20;
      this.spriteTopNum = topNum - 20;
    } else {
    }
  }

  ngOnInit(): void {}
}

//need icons or robocat, pig & elephant

//need free to use background images
