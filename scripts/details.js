pillows=[
    {
        img:"pillow1.jpg",
        title:"After School Special Couch Pillow",
        desc:"Lorem ipsum dolor sit amet, senectus ut sed platea metus urna egestas, elit lacus at iaculis a quam, vehicula quam vestibulum nunc mauris, vel eu donec mi a, nunc lacinia ut tortor at provident enim. \nMauris lectus lectus tempus, suspendisse neque penatibus nec aenean orci, amet laoreet lectus vivamus vulputate, purus semper massa sodales consectetuer justo, tempus libero. ",
        price: "$33"
    }
]



function loadPage(){
    console.log('loading');
    let contentArea = document.getElementsByClassName("contentArea")[0];
    let item = pillows[0];
    let pillowItem = new PillowItem(item.img,item.title,item.desc,item.price);
    contentArea.appendChild(pillowItem.element);
}

class PillowItem{
    constructor(imgSrc,title,desc,price){
        this.imgSrc = imgSrc;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.quantity = ["1","2","3","4","5"];
        this.size = ["S","M","L"];
        this.filler = ["duck down","hypoallergenic poly-blend","memory foam"];
        this.element = this.buildItem()
        
    }
    buildItem(){
        let itemBlock = document.createElement("div");
        itemBlock.classList.add("itemBlock");

        let pillowImg = document.createElement("div");
        pillowImg.classList.add("pillowImg");
        pillowImg.style.backgroundImage = 'url("images/' + this.imgSrc + '")'
        itemBlock.appendChild(pillowImg);

        let textBlock = document.createElement("div");
        textBlock.classList.add("textBlock");
        itemBlock.appendChild(textBlock);

        let pillowTitle = document.createElement("div");
        pillowTitle.textContent = this.title;
        pillowTitle.classList.add("pillowTitle");
        textBlock.appendChild(pillowTitle);

        let pillowDesc = document.createElement("div");
        pillowDesc.textContent = this.desc;
        pillowDesc.classList.add("pillowDesc");
        textBlock.appendChild(pillowDesc);

        let pillowPrice = document.createElement("div");
        pillowPrice.textContent = this.price;
        pillowPrice.classList.add("pillowPrice");
        textBlock.appendChild(pillowPrice);

        let optionBlock = this.buildOptions();
        itemBlock.appendChild(optionBlock);

        // let buttonBlock = this.buildButtons();
        // itemBlock.appendChild(buttonBlock);

        return itemBlock
    }

    buildOptions(){
        let optionBlock = document.createElement("div");
        optionBlock.classList.add("optionBlock");

        let quant = document.createElement("div");
        quant.classList.add("options")
        optionBlock.appendChild(quant);
        

        let quantityText = document.createElement("h5");
        quantityText.textContent = "Quantity:";
        // pillowPrice.classList.add("pillowPrice");
        quant.appendChild(quantityText);

        let quantityOption = document.createElement("select");
        quantityOption.classList.add("optionDropDown");
        quant.appendChild(quantityOption);

        this.quantity.forEach(qValue => {
            let quantity = document.createElement("option");
            quantity.value = qValue;
            quantity.textContent = qValue;
            quantityOption.appendChild(quantity);
        });

        let siz = document.createElement("div");
        siz.classList.add("options")
        optionBlock.appendChild(siz);

        let sizeText = document.createElement("h5");
        sizeText.textContent = "Size:";
        // pillowPrice.classList.add("pillowPrice");
        siz.appendChild(sizeText);


        let sizeOption = document.createElement("select");
        sizeOption.classList.add("optionDropDown");
        siz.appendChild(sizeOption);

        this.size.forEach(sValue => {
            let size = document.createElement("option");
            size.value = sValue;
            size.textContent = sValue;
            sizeOption.appendChild(size);
        });

        let fill = document.createElement("div");
        fill.classList.add("options")
        optionBlock.appendChild(fill);

        let fillerText = document.createElement("h5");
        fillerText.textContent = "Filler type:";
        // pillowPrice.classList.add("pillowPrice");
        fill.appendChild(fillerText);


        let fillOption = document.createElement("select");
        fillOption.classList.add("optionDropDown");
        fill.appendChild(fillOption);

        this.filler.forEach(fValue => {
            let filler = document.createElement("option");
            filler.value = fValue;
            filler.textContent = fValue;
            fillOption.appendChild(filler);
        });



        return optionBlock
    }

    //  buildButtons(){
    // //     let buttonBlock = document.createElement("div");
    // //     buttonBlock.classList.add("buttonBlock");

    // //     return buttonBlock
    // }
}









