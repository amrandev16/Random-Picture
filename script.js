const imgContainerEl =document.querySelector('.imge-container');

const btnElement =document.querySelector('.btn');

btnElement.addEventListener("click", () =>{
    imgNumber = 10;
    addNewImg();
});


function addNewImg(){
    for (let index = 0; index < imgNumber; index++) {
        const newImgEl = document.createElement("img");
        imgContainerEl.appendChild(newImgEl);
        newImgEl.src =`https://picsum.photos/300?random=${Math.floor (Math.random()*2000)}`;
    }
   
}