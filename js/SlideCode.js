var step=0
function slideit(){
 //if browser does not support the image object, exit.
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 if (step<3)
  step++
 else
  step=0
 //call function "slideit()" every 2.5 seconds
 setTimeout(slideit,2500)
}
slideit()