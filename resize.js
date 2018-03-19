/*
<table>
  <tr>
    <td class="vasya">
      Vasya
    </td>
    <td class="border"></td>
    <td>
      40
    </td>
    <td class="border"></td>
    <td>
      male
    </td>
    <td class="border"></td>
  </tr>
  <tr>
    <td>
      Petya
    </td>
    <td class="border"></td>
    <td>
      30
    </td>
    <td class="border"></td>
    <td>
      female
    </td>
    <td class="border"></td>
  </tr>
</table>
<div class="console">console</div>
 */


/* 
.border{
  border: 1px solid black;
}

.border:hover{
  cursor: col-resize;
}

.vasya{
  width: 100px;
}


*/

const table = document.querySelector('table');
const myConsole = document.querySelector('.console');
let startX;
let cellWidth;
let cell;

function mouseMoveX(e){
  let currentX = e.screenX
  let newCellWidth = cellWidth + currentX - startX;
  console.log(cell.style)
  cell.style.width = newCellWidth + 'px';
  myConsole.innerText = newCellWidth;
}

table.addEventListener('mousedown', e=>{
	e.preventDefault();
  if (e.target.classList.contains('border')) {
    let border = e.target;
    cell = e.target.previousElementSibling;
    cellWidth = cell.offsetWidth;
    startX = e.screenX;
    
    window.addEventListener('mousemove', mouseMoveX)
 
 		window.addEventListener('mouseup', ()=>{
      window.removeEventListener('mousemove', mouseMoveX);
      table.onmouseup = null;
    })
    
  }
})