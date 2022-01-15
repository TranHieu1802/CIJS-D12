class Footer{




    constructor(){
        this.$section = document.createElement('section');
        this.$section.classList.add('footer');

        this.$share = document.createElement('div');
        this.$share.classList.add('share');
        this.$share.innerHTML = `
            <a href="#" class="btn"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="#" class="btn"> <i class="fab fa-tiktok"></i> tiktok </a>
            <a href="#" class="btn"> <i class="fab fa-instagram"></i> instagram </a>
            <a href="#" class="btn"> <i class="fab fa-youtube"></i> youtube </a>
            <a href="#" class="btn"> <i class="fab fa-twitter"></i> twitter </a>
        
        `;

        this.$creadit = document.createElement('div');
        this.$creadit.classList.add('credit');
        this.$creadit.innerHTML =`pet <span>shop</span>`;
    }

    render = () =>{
        this.$section.appendChild(this.$share);
        this.$section.appendChild(this.$creadit);

        return this.$section;
    }
}

export{Footer};