let listProducts = [
    {
        name: "I phone 5",
        price: " 3000000",
        image: "img/anh1.jfif",
        id: "1",
    },
    {
        name: "I phone 6",
        price: " 2000000",
        image: "img/anh2.jfif",
        id: "2",
    },
    {
        name: "I phone 7",
        price: " 3000000",
        image: "img/anh3.jfif",
        id: "3",
    },
    {
        name: "I phone 8",
        price: " 3000000",
        image: "img/anh4.jfif",
        id: "4",
    },
    {
        name: "I phone 10",
        price: " 3000000",
        image: "img/anh1.jfif",
        id: "5",
    },

]
localStorage.setItem("listProductsInlocal", JSON.stringify(listProducts));

    let listProductCuaLocal = JSON.parse(localStorage.getItem("listProductsInlocal"));


function renderListProducts(all) {
    let data = "";
    // let listProductCuaLocal = JSON.parse(localStorage.getItem("listProductsInlocal"));

    for (let i = 0; i < all.length; i++) {
        // đổ vào data
        data += `
         <div class="product">
            <img src="${all[i].image}" alt="">    
            <p>${all[i].name}</p>
            <label for="price">${all[i].price}</label><br>
            <input type="number" value="1"><br>
            <div>
            <input type="number" value="1">
            <i onclick = addToCart(${all[i].id}) 
            class="fa-solid fa-cart-shopping" ></i>
            </div>
        </div>
        `
    }
    document.getElementById("showProduct").innerHTML = data; // in ra
}
renderListProducts(listProductCuaLocal);

// function add to cart

function addToCart(id) {

    let listProducts = JSON.parse(localStorage.getItem("listProductsInlocal"));

    // Gọi giỏ hàng của mình
    let listProductCart = localStorage.getItem("listProductCart");

    if (listProductCart == null) {
        listProductCart = [];
        for (let i = 0; i < listProducts.length; i++) {
            if (listProducts[i].id == id) {
                listProductCart.push(listProducts[i]);
                localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
                break;
            }
        }

    } else {


        let listProductAddCart = JSON.parse(listProductCart);
        for (let i = 0; i < listProducts.length; i++) {
            let flag = false;
            if (listProducts[i].id == id) {
                for (let j = 0; j < listProductAddCart.length; j++) {
                    if (listProductAddCart[j].id == id) {
                        flag = true;
                        break;
                    } else {
                        flag = false;
                    }
                }
                if (flag == true) {
                    alert("San pham da co trong gio hang")
                    console.log("San pham da co trong gio hang");
                } else {
                    listProductAddCart.push(listProducts[i]);
                    localStorage.setItem("listProductCart", JSON.stringify(listProductAddCart));
                }
            }
        }
    }
}


function timKiemSP() {
    let listRender = [];
    let valueInput = document.getElementById("inPutSearch").value.toUpperCase();

    for (let i = 0; i < listProductCuaLocal.length; i++) {
        if (listProductCuaLocal[i].name.toUpperCase().indexOf(valueInput) != -1) {
            console.log('11112');
            
            listRender.push(listProductCuaLocal[i])
        }
    }

    renderListProducts(listRender);

}

// function timKiemSP() {
//     let timKiemIphone = document.getElementById("inPutSearch").value;
//     // console.log(timKiemIphone.value);
//     let data = '';
//     for (let i = 0; i < listProductCuaLocal.length; i++) {
//         if (listProductCuaLocal[i].name.indexOf(timKiemIphone) != -1) {
//             console.log('a');
//         data += `
//          <div class="product">
//             <img src="${listProductCuaLocal[i].image}" alt="">    
//             <p>${listProductCuaLocal[i].name}</p>
//             <label for="price">${listProductCuaLocal[i].price}</label><br>
//             <input type="number" value="1"><br>
//             <div>
//             <input type="number" value="1">
//             <i onclick = addToCart(${listProductCuaLocal[i].id}) 
//             class="fa-solid fa-cart-shopping" ></i>
//             </div>
//         </div>
//         `

//         }
//     }
// document.getElementById("timKiemIphone").innerHTML="data";

// }













