// alert(); check if the connectio between html and js is sussefully done
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
    // to track the left var value we made the console
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
