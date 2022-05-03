
    let top_slide_bar_div = document.querySelector(".top_slide_bar_div")
    let middle_slide_bar_div = document.querySelector(".middle_slide_bar_div")

    let top_slide_images_arr = [

        {url : "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/d9103d2b-af25-40c3-b41b-90538502b315.gif"},
        {url : "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/adbd5f7f-557e-487f-aec8-27c79847ec03.jpg"},
        {url : "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1571460a-0b29-4920-8c80-7e37f048def4.jpg"},
        {url : "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/2726f64a-3b5b-4ca9-b066-2ed3d9245582.gif"},
        {url : "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/177972e0-4583-428b-b4db-da5546b71310.jpg"},
    ]

    let bestSellersLeftArr = [
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141", name : "LIP ZIP MATTE TOPPER", price: "499",text : "ADD TO CART",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1640791955", name : "MATTE AS HELL CRAYON LIPSTICK", price: "799",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513", name : "KOHL OF HONOUR INTENSE KAJAL", price: "249",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412", name : "TIPSY LIPS MOISTURIZING BALM", price: "199",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513", name : "KOHL OF HONOUR INTENSE KAJAL", price: "249",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412", name : "TIPSY LIPS MOISTURIZING BALM", price: "199",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607", name : "CONTOUR DE FORCEFACE PALETTE", price: "799",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1639582652", name : "ACE OF FACE FOUNDATION STICK", price: "999",text : "SELECT SHADE",},
        
    ]

    // let bestSellersRightArr = [    
    //     {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513", name : "KOHL OF HONOUR INTENSE KAJAL", price: "249",text : "SELECT SHADE",},
    //     {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412", name : "TIPSY LIPS MOISTURIZING BALM", price: "199",text : "SELECT SHADE",},
    //     {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607", name : "CONTOUR DE FORCEFACE PALETTE", price: "799",text : "SELECT SHADE",},
    //     {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1639582652", name : "ACE OF FACE FOUNDATION STICK", price: "999",text : "SELECT SHADE",},
    // ]

    let middle_slide_bar_arr = [
        {url : "https://d32baadbbpueqt.cloudfront.net/079b4250-2cd5-467a-b620-af356a98206e.jpg"},
        {url : "https://d32baadbbpueqt.cloudfront.net/ac0cec37-3f1d-4fa6-b103-10f988f84ea8.jpg"},
        {url : "https://d32baadbbpueqt.cloudfront.net/e90a47e7-1d6c-4e0c-8374-f5425dddc66a.jpg"},
    ]

    let hotDealsarr = [
        {img_url :"https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",},
        // {img_url :"",},
        // {img_url :"",},
        // {img_url :"",},
        // {img_url :"",},
        // {img_url :"",},
        // {img_url :"",},
        
    ]

    let videoPlayArr = [
        {src: "https://cdn4.fireworktv.com/medias/2022/4/22/1650623566-berqzfil/watermarked/540/MettlePrimingBalm-Vertical.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836045-uerkdvpa/watermarked/540/InShot_20220309_1844460631.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644919919-drjtghip/watermarked/540/EasyEyelinerHackusingaSpoon.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490662-qrlyukpb/watermarked/540/HowtoBaketheRightWay.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/4/30/1651342203-wnqistjz/watermarked/540/EffortlesslyExpressive9-16.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490844-ureajzhm/watermarked/540/FaceLiftlikeKendallJenner.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644906634-nshmulgo/watermarked/540/FoundationHacks.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644905324-hgvtazeo/watermarked/540/KoreanBeautyHack-JAMSU.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643956359-clqnsktd/watermarked/540/SunkissedLookTutorial.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642491110-kgvyhwbt/watermarked/540/ReverseCatEyeliner.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836364-eixsrdot/watermarked/540/275182554_2096939307119931_4496228888503996313_n.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646835858-lvtrfujp/watermarked/540/InShot_20220309_184811595.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643955080-zfievyxo/watermarked/540/TissuePaperEyeshadowHack.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2021/11/1/1635767024-pedhjtzf/watermarked/540/EasywaytoMattifyLipstick7.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836196-scobeuaq/watermarked/540/Flawlessrecreationoftheiconicdiva.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836728-bkvwtnrc/watermarked/540/InShot_20220309_183351048.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836997-qhfletip/watermarked/540/GlamSmokeyEyelook.mp4",},
       
    
    ]
    

    // <video controls="" autoplay="" name="media"><source src="https://cdn4.fireworktv.com/medias/2022/4/22/1650623566-berqzfil/watermarked/540/MettlePrimingBalm-Vertical.mp4" type="video/mp4"></video>
// import {start} from "../components/homepage.js"
let start = (arr,container)=>{
   
    let id;
    let slide_img = document.createElement("img")
    
    slide_img.className = "slide_img"
    let i = 0
 
    id = setInterval(()=>{
        if(i== arr.length){
            i=0;
        }
        slide_img.src = arr[i].url
        container.append(slide_img)
        i++
    },3000)
 
 }
start(top_slide_images_arr,top_slide_bar_div)
   
start(middle_slide_bar_arr,middle_slide_bar_div)


   

    let pro_div = document.querySelector(".best_seller_products")

    let bestSeller = (bestSellersLeftArr)=>{
        pro_div.innerText = ""
        bestSellersLeftArr.forEach((el)=>{
            // console.log(el)
            
            let div = document.createElement("div")
            div.className = "four_pro_div"

            let bsimg = document.createElement("img")
            bsimg.src = el.img_url
            bsimg.style.height = "250px"
            bsimg.style.width = "100%"

            let bsname = document.createElement("div")
            bsname.className = "pro_name"
            bsname.innerText = el.name

            
            let pdiv = document.createElement("div")
            pdiv.className = "pdiv"

            let rupeefont = document.createElement("i")
            rupeefont.className = "fa-solid fa-indian-rupee-sign"

            let bsprice = document.createElement("p")
            bsprice.innerText = ` ${el.price}`

            pdiv.append(rupeefont,bsprice)

            let bstag = document.createElement("div")
            bstag.className = "text_tag"
            bstag.innerText = el.text

            let img_name_price_div = document.createElement("div")
            img_name_price_div.className = "img_name_price_div"

            img_name_price_div.append(bsimg,bsname,pdiv,)
            div.append(img_name_price_div,bstag)
            // console.log(div)
            pro_div.append(div)
        })
       
       

    }
    bestSeller(bestSellersLeftArr)
   let flag1= true;
   let st,end,present=0 
   
    document.querySelector(".left_arr_div").addEventListener("click",()=>{
        st = present - 8;
        if(st>=0){
            end = st+4
            let arr = []
            for(let i=st; i<end; i++){
                arr.push(bestSellersLeftArr[i])
            }
            present = end
            console.log(arr)
            bestSeller(arr)
        }
       


        // flag1=!flag1
        // if(flag1){
        //     bestSeller(bestSellersLeftArr)
        // }else{
        //     bestSeller(bestSellersRightArr)
        // }
        
    })
    let flag2 = false
    document.querySelector(".right_arr_div").addEventListener("click",()=>{
        st = present + 4;
        if(st <= bestSellersLeftArr.length-4 ){
            end = st+4
            let arr = []
            for(let i=st; i<end; i++){
                arr.push(bestSellersLeftArr[i])
            }
            present = end
            bestSeller(arr)
            console.log(arr)
        }
       

        // flag2 = !flag2
        // if(flag2){
        //     bestSeller(bestSellersRightArr)
        // }else{
        //     bestSeller(bestSellersLeftArr)
        // }
        
    })

    let imageSlide =(arr)=>{
        arr.forEach((el)=>{
            let main_div = document.querySelector(".sixth_box_slide_div")
            let img_div = document.createElement("img")
            img_div.style.width = "390px"
            img_div.style.height = "260px"
            img_div.style.margin = "auto"
            img_div.src = el.img_url
            main_div.append(img_div)
        })

    }
    imageSlide(hotDealsarr)

    let videoPlay = (data)=>{
        data.forEach((el)=>{
            let main_div = document.querySelector(".eighth_box_video_div")
            let iframe = document.createElement("iframe")
            iframe.src = el.src
            iframe.className = "shortsiframe"
            console.log(iframe)
            main_div.append(iframe)
        })
    }
    videoPlay(videoPlayArr)


