
let countTrendingItem = 0;

let itemCountTrending = document.querySelector('.item-count');
itemCountTrending.innerText = `${countTrendingItem} items`
const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox';

let ratingArray = [];
const appendData = (data) => {
    countTrendingItem = data.length
    itemCountTrending.innerText = `${countTrendingItem} items`
    let containerContent = document.getElementById("container-content");
    containerContent.innerHTML = null;
    data.forEach(({image_link,name,price},index) => {
        let rx = (Math.random()*3)+2;
        let ry = Math.floor(Math.random()*270)+71;
        let rz = Math.floor(Math.random()*70)+15;
        ratingArray.push([rx.toFixed(1),ry,rz]);
        let div = document.createElement('div');
        div.setAttribute('class', 'trending-card');
        div.addEventListener('click', ()=> {
            setDataToLocal({image_link,name,price},index);
        })
        let div_img_top_num = document.createElement('div');
        div_img_top_num.setAttribute('class', 'img-top-num');
        let div_img_top_img = document.createElement('img');
        div_img_top_img.src = 'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png';
        div_img_top_num.append(`${rz} `,div_img_top_img);
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
        ratingDiv.append(ratingimg,`${ratingArray[ratingArray.length-1][0]} (${ratingArray[ratingArray.length-1][1]})`);
        let fevOuterDiv = document.createElement('div');
        fevOuterDiv.setAttribute('class','trending-fev-card');
        fevOuterDiv.innerHTML = `<div class="trending-fev-sign"><i class="fa fa-heart-o" aria-hidden="true"></i></div><div class="select-shade-text">SELECT SHADE</div>`;
        div.append(div_img_top_num,imgDiv,textDiv,priceDiv,ratingDiv,fevOuterDiv)
        containerContent.append(div);
    });
    console.log(ratingArray);
}

const fetchData = async () => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    appendData(data);
}
fetchData();

const setDataToLocal = (data,index) => {
    let obj = {
        data:data,
        rating: ratingArray[index],
        index:index
    }
    localStorage.setItem('productData', JSON.stringify(obj));
}


