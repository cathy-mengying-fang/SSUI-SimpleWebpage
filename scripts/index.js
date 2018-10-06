pillows=[
    {
        img:"pillow1.jpg"
    },
    {
        img:"pillow2.jpg"
    },
    {
        img:"pillow3.jpg"
    },
    {
        img:"pillow4.jpg"
    },
    {
        img:"pillow5.jpg"
    },
    {
        img:"pillow6.jpg"
    }
]



function loadPage(){
    console.log('loading');
    let contentArea = document.getElementsByClassName("contentArea")[0];
    pillows.forEach(item =>{
        let pillowItem = new PillowItem(item.img);
        contentArea.appendChild(pillowItem.element);
    })
}

class PillowItem{
    constructor(imgSrc){
        this.imgSrc = imgSrc;
        this.element = this.buildItem()
    }
    buildItem(){
        let itemBlock = document.createElement("div");
        itemBlock.classList.add("itemBlock");

        let pillowImg = document.createElement("div");
        pillowImg.classList.add("pillowImg");
        pillowImg.style.backgroundImage = 'url("images/' + this.imgSrc + '")'
        itemBlock.appendChild(pillowImg);

        return itemBlock
    }
}

