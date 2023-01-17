const links= document.querySelector('.links');
const closeMenu= document.querySelector('.closeMenu');
const openMenu= document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',hide);

function show(){
    links.style.display = 'flex';
    links.style.top ='0';
}



function hide(){
    links.style.top = '-100%';
}