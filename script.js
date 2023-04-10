 function main (usergrid){ //creating the grid function
 let board = document.querySelector('.container')
board.style.gridTemplateColumns = `repeat(${usergrid},1fr)`
board.style.gridTemplateRows = `repeat(${usergrid},1fr)`

const total = usergrid * usergrid; // amount of squares needed
console.log(total)

for (let i = 0; i < total ; i++){ // loop to crete divs as in squares of the grid
    let square = document.createElement('div')
    square.style.backgroundColor = 'wheat'
    board.insertAdjacentElement("beforeend",square)
    square.addEventListener('mouseenter',(e)=>{
        square.style.backgroundColor = 'black';
    })
    const button = document.querySelector('.erase') // erase button to clear the board by recoloring
button.addEventListener('click', ()=>{
square.style.backgroundColor = 'wheat'})
}
 }
const btn = document.querySelector('.gridsize') // button that will allow user to insert another grid size
btn.addEventListener('click',gridplay)

function gridplay (){ // the main function that will load the grid
var usergrid = prompt("Please provide grid size");
main(usergrid);}
gridplay();

