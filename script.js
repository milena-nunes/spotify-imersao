const data = new Date();
const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.querySelector(".header_navigation");

function openMenu(){
    open.style.display = 'none'; 
    close.style.display = 'flex';
    library.style.display = 'flex';
    nav.style.display = 'flex';
}
function closeMenu(){
    open.style.display = 'flex'; 
    close.style.display = 'none';
    library.style.display = 'none';
    nav.style.display = 'none';
}
