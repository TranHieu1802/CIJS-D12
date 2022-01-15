class About{
    $section;
    $image;
    $content;

    constructor(){
        this.$section = document.createElement('section');
        this.$section.classList.add('about');
        this.$section.id = 'about';

        this.$image = document.createElement('div');
        this.$image.classList.add('image');
        this.$image.innerHTML = `<img src="./image/about_img.png" alt="">`;

        this.$content = document.createElement('div');
        this.$content.classList.add('content');
        this.$content.innerHTML = `
            <h3>Thức ăn <span> dinh dưỡng </span> cho thú cưng cần những gì ?</h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, exercitationem sint. 
                Dicta earum totam atque sapiente praesentium accusantium deleniti eveniet!
            </p>
            <a href="#" class="btn"> read more</a>
        `;
    }

    render = () =>{
        this.$section.appendChild(this.$image);
        this.$section.appendChild(this.$content);

        return this.$section
    };
}

export {About}