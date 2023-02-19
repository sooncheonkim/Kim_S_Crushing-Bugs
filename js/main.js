let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	draggedPiece;



// step 3
function changeBGImage() {
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
	// bug fix #1 here(3 lines)ß
    puzzlePieces.forEach(element => {
		if(element.getAttribute('alt') == 'top left') {
			element.setAttribute('src','images/topLeft'+this.id+'.jpg')
		} else if(element.getAttribute('alt') == 'top right') {
			element.setAttribute('src','images/topRight'+this.id+'.jpg')
		} else if(element.getAttribute('alt') == 'bottom left') {
			element.setAttribute('src','images/bottomLeft'+this.id+'.jpg')
		} else if(element.getAttribute('alt') == 'bottom right') {
			element.setAttribute('src','images/bottomRight'+this.id+'.jpg')
		}
	});
}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); 
	console.log('dragged over me'); 
}

function handleDrop(e) { 
	e.preventDefault();
	console.log('dropped something on me');
	// bug fix #1 here
	if(this.children.length>0) return;
	this.appendChild(draggedPiece);
}


// step 2

theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));