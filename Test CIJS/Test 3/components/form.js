class Form{




    constructor(){
        this.$form = document.createElement('form');
        this.$form.classList.add('form');

        this.$h3 = document.createElement('h3');
        this.$h3.innerHTML = 'Link Shortener';

        this.$link = document.createElement('div');
        this.$link.classList.add('link');
        this.$link.innerHTML = `<h2>Enter a Link:</h2>`;

        this.$input = document.createElement('input');
        this.$input.placeholder = 'exemple.com';

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.innerHTML= `<i class="fas fa-arrow-right"></i>`;

        this.$domain = document.createElement('div');
        this.$domain.classList.add('domain');
        this.$domain.innerHTML = `<h2> Short domain: </h2>`;

        this.$span1 = document.createElement('span');
        this.$span1.classList.add('box');
        this.$span1.innerHTML = 'shrtco.de';
        
        this.$span2 = document.createElement('span');
        this.$span2.classList.add('box');
        this.$span2.innerHTML = '9qr.de';

        this.$p = document.createElement('p');
        this.$p.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam quam sequi harum, dolores laboriosam, explicabo nihil voluptatum tenetur at possimus 
      <br>  eligendi temporibus iure fugit. Sit necessitatibus eum neque facere!`
        
    }

    render(){
        this.$form.appendChild(this.$h3);
        this.$form.appendChild(this.$link);
        this.$link.appendChild(this.$input);
        this.$link.appendChild(this.$btnSubmit);
        this.$form.appendChild(this.$domain);
        this.$domain.appendChild(this.$span1);
        this.$domain.appendChild(this.$span2);
        this.$form.appendChild(this.$p);
        return this.$form
    }
}

export{Form};