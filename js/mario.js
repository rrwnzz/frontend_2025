// alert(); check if the connectio between html and js is successfully done
var mario=document.getElementById('mario');
var left=0;
var top1=52;
// console.log(mario);
function moveUP(){
    console.log('up')
    if (top1>453){
        return
    }
    top1=top1+10
    mario.style.bottom=top1+'px'
    console.log(mario.style.bottom)
}
function moveDown(){
    console.log('down')
    if (top1<53){
        return
    }
    top1=top1-10
    mario.style.bottom=top1+'px'
    console.log(mario.style.bottom)
}
function moveRight(){
    if (left>760){
        return
    }
    console.log('right')
    left=left+10
    mario.style.left=left+'px'
    console.log(mario.style.left) 
    // we used the console to track the left var value 
}
function moveLeft(){
    console.log('left')
    if (left<=0){
        return
    }
    left=left-10
    mario.style.left=left+'px'
    console.log(mario.style.left) 
}
function moveRandom() {
    var maxLeft = 760;  // Maximum allowed left position
    var maxBottom = 453; // Maximum allowed bottom position
    var minBottom = 52;  // Minimum allowed bottom position
    // Generate random positions within the allowed range
    var randomLeft = Math.floor(Math.random() * maxLeft);
    var randomBottom = Math.floor(Math.random() * (maxBottom - minBottom)) 
    // Apply the new position to Mario
    mario.style.left = randomLeft + 'px';
    mario.style.bottom = randomBottom + 'px';
}


