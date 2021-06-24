// Urok 45
(function () {
     'use strict';

    // class ploshad {

    //     constructor(width, height) {
    //         this.width = width;
    //         this.height = height;
    //     }

    //     calcPloshad() {
    //         return this.width * this.height;
    //     }

    //     calcPloshad2() {
    //         return this.width + this.height;
    //     }

    // }

    // // const res_area = new ploshad(10, 20);
    // // console.log(res_area.calcPloshad());

    
    // class ploshadText extends ploshad{
    //     // extends - связка двух классов

    //     constructor(width, height, text, value) {
    //         super(width, height);

    //         this.text = text;
    //         this.value = value;
    //     }

    //     showText() {
    //         console.log(`Text: ${this.text} | Value: ${this.value}`);
    //     }

    // }

    // const block = new ploshadText(20, 20, "Ismar", "Когда уже выучу JS?");

    // block.showText();
    // console.log(block.calcPloshad2());



    class cardProduct {
        constructor(tooltips, tooltipsClass, img, title, originPrice, oldPrice, innerBlock) {
            this.tooltips = tooltips;
            this.tooltipsClass = tooltipsClass;
            this.img = img;
            this.title = title;
            this.originPrice = originPrice;
            this.oldPrice = oldPrice;
            this.innerBlock = document.querySelector(innerBlock);
            this.valuta = 85;
            this.originPrice = this.convertToUSD(this.originPrice);
            this.oldPrice = this.convertToUSD(this.oldPrice);
        }

        convertToUSD(price){
            const result = price / this.valuta;
            return result.toFixed(1);
        }

        render() {
            const div = document.createElement("div");
            div.classList.add("list__item");
            div.innerHTML = `
                            <div class="item__img">
                                <div class="tooltips ${this.tooltipsClass}">
                                    <span>${this.tooltips}</span>
                                </div>

                                <img src=${this.img} alt="">

                                <div class="arrows">
                                    <span><i class="fas fa-arrows-alt"></i> Quick view</span>
                                </div>
                            </div>
                            <div class="item__title">
                                <a href="?search=#" class="ttl">${this.title}</a>

                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <span>6 Review(s)</span>
                                </div>

                                <div class="price">
                                    <span class="currency">$</span>
                                    <span class="oprice">${this.originPrice}</span>
                                    <del>$ ${this.oldPrice}</del>
                                </div>
                            </div>

                            <div class="item__hide">
                                <div class="item__icon">
                                    <a class="icon__hidden add_cart" href="#"><i class="fas fa-shopping-bag"></i></a>
                                </div>

                                <div class="item__icon">
                                    <a class="icon__hidden" href="#"><i class="fas fa-balance-scale"></i></a>
                                </div>

                                <div class="item__icon">
                                    <a class="icon__hidden" href="#"><i class="fas fa-heart"></i></a>
                                </div>
                            </div>
            `;

            this.innerBlock.append(div);
        }
    }

    new cardProduct(
        'NEW',
        'green',
        'img/product/img1.jpg',
        'Animal Print Sweatshirt 1',
        1230,
        2500,
        '.main__list'
    ).render();

    new cardProduct(
        'SALE',
        'orange',
        'img/product/img2.jpg',
        'Animal Print Sweatshirt 2',
        1230,
        2500,
        '.main__list'
    ).render();

    new cardProduct(
        '-30%',
        'red',
        'img/product/img3.jpg',
        'Animal Print Sweatshirt 3',
        1230,
        2500,
        '.main__list'
    ).render();

    new cardProduct(
        'NEW',
        'green',
        'img/product/img4.jpg',
        'Animal Print Sweatshirt 4',
        1230,
        2500,
        '.main__list'
    ).render();

    new cardProduct(
        'NEW',
        'orange',
        'img/product/img1.jpg',
        'Animal Print Sweatshirt 5',
        1230,
        2500,
        '.main__list'
    ).render();



    
}());



