pillows=[
    {
        img:"pillow1.jpg",
        link:"details.html"
    },
    {
        img:"pillow2.jpg",
        link:"#"
    },
    {
        img:"pillow3.jpg",
        link:"#"
    },
    {
        img:"pillow4.jpg",
        link:"#"
    },
    {
        img:"pillow5.jpg",
        link:"#"
    },
    {
        img:"pillow6.jpg",
        link:"#"
    }
]



function loadPage(){
    console.log('loading');
    let contentArea = document.getElementsByClassName("contentArea")[0];
    pillows.forEach(item =>{
        let pillowItem = new PillowItem(item.img,item.link);
        contentArea.appendChild(pillowItem.element);
    })
}

class PillowItem{
    constructor(imgSrc,link){
        this.imgSrc = imgSrc;
        this.details = link
        this.element = this.buildItem()
    }
    buildItem(){
        let itemBlock = document.createElement("div");
        itemBlock.classList.add("itemBlock");

        let a = document.createElement('a');
        a.href = this.details; 
        let pillowImg = document.createElement("div");
        pillowImg.classList.add("pillowImg");
        pillowImg.style.backgroundImage = 'url("images/' + this.imgSrc + '")'
        a.appendChild(pillowImg);
        itemBlock.appendChild(a);

        return itemBlock
    }
}

