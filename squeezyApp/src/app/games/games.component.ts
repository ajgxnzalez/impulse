import { Component, OnInit } from '@angular/core';
//issues
// why doesn't property binding update --> because need to make sure it's linked to that variable not one of feeder variables
//try using string interpolation for seconds
//fix sprites

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
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
  // leftResult: number;
  arrayNumber: number;
  backgroundArray: string[];
  spriteArray: string[];
  activeSprite: string;
  startBtn: string;
  gameDiv: string;
  seconds: number = 10;
  btnResetDisplay: string;

  constructor() {
    this.leftNum = this.setLeftNumber();
    this.topNum = this.setTopNumber();
    this.spriteLeftNum;
    this.spriteTopNum;
    // this.leftResult = this.leftNum - this.spriteLeftNum;
    this.spriteArray = ['pigUrl', 'elephantUrl'];
    this.activeSprite = this.spriteArray[0];
    this.btnResetDisplay = 'none';
    this.startBtn = 'inline-block';
    this.gameDiv = 'none';

    this.score = 0;
    this.leftMin = 10;
    this.leftMax = 80;
    this.topMin = 1;
    this.topMax = 80;

    this.backgroundArray = [
      'https://www.jing.fm/clipimg/full/86-862909_forest-background-big-tree-clip-art.png',
      'https://www.setaswall.com/wp-content/uploads/2017/06/Cartoon-Background-2560-x-1600-768x480.jpg',
    ];

    this.arrayNumber = 0;
    this.backUrl = this.backgroundArray[this.arrayNumber];
    // this.seconds = this.doCountdown();
    // this.seconds = 10;
  }

  startGame() {
    this.startBtn = "none";
    this.gameDiv = "block";
  }

//Doesn't seem to be changing the global variable
  doCountdown() {
    // this.seconds = 30;
    let localSeconds = this.seconds;
    let countdown: number = setInterval(function () {
      localSeconds--;
      this.seconds = localSeconds;
      console.log(this.seconds);

      if (this.seconds <= 0) {
        clearInterval(countdown);
        console.log("reached");
        // this.seconds = 30;
        // this.gameDiv = 'none';
        // this.startBtn = 'inline-block';

        //display game over + score
        //make reset buttons visible
        //make cat and other sprite invisible
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
      // console.log(this.spriteLeftNum);
    } else if (leftNum - 20 > this.leftMin && topNum - 20 < this.topMin) {
      this.spriteLeftNum = leftNum - 20;
      this.spriteTopNum = topNum + 20;
    } else if (leftNum - 20 < this.leftMin && topNum - 20 > this.topMin) {
      this.spriteLeftNum = leftNum + 20;
      this.spriteTopNum = topNum - 20;
    } else {
      // console.log(leftNum);
      // console.log(topNum);
    }
  }

  ngOnInit(): void {}
}

//only thing not working on game is timer

//need icons or robocat, pig & elephant

//need free to use background images
