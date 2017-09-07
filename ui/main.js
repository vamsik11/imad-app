console.log('Loaded!');
//for changing text in the webpage
var element =document.getElementById('main-text');
element.innerHTML='New Value';
//for moving the image in the webpage
var img =document.getElementById('maddy');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};
