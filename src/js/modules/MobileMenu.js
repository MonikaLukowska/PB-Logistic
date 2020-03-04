class MobileMenu{
    constructor(){
        this.burger = document.querySelector(".header__burger");
        this.nav = document.querySelector('.header__nav')
        this.events()
    }
    events(){
        this.burger.addEventListener('click', () => this.toggleMenu())
        this.nav.addEventListener('click', () => this.toggleMenu())
    }

    toggleMenu(){
        this.burger.classList.toggle('header__burger--close');
        this.nav.classList.toggle('header__nav__active');
    }
}

export default MobileMenu