var mouseEvent="";
var color="blue";
canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var last_position_of_X,last_position_of_Y;
var line_width=1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("color").value;
    line_width=document.getElementById("line_width").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
  var current_position_of_X= e.clientX-canvas.offsetLeft; 
  var current_position_of_Y= e.clientY-canvas.offsetTop;

  if(mouseEvent=="mousedown"){
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=line_width;
      ctx.moveTo(last_position_of_X,last_position_of_Y);
      ctx.lineTo(current_position_of_X,current_position_of_Y);
      ctx.stroke();

  }

  last_position_of_X= current_position_of_X;
  last_position_of_Y= current_position_of_Y;
}

function cleararea(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}
