class Hero{
    constructor(){
        this.hero = document.querySelector('.hero');
        this.content = document.querySelector('.hero__content');
        this.title = document.querySelector('.hero__title');
        this.subtitle = document.querySelector('.hero__subtitle');
        this.event();

    }
    event(){
        window.addEventListener('scroll', () => this.disapear());
    
    }
    disapear(){
        let lastScrollTop = 100
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if(st > lastScrollTop){
            this.content.style.opacity = 0;
            setTimeout(() =>{
                this.content.style.top = 0;
                this.hero.style.height = "50vh"
            },10)
            
        } else {
            this.content.style.opacity = 1;
           
            setTimeout(() =>{
                this.content.style.top = "50%";
                this.hero.style.height = "85vh"
            },10)
         
        }
    }
    
}
export default Hero;