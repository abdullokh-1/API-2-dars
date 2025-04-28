// let qiy = {
//     price:45000
// }
// let sne = {
//     price:79000
// }
// let clas = {
//     price:34000
// }

// let lon = {
//     price:45000
// }
// let b = {
//     price:62000
// }
// let last = {
//     price:53000
// }
// let schoo = {
//     price:36000 
// }
// let com = {
//     price:20000
// }
// let fre = {
//     price:43000
// }

// let fre2 = {
//     price:79000
// }
// let fre4 = {
//     price:149000
// }
// let ach = {
//     price:43000
// }

// let content = document.getElementById("div3")

// let qiyqiriq = document.getElementById("qiyqiriq")
// let shashlik = document.getElementById("shashlik")

// qiyqiriq.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newEl = document.createElement("div")
//     newEl.innerHTML = `
//     <h2>Qiyqiriq set</h2>
//     <p>${qiy.price}</p>`

//     content.appendChild(newEl)
//    }

//    snek.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Снек сет</h2>
//     <p>${sne.price}</p>`

//     content.appendChild(newl)                   
//    }


//    klassic.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Классик сет</h2>
//     <p>${clas.price}</p>`

//     content.appendChild(newl) 
//    }

//    longer.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Лонгер рингс сет</h2>
//     <p>${lon.price}</p>`

//     content.appendChild(newl) 
//    }

//    big.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Биг сет</h2>
//     <p>${b.price}</p>`

//     content.appendChild(newl)           
//    }
//    laster.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Лестер сет</h2>
//     <p>${last.price}</p>`

//     content.appendChild(newl)          
//    }

//    school.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Скул сет</h2>
//     <p>${schoo.price}</p>`

//     content.appendChild(newl)             
//    }
//    combo.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Комбо сет Большой</h2>
//     <p>${com.price}</p>`

//     content.appendChild(newl)           
//    }
//    freand.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Do’stlar 1х</h2>
//     <p>${fre.price}</p>`

//     content.appendChild(newl)    
//    }

//    freands.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Do’stlar 2х</h2>
//     <p>${fre2.price}</p>`

//     content.appendChild(newl)       
//    }
//    dost.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Do’stlar 4х</h2>
//     <p>${fre4.price}</p>`
    
//     content.appendChild(newl)                                  
//    }
//    achiq.onclick = function(){
//     let soni = alert(`maxsulot savatga qoshildi`)
//     let newl = document.createElement("div")
//     newl.innerHTML = `
//     <h2>Острый Do’stlar 1х</h2>
//     <p>${ach.price}</p>`

//     content.appendChild(newl)    
//    }


// Mahsulotlar narxlari
const products = {
    qiyqiriq: { name: "Qiyqiriq set", price: 45000 },
    snek: { name: "Снек сет", price: 79000 },
    klassic: { name: "Классик сет", price: 34000 },
    longer: { name: "Лонгер рингс сет", price: 45000 },
    big: { name: "Биг сет", price: 62000 },
    laster: { name: "Лестер сет", price: 53000 },
    school: { name: "Скул сет", price: 36000 },
    combo: { name: "Комбо сет Большой", price: 20000 },
    freand: { name: "Do’stlar 1х", price: 43000 },
    freands: { name: "Do’stlar 2х", price: 79000 },
    dost: { name: "Do’stlar 4х", price: 149000 },
    achiq: { name: "Острый Do’stlar 1х", price: 43000 }
};

// Savat div
const content = document.getElementById("div3");

// Umumiy narx
let totalPrice = 0;

// Mahsulot qo'shish funksiyasi
function addToCart(productKey) {
    const product = products[productKey];

    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price.toLocaleString()} so'm</p>
    `;

    content.appendChild(item);

    totalPrice += product.price;
    updateTotal();
}

// Umumiy narxni yangilash funksiyasi
function updateTotal() {
    let totalDiv = document.getElementById("total-price");
    if (!totalDiv) {
        totalDiv = document.createElement("div");
        totalDiv.id = "total-price";
        content.appendChild(totalDiv);
    }
    totalDiv.innerHTML = `<h2>Umumiy: ${totalPrice.toLocaleString()} so'm</h2>`;
}

// Tugmalarni eventga ulash
Object.keys(products).forEach(key => {
    document.getElementById(key).onclick = function() {
        addToCart(key);
    };
});




