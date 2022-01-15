class Services{




    constructor(){
        this.$section = document.createElement('section');
        this.$section.classList.add('services');
        this.$section.id = ('services');

        this.$heading = document.createElement('h1');
        this.$heading.classList.add('heading');
        this.$heading.innerHTML = ` dịch vụ cho <span> Thú cưng </span> `;



        let _arr = [
            {
                class:"fas fa-dog",
                h3:"dog boadring"
            },
            {
                class:"fas fa-cat",
                h3:"cat boadring"
            },
            {
                class:"fas fa-bath",
                h3:"spa & grooming"
            },
            {
                class:"fas fa-drumstick-bite",
                h3:"healthy meal"
            },
            {
                class:"fas fa-baseball-ball",
                h3:"activity exercise"
            },
            {
                class:"fas fa-heartbeat",
                h3:"health care"
            }
        ];


        this.$boxContainer = document.createElement('div');
        this.$boxContainer.classList.add('box-container');
        for (let _item of _arr){
            this.$boxContainer.innerHTML += `
            <div class="box">
                <i class="` + _item.class + `"></i>
                <h3>` + _item.h3+ `</h3>
                <a href="#" class="btn"> read more</a>
            </div> 
                `
            }
    }








    render = () =>{
        this.$section.appendChild(this.$heading);
        this.$section.appendChild(this.$boxContainer);

        return this.$section
    };
}

export{Services};