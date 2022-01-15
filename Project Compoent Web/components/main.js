import { Home } from "./home.js";
import { About } from "./about.js"
import {DogAndCatFood} from "./dogAndCatFood.js"
import {Shop} from "./shop.js"
import {Services} from "./services.js"
import {Plan} from "./plan.js"
import {Contact} from "./contact.js"
import {Footer} from "./footer.js"


class Main{

    $container;
    $header;
    $logo;
    $nav;
    $home;
    $about;
    $shop;
    $services;
    $plan;
    $contact;
    $icons;
    $form;
    homejs;



    constructor(){
        this.$container =document.createElement('div');

        this.$header = document.createElement('header');
        this.$header.classList.add('header');

        this.$logo = document.createElement('a');
        this.$logo.href = '#';
        this.$logo.classList.add('logo');
        this.$logo.innerHTML = `<i class="fas fa-paw"></i> shop`;

        this.$nav = document.createElement('nav');
        this.$nav.classList.add('navbar');

        this.$home = document.createElement('a');
        this.$home.href = '#home';
        this.$home.innerHTML = 'Home';
        
        this.$about = document.createElement('a');
        this.$about.href = '#about';
        this.$about.innerHTML = 'About';
        
        this.$shop = document.createElement('a');
        this.$shop.href = '#shop';
        this.$about.innerHTML = 'Shop';

        this.$services= document.createElement('a');
        this.$services.href = '#services';
        this.$services.innerHTML = 'Services';

        this.$plan = document.createElement('a');
        this.$plan.href = '#plan';
        this.$plan.innerHTML = 'Plan';

        this.$contact = document.createElement('a');
        this.$contact.href = '#contact';
        this.$contact.innerHTML = 'Contact';

        this.$icons = document.createElement('div');
        this.$icons.classList.add('icons');
        this.$icons.innerHTML = `
            <div class="fas fa-bars" id="menu-btn"></div>
            <a href="" class="fas fa-shopping-cart"></a>
            <div class="fas fa-user" id="login-btn"></div
        `;

        this.$form = document.createElement('form');
        this.$form.classList.add('login-form');
        this.$form.innerHTML = `
            <h3>sign in</h3>
            <input type="email" name="" placeholder="enter your email" id="" class="box">
            <input type="password" name="" placeholder="enter your password" id="" class="box">
            <div class="remember">
                <input type="checkbox" value="sign in" id="remember-me">
                <label for="remember-me">remember-me</label>
            </div>
            <input type="submit" value="sign in" class="btn">
            <div class="links">
                <a href="#">foget your password</a>
                <a href="#">sign up</a>
            </div>
        `;

        this.homejs = new Home();
        this.aboutjs = new About();
        this.dogCatFood = new DogAndCatFood();
        this.shopjs = new Shop();
        this.servicesjs = new Services();
        this.planjs = new Plan();
        this.contactjs = new Contact();
        this.footerjs = new Footer();

    }

    render = () =>{
        this.$header.appendChild(this.$logo);
        this.$header.appendChild(this.$nav);
        this.$header.appendChild(this.$icons);
        this.$header.appendChild(this.$form);
        this.$container.appendChild(this.$header);
        
        const homeSection = document.createElement('div');
        homeSection.appendChild(this.homejs.render());
        this.$container.appendChild(homeSection);
        
        const aboutSection = document.createElement('div');
        aboutSection.appendChild(this.aboutjs.render());
        this.$container.appendChild(aboutSection);
        
        const dogCatFood = document.createElement('div');
        dogCatFood.appendChild(this.dogCatFood.render());
        this.$container.appendChild(dogCatFood);
        
        const shopSection = document.createElement('div');
        shopSection.appendChild(this.shopjs.render());
        this.$container.appendChild(shopSection);
        
        const servicesSection = document.createElement('div');
        servicesSection.appendChild(this.servicesjs.render());
        this.$container.appendChild(servicesSection);
        
        const planSection = document.createElement('div');
        planSection.appendChild(this.planjs.render());
        this.$container.appendChild(planSection);
        
        const contactSection = document.createElement('div');
        contactSection.appendChild(this.contactjs.render());
        this.$container.appendChild(contactSection);
        
        const footerSection = document.createElement('div');
        footerSection.appendChild(this.footerjs.render());
        this.$container.appendChild(footerSection);
        
        
        this.$nav.appendChild(this.$home);
        this.$nav.appendChild(this.$about);
        this.$nav.appendChild(this.$shop);
        this.$nav.appendChild(this.$services);
        this.$nav.appendChild(this.$plan);
        this.$nav.appendChild(this.$contact);


        return this.$container;
    };
}

export {Main};