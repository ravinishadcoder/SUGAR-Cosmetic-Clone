import {navbar,fotter} from "../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = fotter();
const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox';


const appendData = (data) => {
    let containerContent = document.getElementById("container-content");
    containerContent.innerHTML = null;
    data.forEach(({image_link,name,price}) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'trending-card');
        let div_img_top_num = document.createElement('div');
        div_img_top_num.setAttribute('class', 'img-top-num');
        let div_img_top_img = document.createElement('img');
        div_img_top_img.src = 'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png';
        div_img_top_num.append('29 ',div_img_top_img);
        let imgDiv = document.createElement('div');
        imgDiv.setAttribute('class', 'imgDiv');
        let imgDivimg = document.createElement('img');
        imgDivimg.src = image_link;
        imgDiv.append(imgDivimg);
        let textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'trending-text');
        let textP = document.createElement('p');
        textP.textContent = name;
        textDiv.append(textP);
        let priceDiv = document.createElement('div');
        priceDiv.setAttribute('class', 'trending-price');
        let priceP = document.createElement('p');
        priceP.textContent = `Rs.${price}`;
        priceDiv.append(priceP);
        let ratingDiv = document.createElement('div');
        ratingDiv.setAttribute('class', 'trending-rating');
        let ratingimg = document.createElement('img');
        ratingimg.src = 'https://in.sugarcosmetics.com/star_filled.png';
        ratingDiv.append(ratingimg,' 4.8(184)');
        let fevOuterDiv = document.createElement('div');
        fevOuterDiv.setAttribute('class','trending-fev-card');
        fevOuterDiv.innerHTML = `<div class="trending-fev-sign"><i class="fa fa-heart-o" aria-hidden="true"></i></div><div class="select-shade-text">SELECT SHADE</div>`;
        div.append(div_img_top_num,imgDiv,textDiv,priceDiv,ratingDiv,fevOuterDiv)
        containerContent.append(div);
    });
}

const fetchData = async () => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    appendData(data);
}
fetchData();


