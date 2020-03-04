import '../sass/style.scss';
import { gsap } from "gsap"
import aos from "aos";
import Decoration from './modules/Decoration';
import Hero from './modules/Hero';
import MobileMenu from './modules/MobileMenu';

const decoration = new Decoration();
const hero = new Hero();
const mobileMenu = new MobileMenu;


AOS.init({
     duration: 1200,
});

 