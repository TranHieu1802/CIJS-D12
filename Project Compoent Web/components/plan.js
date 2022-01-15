class Plan{




    constructor(){
        this.$section = document.createElement('section');
        this.$section.classList.add('plan');
        this.$section.id = ('plan');

        this.$heading = document.createElement('h1');
        this.$heading.classList.add('heading');
        this.$heading.innerHTML = `Combo <span> Hot</span>`;

        let _arr = [
            {
                title:"Combo bạc",
                class1:"fas fa-check",
                class2:"fas fa-times",
                class3:"fas fa-times",
                day: "1 hours",
                pet:"Cắt tỉa lông cho thú cưng",
                pet2:"Tắm rửa và spa",
                pet3:"Bữa ăn dinh dưỡng",
                pet4:"Phiếu giảm giá 50% cho các sản phẩm ",
                cost:50
            },
            {
                title:"Combo vàng",
                class1:"fas fa-check",
                class2:"fas fa-check",
                class3:"fas fa-times",
                day: "2 hours",
                pet:"Cắt tỉa lông cho thú cưng",
                pet2:"Tắm rửa và spa",
                pet3:"Bữa ăn dinh dưỡng",
                pet4:"Phiếu giảm giá 50% cho các sản phẩm ",
                cost:300
            },
            {
                title:"Combo bạch kim",
                class1:"fas fa-check",
                class2:"fas fa-check",
                class3:"fas fa-check",
                day: "2 hours",
                pet:"Cắt tỉa lông cho thú cưng",
                pet2:"Tắm rửa và spa",
                pet3:"Bữa ăn dinh dưỡng",
                pet4:"Phiếu giảm giá 50% cho các sản phẩm ",
                cost:750
            },
        ]

        this.$boxContainer = document.createElement('div');
        this.$boxContainer.classList.add('box-container');
        for (let _item of _arr){
            this.$boxContainer.innerHTML += `
            <div class="box">
                <h3 class="title">`+ _item.title +`</h3>
                <h3 class="day">`+ _item.day +`</h3>
                <i class="fas fa-paw icon"></i>
                <div class="list">
                    <p> `+ _item.pet +` <span class="`+_item.class1 + `"></span>   </p>
                    <p> `+ _item.pet2 +` <span class="`+_item.class1 + `"></span>   </p>
                    <p> `+ _item.pet3 +` <span class="`+_item.class2 + `"></span>   </p>
                    <p> `+ _item.pet4 +` <span class="`+_item.class3 + `"></span>   </p>
            </div>
                <div class="amount"><span>$</span> `+ _item.cost+` </div>
                <a href="#" class="btn">choose plan</a>
            </div> 
                `
            }



    }

    render = () =>{
        this.$section.appendChild(this.$heading);
        this.$section.appendChild(this.$boxContainer);


        return this.$section
    }
}

export{Plan};