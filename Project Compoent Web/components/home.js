



class Home {
    $section;
    $content;
    $img;
    $catFood;
    $dogFood;

    constructor(){
        this.$section = document.createElement('section');
        this.$section.classList.add('home');
        this.$section.id = 'home';

        this.$content = document.createElement('div');
        this.$content.classList.add('content');
        this.$content.innerHTML = `
            <h3><span>Hi</span> welcome to our pet shop </h3>
            <a href="#" class="btn"> Shop now</a>
        `;

        this.$img = document.createElement('img');
        this.$img.src = './image/bottom_wave.png';
        this.$img.classList.add('wave');

        
    }



    render = () =>{
        this.$section.appendChild(this.$content);
        this.$section.appendChild(this.$img);

        return this.$section;
    };
}

export {Home};