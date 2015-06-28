

var allSquares = document.querySelectorAll('.square');

var square1 = allSquares[0];
var square2 = allSquares[1];
var square3 = allSquares[2];
var square4 = allSquares[3];
var square5 = allSquares[4];
var square6 = allSquares[5];
var square7 = allSquares[6];
var square8 = allSquares[7];
var square9 = allSquares[8];
var displayWinner= document.querySelector('#chicken');

var catVideo = document.querySelector('#bg');

//board array
var ticArray = [[null,null,null],
                [null,null,null],
                [null,null,null]];

// variable count used to module turn
var count = 0;
var win = false;
var winner;
var catNum = 0;
var xWins = 0;
var oWins = 0;


//declare winner function
var done = function() {
  displayWinner.innerText = "Player " + winner + " won!!!";
  win = true;
  catNum = 0;
  if (winner ==="X"){
  catVideo.src="https://www.youtube.com/embed/7IzSGvXc_PM?controls=0&amp;autoplay=1&amp;loop=1&amp;playlist=PLnxKRDqGMqIVlevvxBQilAV_pNVE_CVaY&amp&amp;showinfo=0&amp;modestbranding=1&amp;disablekb=1&amp;enablejsapi=1";
  xWins++;

} else {
    catVideo.src="https://www.youtube.com/embed/weQXyimKUPA?controls=0&amp;autoplay=1&amp;loop=1&amp;playlist=PLnxKRDqGMqIVlevvxBQilAV_pNVE_CVaY&amp&amp;showinfo=0&amp;modestbranding=1&amp;disablekb=1&amp;enablejsapi=1";
    oWins++;
}
  catVideo.style.opacity ="0.2";
  displayWins();
};

//display number of players wins
var playerX = document.querySelector('#playerX');
var playerO = document.querySelector('#playerO');

var displayWins = function(){
  playerX.innerText = xWins;
  playerO.innerText = oWins;
};


//mark move and determine if there is a winner
var move = function(){


  if (this.innerText==="X"|| this.innerText==="O" || win === true) {
    return null;
  } else if (count % 2 === 0) {
    this.innerText = 'X';
    count++;
    catNum ++;
  } else {
  this.innerText = 'O';
  count++;
  catNum++;
  }

  ticArray = [[square1,square2,square3],
              [square4,square5,square6],
              [square7,square8,square9]];

//check for horizontal winner
    for (var i = 0; i < 3; i++){
      if(ticArray[i][0].innerText === ticArray[i][1].innerText && ticArray[i][0].innerText === ticArray[i][2].innerText && ticArray[i][0].innerText !== ""){
      winner = ticArray[i][0].innerText;
      ticArray[i][0].style.color='blue';
      ticArray[i][1].style.color='blue';
      ticArray[i][2].style.color='blue';
      done();
    }
  }


//check for veritcal winner
    for(var j = 0; j < 3; j++) {
      if(ticArray[0][j].innerText === ticArray[1][j].innerText && ticArray[0][j].innerText === ticArray[2][j].innerText && ticArray[0][j].innerText !== ""){
        winner = ticArray[0][j].innerText;
        ticArray[0][j].style.color='blue';
        ticArray[1][j].style.color='blue';
        ticArray[2][j].style.color='blue';
        done();
    }
  }

//check for diagonal winner
    if(
      ticArray[0][0].innerText === ticArray[1][1].innerText && ticArray[0][0].innerText === ticArray[2][2].innerText && ticArray[0][0].innerText !== ""){
        winner = ticArray[0][0].innerText;
        ticArray[0][0].style.color='blue';
        ticArray[1][1].style.color='blue';
        ticArray[2][2].style.color='blue';

        done();
      }

//check for diagonal winner
    if(
      ticArray[0][2].innerText === ticArray[1][1].innerText && ticArray[0][2].innerText === ticArray[2][0].innerText && ticArray[0][2].innerText !== ""){
      winner = ticArray[0][2].innerText;
      ticArray[0][2].style.color='blue';
      ticArray[1][1].style.color='blue';
      ticArray[2][0].style.color='blue';

      done();
    }

//check for cat's game
    if(win === false && catNum === 9) {
        displayWinner.innerText = "Cat's Game!!";
        catNum = 0;
        count =0;
        catVideo.src="https://www.youtube.com/embed/YZs3EADi2pQ?controls=0&amp;autoplay=1&amp;loop=1&amp;playlist=PLnxKRDqGMqIVlevvxBQilAV_pNVE_CVaY&amp&amp;showinfo=0&amp;modestbranding=1&amp;disablekb=1&amp;enablejsapi=1";
        catVideo.style.opacity ="0.25";
        displayWins();
    }

};

for (var k = 0; k < 9; k++){
allSquares[k].addEventListener('click',move);
}

var nextGame = document.querySelector('#nextGame');

//clear the board and logic values to start new game
var clearBoard = function(){
  for (var l = 0; l < 9; l++){
  allSquares[l].innerText="";
  }

  for(var m = 0; m < 3; m++){
      ticArray[m][0].style.color = "black";
      ticArray[m][1].style.color = "black";
      ticArray[m][2].style.color = "black";
    }

  ticArray = [[null,null,null],
              [null,null,null],
              [null,null,null]];
  catNum = 0;
  count = 0;
  catVideo.src="";
  win = false;
  displayWinner.innerText="";



};

nextGame.addEventListener('click',clearBoard);

//Reset game
var reset = document.querySelector('#reset');

var restartGame = function(){

  oWins=0;
  xWins=0;
  clearBoard();
  displayWins();

};

reset.addEventListener('click',restartGame);
