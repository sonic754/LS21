const arr = [
    {
    img:"f2 1.png",
    h2:"Бугун – миллий либослар куни",
    p:"Миллий либос – бу наfaқат кийим, балки ўзлигимиз, тарихимиз ва фахримиздир. Келинг, бугун миллий либосда юриб, ўз илдизларимизга ...",

},
    {  
          img:"F3 1.png",
    h2:"Нью Узбeкистон Кўп Бухоро 2025",
    p:'Бугун "Нефть Газ Бино Иншоот" МЧЖ ходимлари иш кунини ўзбекона руҳда – миллий либосларда бошлашди..',
},
    { 
           img:"image 1.png",
    h2:"Миллий либосларга ҳурмат ...",
    p:'Бугун "Нефть Газ Бино Иншоот" МЧЖ ходимлари иш кунини ўзбекона руҳда – миллий либосларда бошлашди.',
},
]

const parent = document.getElementById("parent")

arr.map(item =>{
const div = document.createElement("div")

div.innerHTML = `<div class="mt-4">
    <img src="${item.img}" alt="">
    <h2 class="text-xl font-bold pt-3" >${item.h2}</h2>
    <p class="font-semibold text-[12px] w-[369px]  flex-wrap pt-3" >${item.p}</p>
</div>`


parent.appendChild(div)
})


const arr_2 = [
    {
    img:"image 3 (1).png",
    h2:"O‘zbekneftgaz” AJ moliyaviy",
    p:'ko‘magida Toshkent tumanida ijodkor o‘quvchilarning “Uzun suv” nomli to‘plami nashr etildi.Kitobning taqdimoti marosimi haqida batafsil tafsilotlar bilan "Yoshlar" telekanalining "Yangi davr" dasturi orqali efirga uzatilgan ',
    },
    {
    img:"image 4.png",
    h2:"O‘zbekneftgaz” AJ tomonidan og‘ir sharoitdagi oilalar ",
    p:"“O‘zbekneftgaz” AJ tomonidan og‘ir sharoitdagi oilalar va probatsiya ro‘yxatdagi yoshlarni ijtimoiy qo‘llab-quvvatlash haqida “O‘zbekiston 24” telekanalida efirga uzatilgan  (https://youtu.be/tUBM9CGTd2w)reportajda batafsil tanishishingiz mumkin.",
    },
]

const parent_2 = document.getElementById("parent_2")

arr_2.map(item_2 =>{
const div_2 = document.createElement("div")

div_2.innerHTML = `        <div class="flex  bg-[#00A2DE] h-[300px] w-[1214px] rounded-tr-[15px] rounded-br-[15px] rounded-tl-[17px] rounded-bl-[17px] items-center">

    <img src="${item_2.img}" alt="">
<div class="flex flex-col items-center">
        <h2 class="text-white text-2xl font-semibold  mt-4 mb-6" >${item_2.h2}</h2>
    <p class="text-white flex-wrap text-center w-[630px] ml-3">${item_2.p}</p>
</div>
  </div>`


parent_2.appendChild(div_2)
})
