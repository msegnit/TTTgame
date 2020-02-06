/*----- app's state (variables) -----*/

let board, turn, winner;
var confettiSettings = { target: 'my-canvas' };

/*----- cached element references -----*/

var sq = document.querySelectorAll('td div');
var message = document.querySelector('h1');

/*----- event listeners -----*/

document.querySelector('.board').addEventListener('click', handleClick);
document.querySelector('button').addEventListener('click', initialize);

/*----- functions -----*/

function initialize() {
   board = [null, null, null, null, null, null, null, null, null];
   turn = 1;
   winner = null;
   render();
    
    };

   // function checkForWin() {
    //     if() {
   //  board = [0] + [1] + [2] === 3 ||
   //  board = [3] + [4] + [5] === 3 ||
   //  board = [6] + [7] + [8] === 3 ||
   //  board = [0] + [3] + [6] === 3 ||
   //  board = [1] + [4] + [7] === 3 ||
   //  board = [2] + [5] + [8] === 3 ||
   //  board = [0] + [4] + [8] === 3 ||
   //  board = [2] + [4] + [6] === 3 ||     
    //     }
   // }

    function handleClick(evt) {
        let square = document.getElementById(evt.target.id)
        //let id = (evt.target.id);
        //id = parseInt(id[2]);
        //board[id] = 4
        //console.log(board)
    
        if(turn ===1) {
            square.innerHTML="x"; 
            turn =-1
        } else {
            square.innerHTML="o"
            turn =1
        }
        console.log(square);
    }
