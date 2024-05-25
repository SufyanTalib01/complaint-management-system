let MenuToggle = document.querySelector('#menu-toggle');
let SideBar = document.querySelector('#side-bar');

MenuToggle.addEventListener('click' , function(){
    SideBar.classList.toggle('active');
})

