class DogAndCatFood{

    $section;
    $catFood;
    $dogFood;


    constructor(){
        this.$section = document.createElement('span');
        this.$section.classList.add('dogCatFood');

        this.$dogFood = document.createElement('div');
        this.$dogFood.classList.add('dog-food');
        this.$dogFood.innerHTML = `
        <div class="image">
            <img src="./image/dog_food.png" alt="">
        </div>
        <div class="content">
            <h3> <span> air dried </span> Thức ăn cho chó cưng </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae ab alias sed earum dolorem.</p>
              <div class="amount">$15.00 ~ $30.00</div>  
            <a href="#"> <img src="./image/shop_now_dog.png" alt=""></a>
        </div>
        `;

        this.$catFood = document.createElement('div');
        this.$catFood.classList.add('cat-food');
        this.$catFood.innerHTML = `
        <div class="content">
            <h3> <span> air dried </span> Thức ăn cho mèo yêu </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae ab alias sed earum dolorem.</p>
             <div class="amount">$12.00 ~ $35.00</div>       
            <a href="#"> <img src="./image/shop_now_cat.png" alt=""></a>
        </div>
        <div class="image">
            <img src="./image/cat_food.png" alt="">
        </div>
        `;
    }

    render = () =>{
        this.$section.appendChild(this.$dogFood);
        this.$section.appendChild(this.$catFood);

        return this.$section;
    }
}

export{DogAndCatFood};