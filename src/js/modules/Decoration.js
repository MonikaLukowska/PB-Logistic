class Decoration{
    constructor(){
        this.decorationRight = [...document.querySelector('.decoration--right').children];
        this.decorationLeft = [...document.querySelector('.decoration--left').children];
        this.event();    
    }

    event(){
        window.addEventListener('scroll', () => this.addClassAnimation())
    }

    addClassAnimation(){
        let lastScrollTop = 100
        let st = window.pageYOffset || document.documentElement.scrollTop;
         if(st > lastScrollTop){
             for(let i = 0; i < this.decorationLeft.length; i++){
                 this.decorationLeft[i].classList.add('animated');
                 this.decorationRight[i].classList.add('animated');
             }
         }else{
              for(let i = 0; i < this.decorationLeft.length; i++){
                 this.decorationLeft[i].classList.remove('animated');
                 this.decorationRight[i].classList.remove('animated');
             }
         }
    }

}

export default Decoration