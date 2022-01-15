class Shop{
    $boxContainer;
    $heading;
    $section;



    constructor(){
        this.$section = document.createElement('section');
        this.$section.classList.add('shop');
        this.$section.id = ('shop');

        this.$heading = document.createElement('h1');
        this.$heading.classList.add('heading');
        this.$heading.innerHTML = ` Sản phẩm <span>Nổi bật</span> `;

      

        let _arr = [
                {
                    img:"./image/product_01.jpg",
                    h3:"A-dried food",
                    price:"$15.00 ~ 25.00"
                },
                {
                    img:"./image/product_02.jpg",
                    h3:"B-dried food",
                    price:"$16.00 ~ 26.00"
                },
                {
                    img:"./image/product_03.jpg",
                    h3:"C-dried food",
                    price:"$17.00 ~ 27.00"
                },
                {
                    img:"./image/product_04.jpg",
                    h3:"D-dried food",
                    price:"$18.00 ~ 28.00"
                },
                {
                    img:"./image/product_05.jpg",
                    h3:"E-dried food",
                    price:"$19.00 ~ 29.00"
                },
                {
                    img:"./image/product_06.jpg",
                    h3:"F-dried food",
                    price:"$20.00 ~ 30.00"
                }
            ];
        this.$boxContainer = document.createElement('div');
        this.$boxContainer.classList.add('box-container');
        for (let _item of _arr){
            this.$boxContainer.innerHTML += `
            <div class="box">
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src="`+ _item.img +`" alt="">
                </div>
                <div class="content">
                    <h3>`+ _item.h3 +`</h3>
                    <div class="amonut">` + _item.price +`</div>
                </div>
            </div> 
                `
            }
    }





    render = () =>{
        this.$section.appendChild(this.$heading);
        this.$section.appendChild(this.$boxContainer);
    
     


        return this.$section;
    }
}

export{Shop};