window.addEventListener('load',() =>{
const sounds=document.querySelectorAll('.sound');
const pads=document.querySelectorAll('.pads div');
const visual=document.querySelector('.visual');
const colours=[
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b2d3"
];
pads.forEach((pads,index) =>{
   pads.addEventListener('click',function(){
    sounds[index].currentTime=0;
    sounds[index].play();
    creaBubbles(index);
});

});
const creaBubbles=(index)=>{
    const buble=document.createElement('div');
    visual.appendChild(buble);
    buble.style.backgroundColor=colours[index];
    buble.style.animation="jump 1s ease"
}

});