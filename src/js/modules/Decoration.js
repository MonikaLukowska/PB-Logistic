class Decoration{
    constructor(){
        this.right = document.querySelector('.decoration--right');
        this.rightTop = document.querySelector('.decoration--right--t');
        this.rightBottom = document.querySelector('.decoration--right--b');
        this.leftTop = document.querySelector('.decoration--left--t');
        this.leftBottom = document.querySelector('.decoration--left--b');
        this.event();
    }

    event(){
        window.addEventListener('scroll', () => this.moveStripes());
    }

    moveStripes(){
        let lastScrollTop = 100
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if(st > lastScrollTop){
            this.rightTop.style.left = "-50%";
            this.rightBottom.style.left = "-50%"; 
            this.leftTop.style.left = "-50%"; 
            this.leftBottom.style.left = "-50%"; 
        } else {
            this.rightTop.style.left = "20%";
            this.rightBottom.style.left = "20%";
            this.leftTop.style.left = "20%";
            this.leftBottom.style.left = "20%";
        }
    }

}

export default Decoration