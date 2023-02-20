	var ctx2 = null;
	var canvas2;
	var pointSize=6;

	canvas2 = document.getElementById('mycanvas2');
	ctx2 = canvas2.getContext('2d'),
	transX = canvas2.width*0 , //21
	transY = canvas2.height * 1; //399
	ctx2.translate(transX, transY);
	ctx2.fillRect(0,-transY, 1, canvas2.height); //vertical Axis
	ctx2.fillRect( - transX, 0, canvas2.width, 1); //Horizantal Axis
	ctx2.style.position= 'absolute'; 
	ctx2.style.top = '0px';
	ctx2.style.left = '-167px';
	ctx2.style.visibility='visible'; 
	ctx2.style. width='450px';
		canvas2.onmousemove = function(e) {
	var pos2 = getMousePos2(canvas2, e);
	out.innerHTML = 'X:' + pos2.x + ' Y:' + pos2.y;

	}
	};
   function getPosition2(event){
     var rect = canvas2.getBoundingClientRect();
     x = event.clientX - rect.left- transX;
     y = event.clientY - rect.top- transY;
    // drawCoordinates(x,y);
	// tabled();
	
   }
   function getMousePos2(canvas2, evt) {
	var rect = canvas2.getBoundingClientRect();
	return {
	x: evt.clientX - (rect.left + 0.5) - transX,
	y: evt.clientY - rect.top - transY
           };
   }
// JavaScript Document