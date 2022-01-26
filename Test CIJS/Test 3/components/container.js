import { Form } from "./form.js";

class Container{



    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('container');

        this.$h1 = document.createElement('h1');
        this.$h1.innerHTML = 'The privacy-friendly URL Shortener';

        this.$form = new Form();
    }


    render(){
        this.$container.appendChild(this.$h1);
        this.$container.appendChild(this.$form.render());
        return this.$container
    }
}

export{Container};