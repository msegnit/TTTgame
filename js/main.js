/*----- app's state (variables) -----*/

let board, turn, winner;

/*----- cached element references -----*/

var sq = document.querySelectorAll('td div');
var message = document.querySelector('h2');

/*----- event listeners -----*/

document.querySelector('.board').addEventListener('click', handleClick);
document.querySelector('.buttonclass').addEventListener('click', refresh);

/*----- functions -----*/

function initialize() {
   board = [null, null, null, null, null, null, null, null, null];
   turn = 1;
   winner = null;
   message.innerHTML = "It's X's Turn!";
    };

   function checkForWin() {
       console.log("test")
        if( 
    Math.abs(board[0] + board[1] + board[2]) === 3 ||
    Math.abs(board[3] + board[4] + board[5]) === 3 ||
    Math.abs(board[6] + board[7] + board[8]) === 3 ||
    Math.abs(board[0] + board[3] + board[6]) === 3 ||
    Math.abs(board[1] + board[4] + board[7]) === 3 ||
    Math.abs(board[2] + board[5] + board[8]) === 3 ||
    Math.abs(board[0] + board[4] + board[8]) === 3 ||
    Math.abs(board[2] + board[4] + board[6]) === 3){
        message.innerHTML = "There's A Winner!!";

        console.log("test2")
    }
       
    }

    function handleClick(evt) {
        let square = document.getElementById(evt.target.id)
        let id = (evt.target.id);
        id = parseInt(id[2]);
        board[id] = turn
        console.log("board")
    if (square.innerHTML === "") { 
        if(turn ===1) {
            square.innerHTML = "x"; 
            message.innerHTML = "It's O's Turn!";
             checkForWin()
             turn =-1
        } else {
            square.innerHTML= "o"
            message.innerHTML = "It's X's Turn!";
             checkForWin()
            turn =1
        }
    }
        console.log(square);
    }

    function refresh() {  
        document.location.reload()
        
    }

    initialize()
