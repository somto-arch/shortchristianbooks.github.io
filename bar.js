let burgerBtn = document.querySelector('.burger-menu-btn');
let burgerMenu = document.querySelector('.burger-menu');
let img = document.querySelector('img');
let isBurgerOpen = false;

burgerBtn.onclick = function() {
    if (!isBurgerOpen) {
        burgerMenu.style.display = 'block';
        img.style.display = 'none'
        burgerBtn.style.backgroundPosition = 'center left 50px, center';
        isBurgerOpen = true;
    }
    else if (isBurgerOpen) {
        burgerMenu.style.display = 'none';
        img.style.display = 'block'
        
        burgerBtn.style.backgroundPosition = 'center, center left 50px';
        isBurgerOpen = false;
    }
}
