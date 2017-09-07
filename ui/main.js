console.log('Loaded!');
//for changing text in the webpage
var element =document.getElementById('main-text');
element.innerHTML='New Value';
//for moving the image in the webpage
var img =document.getElementById('maddy');

img.onclick=function(){
    img.style.marginLeft='100px';
};
