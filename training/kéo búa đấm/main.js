let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}
function convertToWord(str){
    if (str === "r"){
        return "Đá";
    }
    if(str === "p") return "Giấy";
    return "Kéo"
}
function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize("3px").sub();
    const smallCompWord = "comp".fontsize('3px').sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} Đánh Bại ${convertToWord(computer)}${smallCompWord}, Bạn Thắng 🎁🎉`
}
function lose(user, computer){
    computerScore++;
    console.log('computer win');
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize("3px").sub();
    const smallCompWord = "comp".fontsize('3px').sub();
    result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} Đánh Bại ${convertToWord(user)}${smallUserWord}, Gà 👎🏽👎🏽 `
}
function draw(user, computer){
    const smallUserWord = "user".fontsize("3px").sub();
    const smallCompWord = "comp".fontsize('3px').sub();
    result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} Hòa ${convertToWord(user)}${smallUserWord}, Tí Thua😁😁 `
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch( userChoice + computerChoice){
        case 'rs':
        case 'sp':
        case 'pr':
            {
                win(userChoice, computerChoice);
                break;
            }
        case 'rp':
        case 'ps':
        case 'sr':
            {
                lose(userChoice, computerChoice);
                break;
            }
        case 'rr':
        case 'pp':
        case 'ss':
            {
                draw(userChoice, computerChoice);
                break;
            }
    }
}
function onReset()
{
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    result_p.innerHTML = "";
}

function main(){
    rock_div.addEventListener('click', ()=>{
        game("r");
    })
    
    paper_div.addEventListener('click', ()=>{
        game("p")
    })
    
    scissors_div.addEventListener('click', ()=>{
        game("s");
    })    
}
