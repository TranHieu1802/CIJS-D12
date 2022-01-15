class Contact{




    constructor(){
        this.$section = document.createElement('section');
        this.$section.classList.add('contact');
        this.$section.id = 'contact';

        this.$img = document.createElement('div');
        this.$img.classList.add('image');
        this.$img.innerHTML = `<img src="./image/contact_img.png" alt="">`;

        this.$form = document.createElement('form');
        this.$form.innerHTML = `
            <h3>contact us</h3>
            <input type="text" placeholder="your name" class="box">
            <input type="email" placeholder="your email" class="box">
            <input type="number" placeholder="your number" class="box">
            <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" class="btn">
        `;
    }

    render = () =>{
        this.$section.appendChild(this.$img);
        this.$section.appendChild(this.$form);

        return this.$section
    };
}

export{Contact};