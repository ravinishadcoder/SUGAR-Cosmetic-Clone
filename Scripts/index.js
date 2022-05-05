
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
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141", 
            name : "LIP ZIP MATTE TOPPER", 
            price: "499",
            text : "ADD TO CART",
        },
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1640791955", name : "MATTE AS HELL CRAYON LIPSTICK", price: "799",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513", name : "KOHL OF HONOUR INTENSE KAJAL", price: "249",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412", name : "TIPSY LIPS MOISTURIZING BALM", price: "199",text : "SELECT SHADE",},
       
    ]

    let bestSellersRightArr = [    
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513", name : "KOHL OF HONOUR INTENSE KAJAL", price: "249",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412", name : "TIPSY LIPS MOISTURIZING BALM", price: "199",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607", name : "CONTOUR DE FORCEFACE PALETTE", price: "799",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1639582652", name : "ACE OF FACE FOUNDATION STICK", price: "999",text : "SELECT SHADE",},
    ]

    let middle_slide_bar_arr = [
        {url : "https://d32baadbbpueqt.cloudfront.net/079b4250-2cd5-467a-b620-af356a98206e.jpg"},
        {url : "https://d32baadbbpueqt.cloudfront.net/ac0cec37-3f1d-4fa6-b103-10f988f84ea8.jpg"},
        {url : "https://d32baadbbpueqt.cloudfront.net/e90a47e7-1d6c-4e0c-8374-f5425dddc66a.jpg"},
    ]

    let hotDealsarr = [
        [
            {img_url :"https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",},
       
        ],
         [
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",},
         ],
        [
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",},
            {img_url :"https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",},
        ],
        [
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",},
        ],
        [
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",},
            {img_url :"https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",},
        ],
        [
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",},
        ],
        [
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",},
        ],
        
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

    let superSaversarr = [
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706264477779.jpg?v=1619116135",
            name : "METTLE SATIN LIPSTICK - O1 SOPHIE [BRIGHT FUCHSIA...]", 
            price: "499",
            text : "ADD TO CART",
            stoffPrice : "999", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-eye-warned-you-so-double-matte-eyeliner-03-green-book-marsh-green-13954500100179.jpg?v=1619116854",
            name : "EYE WARNED YOU SO! DOUBLE MATTEL EYELINER - O3 GREEN...", 
            price: "349",
            text : "ADD TO CART",
            stoffPrice : "699", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-lip-duo-12-don-fawn-yellow-brown-12788425097299.jpg?v=1619108497",
            name : "SMUDGE NOT LIP DUO - 12 DON FAWN (YELLOW BROWN)", 
            price: "299",
            text : "ADD TO CART",
            stoffPrice : "599", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-09-better-call-salmon-peach-pink-12785014308947.jpg?v=1619101864",
            name : "ITS A POUT TIME! VIVID LIPSTICK - O9 BETTER CALL...", 
            price: "359",
            text : "ADD TO CART",
            stoffPrice : "599", 
            disPer:"(40% Off)",
            rupee : "₹",
        },],
        [     {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-27-brown-crown-plum-brown-15384235180115.jpg?v=1619103565",
            name : "SMUDGE ME NOT LIQUID LIPSTICK - 27 BROWN CROWN...", 
            price: "249",
            text : "ADD TO CART",
            stoffPrice : "499", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-twist-and-shout-fadeproof-kajal-01-black-velvet-black-14255312109651.jpg?v=1619100296",
            name : "TWIST AND SHOUT FADEPROOF KAJAL", 
            price: "399",
            text : "SELECT SHADE",
            stoffPrice : "599", 
            disPer:"(40% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-27-brown-crown-plum-brown-15384235180115.jpg?v=1619103565",
            name : "SMUDGE ME NOT LIQUID LIPSTICK - 27 BROWN CROWN...", 
            price: "249",
            text : "ADD TO CART",
            stoffPrice : "499", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221",
            name : "METTLE MATTE LIPSTICK - 10 EIRENE (BLUE TONED RED)", 
            price: "549",
            text : "ADD TO CART",
            stoffPrice : "1099", 
            disPer:"(50% Off)",
            rupee : "₹",
        },],
        [   {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221",
            name : "METTLE MATTE LIPSTICK - 10 EIRENE (BLUE TONED RED)", 
            price: "549",
            text : "ADD TO CART",
            stoffPrice : "1099", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-55-americano-deep-12775603372115.jpg?v=1619106493",
            name : "DREAM COVER SPF15 MATTIFYING COMPACT - 55...", 
            price: "249",
            text : "ADD TO CART",
            stoffPrice : "499", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-09-better-call-salmon-peach-pink-12785014308947.jpg?v=1619101864",
            name : "ITS A POUT TIME! VIVID LIPSTICK - O9 BETTER CALL...", 
            price: "359",
            text : "ADD TO CART",
            stoffPrice : "599", 
            disPer:"(40% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-45-grape-drape-deep-mauve-with-hints-of-purple-15384300027987.jpg?v=1619107024",
            name : "SMUDGE ME NOT LIQUID LIPSTICK - 45 GRAPE DRAPE...", 
            price: "249",
            text : "ADD TO CART",
            stoffPrice : "499", 
            disPer:"(50% Off)",
            rupee : "₹",
        },],


    ]
    
    let topPicksArr = [
       [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/18ec06e5-4071-4a84-ba25-3e46632b6de0.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ce6539a6-6bff-4f41-8554-4af80d8ffd07.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8a71a460-cd8f-4166-8ac5-b19407d23699.jpg",},
  
       ],
       [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/dd4d4e8a-b7e3-485e-8a8c-059f5ccab057.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/18ec06e5-4071-4a84-ba25-3e46632b6de0.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ce6539a6-6bff-4f41-8554-4af80d8ffd07.jpg",},
 
       ],
    ]

    let giftSetsArr = [
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-01.jpg?v=1651576748",
            name : "MOTHERS DAY GIFT CARD", 
            price: "500",
            text : "SELECT VALUE",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1621586014",
            name : "MATTE AS HELL CRAYON LIPSTICK MINIS SET", 
            price: "1099",
            text : "SHOP NOW",
            stoffPrice : "1799", 
            disPer:"(38% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
            name : "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET", 
            price: "799",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "999", 
            disPer:"(20% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
            name : "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET", 
            price: "849",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "1048", 
            disPer:"(18% Off)",
            rupee : "₹",
        },],
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
            name : "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET", 
            price: "799",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "999", 
            disPer:"(20% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
            name : "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET", 
            price: "849",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "1048", 
            disPer:"(18% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1649260645",
            name : "ANNIVERSARY KIT", 
            price: "1999",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "2793", 
            disPer:"(28% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Hi-5-KIT-WBG-Images1_43e43755-262f-4b35-973a-6e5fad7222a4.jpg?v=1643125074",
            name : "HI-5 KIT", 
            price: "999",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "1295", 
            disPer:"(22% Off)",
            rupee : "₹",
        },],
    ]

    let thisorthatarr = [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/2dfd09b7-d15c-4d7d-a2e3-fc2c2a7cbc0d.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1edc12f3-1ea2-46c3-a54e-57890e6a3bf9.png",},
    ]

    let justInArr = [
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6a5fa1af-0d0e-4e9e-85d1-579495fb5030.jpg?v=1648482145",
            name : "ARCH ARRIVAL MICRO BROW PENCIL", 
            price: "499",
            text : "SELECT SHADE",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/383779802-summer-makeup-kit-wbg-images.jpg?v=1649078383",
            name : "SUMMER MAKEUP KIT", 
            price: "1799",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "2442", 
            disPer:"(38% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
            name : "CITRUS GOT REAL RETINOL BRIGHTENING SERUM ", 
            price: "499",
            text : "ADD TO CART ",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/373515742-01.jpg?v=1646207364",
            name : "SUGAR CITRUS GOT REAL BRIGHTENING PEEL", 
            price: "599",
            text : "SHOP NOW",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },],
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1d9f20a6-69b8-4585-9d09-d4d1f8f309d6.jpg?v=1649433263",
            name : "FLAW LESS FACE MAKEUP TRIO SET", 
            price: "1199",
            text : "CHOOSE PRODUTS",
            stoffPrice : "1390", 
            disPer:"(14% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
            name : "POWER CLAY MASK STICK", 
            price: "699",
            text : "SELECT SHADE",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-1.jpg?v=1642089034",
            name : "BEGINNERS MAKEUP COMBO", 
            price: "999",
            text : "ADD TO CART",
            stoffPrice : "1190", 
            disPer:"(16% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bde8549-cb5e-40e8-8779-83e8c0aae451.jpg?v=1638200716",
            name : "TOO GOOD TO BE TRUE DUAL EYESHADOW", 
            price: "499",
            text : "SHOP NOW",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },],
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_9909d205-c5f9-476d-9903-c4beffbfebb7.jpg?v=1635834942",
            name : "ARCH ARRIVAL BROW PEN", 
            price: "499",
            text : "SELECT SHADE",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1639397456",
            name : "PARTY READY KIT", 
            price: "1299",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "1994", 
            disPer:"(34% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
            name : "OWN THE HIGH LIQUID HIGHLIGHTER", 
            price: "649",
            text : "SHOP NOW",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6.jpg?v=1643903231",
            name : "TRIPLE DELIGHT MAKEUP SET", 
            price: "649",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "847", 
            disPer:"(23% Off)",
            rupee : "₹",
        },],
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1639397456",
            name : "PARTY READY KIT", 
            price: "1299",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "1994", 
            disPer:"(34% Off)",
            rupee : "₹",
        },
        { 
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
            name : "OWN THE HIGH LIQUID HIGHLIGHTER", 
            price: "649",
            text : "SHOP NOW",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6.jpg?v=1643903231",
            name : "TRIPLE DELIGHT MAKEUP SET", 
            price: "649",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "847", 
            disPer:"(23% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Double-Date-Extreme-Volume-Mascara-Powered-by-Images-1025x1400-1.jpg?v=1636386431",
            name : "DOUBLE DATE EXTREME VOLUME MASCARA DUO 01...", 
            price: "799",
            text : "SHOP NOW",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },],
    ]

    let sugarbeautyArr = [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3d719924-5511-4ebb-b31f-dc3fabbe4cb1.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/4570aaa9-52a7-4082-8d59-d2c1d298cdc8.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/6095fb33-4d09-4a55-8ceb-395a0818420c.jpg",},
    ]

    let skincareBasicsArr = [
        [
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Hyderattingkit.jpg?v=1626968294", 
                name : "AQUAHOLIC HYDRATING STICK", 
                price: "899",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-aquaholic-priming-moisturizer-13548826886227.jpg?v=1619115290", 
                name : "AQUAHOLIC PRIMING MOISTURIZER", 
                price: "499",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847", 
                name : "BLING LEADER ILLUMINATING MOISTURIZER", 
                price: "499",
                text : "SELECT SHADE",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg?v=1619155723", 
                name : "CITRUS GOT REAL SPF30 SUNSCREEN", 
                price: "399",
                text : "ADD TO CART",
            },
           
        ],
        [
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748", 
                name : "CITRUS GOT REAL DAILY MOISTURIZER", 
                price: "499",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450", 
                name : "SWIPE RIGHT CLEANSING WATER", 
                price: "399",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1586848393", 
                name : "CHEAT SHEET CLARIFYING MARK", 
                price: "99",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1586848341", 
                name : "CHARCOAL PATROL BUBBLE MASK", 
                price: "149",
                text : "ADD TO CART",
            },
           
        ],
        [
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450", 
                name : "SWIPE RIGHT CLEANSING WATER", 
                price: "399",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1586848393", 
                name : "CHEAT SHEET CLARIFYING MARK", 
                price: "99",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1586848341", 
                name : "CHARCOAL PATROL BUBBLE MASK", 
                price: "149",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1586848309", 
                name : "CHEAT SHEET ANTI-AGING MASK", 
                price: "99",
                text : "ADD TO CART",
            },
           
        ],
    ]

    let exploreArr = [
       [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3fd3b743-7482-48aa-b08c-e2945f4e55ee.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/44351c32-e291-4ef3-9b12-c8570d2d369e.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f521d4d5-bf2c-462c-8897-e7e375c6301f.jpg",},
   
       ],  
       [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",},
   
       ],
       [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3fd3b743-7482-48aa-b08c-e2945f4e55ee.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/44351c32-e291-4ef3-9b12-c8570d2d369e.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f521d4d5-bf2c-462c-8897-e7e375c6301f.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",},
   
       ],
       [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3fd3b743-7482-48aa-b08c-e2945f4e55ee.jpg",},
   
       ],
       [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/44351c32-e291-4ef3-9b12-c8570d2d369e.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f521d4d5-bf2c-462c-8897-e7e375c6301f.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",},
   
       ],
       [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3fd3b743-7482-48aa-b08c-e2945f4e55ee.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/44351c32-e291-4ef3-9b12-c8570d2d369e.jpg",},
   
       ],
       [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f521d4d5-bf2c-462c-8897-e7e375c6301f.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",},
   
       ],
    ]
    

    // Sliding images part
let start = (arr,container)=>{
container.innerText = ""
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
        localStorage.setItem("i",i)
    },3000)
 
 }
start(top_slide_images_arr,top_slide_bar_div)
   
start(middle_slide_bar_arr,middle_slide_bar_div)


    var index_value = 1


// document.querySelector(".lArrow").addEventListener("click",()=>{
//     let val = localStorage.getItem("i")
//     console.log(val);
//     start(top_slide_images_arr,top_slide_bar_div,val--)
// })

//    Best sellers part

    let pro_div = document.querySelector(".best_seller_products")
    let bestSeller = (bestSellersLeftArr,container)=>{
        container.innerText = ""
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
            let bsprice = document.createElement("p")
            bsprice.innerText = `₹ ${el.price}`
            pdiv.append(bsprice)

            let bstag = document.createElement("div")
            bstag.className = "text_tag"
            bstag.innerText = el.text

            let img_name_price_div = document.createElement("div")
            img_name_price_div.className = "img_name_price_div"

            img_name_price_div.append(bsimg,bsname,pdiv,)
            div.append(img_name_price_div,bstag)
            // console.log(div)
            container.append(div)
        })
       
    }
    bestSeller(bestSellersLeftArr,pro_div)
   let flag1= true;
   
   
    document.querySelector(".left_arr_div").addEventListener("click",()=>{

        flag1=!flag1
        if(flag1){
            bestSeller(bestSellersLeftArr,pro_div)
        }else{
            bestSeller(bestSellersRightArr,pro_div)
        }
        
    })
    let flag2 = false
    document.querySelector(".right_arr_div").addEventListener("click",()=>{
        flag2 = !flag2
        if(flag2){
            bestSeller(bestSellersRightArr,pro_div)
        }else{
            bestSeller(bestSellersLeftArr,pro_div)
        }
        
    })



    // Hot deals part

    let main_div = document.querySelector(".sixth_box_slide_div")
    let imageSlide =(arr,container)=>{
        container.innerText = ""
        arr.forEach((el)=>{
           
            let img_div = document.createElement("img")
            img_div.className = "bannerimg"
            img_div.src = el.img_url
            container.append(img_div)
        })

    }
    imageSlide(hotDealsarr[0],main_div)
    let hdleft = 0
   let hdright = 0
    document.querySelector(".hdLarr").addEventListener("click",()=>{
        
        hdleft--
        if(hdleft>=0){
            hdright--
            imageSlide(hotDealsarr[hdleft],main_div)           
        }else{
            hdleft++
        }
        
    })

    document.querySelector(".hdRarr").addEventListener("click",()=>{
       hdright++
       if(hdright<7){
           hdleft++
        imageSlide(hotDealsarr[hdright],main_div)
       }else{
           hdright--
       }
    })


    //  Sugar streaming part

    let videoPlay = (data)=>{
        data.forEach((el)=>{
            let main_div = document.querySelector(".eighth_box_video_div")
            let iframe_div = document.createElement("div")
            iframe_div.className = "iframe_div"
           let iframe = document.createElement("iframe")
           iframe.src = el.src
           iframe.style.border = "0"
           iframe.className = "iframeshorts"
            // console.log(iframe)
            main_div.append(iframe)
        })
    }
    videoPlay(videoPlayArr)


    // Super savers part

    let superSaversdiv = document.querySelector(".ninth_box_slide_div")
    let superSavers = (superSaversarr,container)=>{
        container.innerText = ""
        superSaversarr.forEach((el)=>{
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

            let main_price_div = document.createElement("div")
            main_price_div.className = "ssprice_div"
            let stoffdiv = document.createElement("div")
            stoffdiv.className = "stoffdiv"
            let rupee = document.createElement("p")
            rupee.innerText = el.rupee
            let stoffPrice = document.createElement("p")
            stoffPrice.innerText = `${el.stoffPrice}`
            stoffdiv.append(rupee,stoffPrice)

            let pdiv = document.createElement("div")
            pdiv.className = "pdiv"
            let bsprice = document.createElement("p")
            bsprice.innerText = ` ₹ ${el.price}`
            pdiv.append(bsprice)

            let disPer = document.createElement("p")
            disPer.style.color = "#fc3183"
            disPer.innerText = el.disPer
            main_price_div.append(stoffdiv,pdiv,disPer)

            let bstag = document.createElement("div")
            bstag.className = "text_tag"
            bstag.innerText = el.text

            let img_name_price_div = document.createElement("div")
            img_name_price_div.className = "img_name_price_div"

            img_name_price_div.append(bsimg,bsname,main_price_div)
            div.append(img_name_price_div,bstag)
            // console.log(div)
            container.append(div)
        })
       
    }
    superSavers(superSaversarr[0],superSaversdiv)
   let ssleft = 0
   let ssright = 0
    document.querySelector(".ssleft_arr_div").addEventListener("click",()=>{
        
        ssleft--
        if(ssleft>=0){
            ssright--
            superSavers(superSaversarr[ssleft],superSaversdiv)           
        }else{
            ssleft++
        }
        
    })

    document.querySelector(".ssright_arr_div").addEventListener("click",()=>{
       ssright++
       if(ssright<3){
           ssleft++
        superSavers(superSaversarr[ssright],superSaversdiv)
       }else{
           ssright--
       }
    })


    // Top pics of the week part

    let topPicksdiv = document.querySelector(".tenth_box_slide_div")
    imageSlide(topPicksArr[0],topPicksdiv)
    let tpleft = 0
    let tpright = 0
     document.querySelector(".tpLarr").addEventListener("click",()=>{
         
         tpleft--
         if(tpleft>=0){
             tpright--
             imageSlide(topPicksArr[tpleft],topPicksdiv)           
         }else{
             tpleft++
         }
         
     })
 
     document.querySelector(".tpRarr").addEventListener("click",()=>{
        tpright++
        if(tpright<2){
            tpleft++
         imageSlide(topPicksArr[tpright],topPicksdiv)
        }else{
            tpright--
        }
     })
 



    //  Gift sets part

    let giftSetsdiv = document.querySelector(".eleventh_box_slide_div")
    superSavers(giftSetsArr[0],giftSetsdiv)
    let gsleft = 0
    let gsright = 0
     document.querySelector(".gsleft_arr_div").addEventListener("click",()=>{
         
         gsleft--
         if(gsleft>=0){
             gsright--
             superSavers(giftSetsArr[gsleft],giftSetsdiv)           
         }else{
             gsleft++
         }
         
     })
 
     document.querySelector(".gsright_arr_div").addEventListener("click",()=>{
        gsright++
        if(gsright<2){
            gsleft++
         superSavers(giftSetsArr[gsright],giftSetsdiv)
        }else{
            gsright--
        }
     })


    //  This or That part

     let thisorthatdiv = document.querySelector(".twelth_box_div")
     imageSlide(thisorthatarr,thisorthatdiv)
 


    //  Just in part

     let justInDiv = document.querySelector(".thirteenth_box_slide_div")
     superSavers(justInArr[0],justInDiv)
     let jileft = 0
     let jiright = 0
      document.querySelector(".jileft_arr_div").addEventListener("click",()=>{
          
          jileft--
          if(jileft>=0){
              jiright--
              superSavers(justInArr[jileft],justInDiv)           
          }else{
              jileft++
          }
          
      })
  
      document.querySelector(".jiright_arr_div").addEventListener("click",()=>{
         jiright++
         if(jiright<4){
             jileft++
          superSavers(justInArr[jiright],justInDiv)
         }else{
             jiright--
         }
      })


    //   Sugar beauty blog part

      let sugarbeautydiv = document.querySelector(".fourteenth_box_div")
     imageSlide(sugarbeautyArr,sugarbeautydiv)

    //   Skincare Basics part

     let skincareBasicDiv = document.querySelector(".fifteenth_box_slide_div")
     bestSeller(skincareBasicsArr[0],skincareBasicDiv)
     let sbleft = 0
     let sbright = 0
      document.querySelector(".sbleft_arr_div").addEventListener("click",()=>{
          console.log("i am in");
          sbleft--
          if(sbleft>=0){
              sbright--
              bestSeller(skincareBasicsArr[sbleft],skincareBasicDiv)           
          }else{
              sbleft++
          }
          
      })
  
      document.querySelector(".sbright_arr_div").addEventListener("click",()=>{
        console.log("i am in");
         sbright++
         if(sbright<3){
             sbleft++
          bestSeller(skincareBasicsArr[sbright],skincareBasicDiv)
         }else{
             sbright--
         }
      })

    //   Explore part

    let exploreDiv = document.querySelector(".sixteenth_box_div")
    imageSlide(exploreArr[0],exploreDiv)
    let exleft = 0
    let exright = 0
     document.querySelector(".exLarr").addEventListener("click",()=>{
         
         exleft--
         if(exleft>=0){
             exright--
             imageSlide(exploreArr[exleft],exploreDiv)           
         }else{
             exleft++
         }
         
     })
 
     document.querySelector(".exRarr").addEventListener("click",()=>{
        exright++
        if(exright<7){
            exleft++
         imageSlide(exploreArr[exright],exploreDiv)
        }else{
            exright--
        }
     })

