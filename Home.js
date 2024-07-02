// nav js start
var womensData = [
  // {
  //   image: "boat/gift/smartwatch2.webp",
  //   name: "Airdopes 131",
  //   finalPrice: 1099,
  //   discount: 63,
  //   mrp: 2990,
  //   rating: 4.8,
  //   review: 1298,
  // },
  {
    image: "E:project files\boatgiftIMG-20240626-WA0018.jpg",
    name: "Rockerz 260 v1",
    finalPrice: 1999,
    discount: 52,
    mrp: 2490,
    rating: 4.2,
    review: 1238,
  },
  {
    image: "s2.jpg",
    name: "Wave Connect",
    finalPrice: 2999,
    discount: 57,
    mrp: 6999,
    rating: 4.1,
    review: 1198,
  },
  {
    image: "s8.jpg",
    name: "BassHeads 220",
    finalPrice: 699,
    discount: 30,
    mrp: 999,
    rating: 4.2,
    review: 1198,
  },
  {
    image: "s4.png",
    name: "103 wireless",
    finalPrice: 799,
    discount: 60,
    mrp: 1990,
    rating: 4.8,
    review: 1298,
  },
];

var forfrends = [
  {
    image: "a1.avif",
    name: "Rockerz 255 pro",
    finalPrice: 1090,
    discount: 69,
    mrp: 2990,
    rating: 4.8,
    review: 383,
  },
  {
    image: "s8.jpg",
    name: "Airdopes 131",
    finalPrice: 1099,
    discount: 63,
    mrp: 2990,
    rating: 4.8,
    review: 1298,
  },
  {
    image: "s5.jpg",
    name: "Immortal 121",
    finalPrice: 1699,
    discount: 51,
    mrp: 3499,
    rating: 4.8,
    review: 80,
  },
  {
    image: "s7.jpg",
    name: "Xtends",
    finalPrice: 2699,
    discount: 66,
    mrp: 7990,
    rating: 4.8,
    review: 146,
  },
  {
    image: "s11.jpg",
    name: "Deuce 330",
    finalPrice: 299,
    discount: 57,
    mrp: 699,
    rating: 4.6,
    review: 129,
  },
];

var forbottom = [
  {
    image: "s7.jpg",
    name: "Stone 131",
    finalPrice: 899,
    discount: 53,
    mrp: 1990,
    rating: 4.8,
    review: 1298,
  },
  {
    image: "s1.jpg",
    name: "Airdopes 441 pro...",
    finalPrice: 2199,
    discount: 63,
    mrp: 6990,
    rating: 4.1,
    review: 12,
  },
  {
    image: "s8.jpg",
    name: "Airdopes 121 v2",
    finalPrice: 1299,
    discount: 57,
    mrp: 2990,
    rating: 4.8,
    review: 526,
  },
  {
    image: "s10.jpg",
    name: "Airdopes 131",
    finalPrice: 1099,
    discount: 63,
    mrp: 2990,
    rating: 4.8,
    review: 1298,
  },
  {
    image: "s9.jpg",
    name: "Storam call",
    finalPrice: 1299,
    discount: 63,
    mrp: 2390,
    rating: 4.1,
    review: 128,
  },
];

topp();
function topp() {
  womensData.map(function (elem, index) {
    var divmain = document.createElement("div");
    divmain.setAttribute("id", "main");

    var divleft = document.createElement("div");
    divleft.setAttribute("id", "left");

    var divtag = document.createElement("div");
    divtag.setAttribute("id", "tag");

    var light = document.createElement("span");
    light.innerHTML = '<i class="fa-solid fa-bolt-lightning"></i>';

    var tagcontent = document.createElement("span");
    tagcontent.textContent = " New Launch";

    divtag.append(light, tagcontent);

    var imgprod = document.createElement("img");
    imgprod.setAttribute("src", elem.image);
    imgprod.setAttribute("id", "image");
    divleft.append(divtag, imgprod);

    var divright = document.createElement("div");
    divright.setAttribute("id", "right");

    var divname = document.createElement("div");
    divname.setAttribute("id", "name");
    divname.textContent = elem.name;
    // divright.append(divname)
    var divpricebox = document.createElement("div");
    divpricebox.setAttribute("id", "priceBox");

    var divfinalprice = document.createElement("div");
    divfinalprice.setAttribute("id", "finalprice");
    divfinalprice.textContent = "Rs." + elem.finalPrice;

    var divdiscount = document.createElement("div");
    divdiscount.setAttribute("id", "discount");
    divdiscount.textContent = elem.discount + "%";

    var divmrp = document.createElement("div");
    divmrp.setAttribute("id", "mrp");
    divmrp.textContent = "Rs." + elem.mrp;

    divpricebox.append(divfinalprice, divdiscount, divmrp);
    // divright.append(divname, divpricebox)

    var divreview = document.createElement("div");
    divreview.setAttribute("id", "review");

    var p_review = document.createElement("p");

    var spanstar = document.createElement("span");
    spanstar.innerHTML = '<i class="fa-solid fa-star"></i>' + "  ";
    spanstar.setAttribute("id", "star");

    var spanrate = document.createElement("span");
    spanrate.textContent = elem.rating + "    reviews";

    p_review.append(spanstar, spanrate);
    divreview.append(p_review);
    // divright.append(divname, divpricebox, divreview)

    var upitag = document.createElement("p");
    upitag.textContent = "Rs.15 Extra Discount on UPI";

    var divcart = document.createElement("div");
    divcart.setAttribute("id", "cartdiv");

    var cartbutton = document.createElement("button");
    cartbutton.textContent = "ADD TO CART";

    cartbutton.setAttribute("class", "button");
    cartbutton.addEventListener("click", function () {
      // for(var i=0;i<boatcart.length;i++){
      //   if(boatcart[i].name == elem.name){
      //     alert("Item already added to cart")
      //     return
      //   }
      // }
      var temp = {
        img: elem.image,
        name: elem.name,
        price: elem.finalPrice,
        off: elem.discount,
        ogprice: elem.mrp,
        rating: elem.rating,
        reviews: elem.review,
        quan: 1,
      };

      boatcart.push(temp);
      localStorage.setItem("boat-cart", JSON.stringify(boatcart));
      updateCart();
    });

    divcart.append(cartbutton);

    //    divleft.append(divtag,imgprod)

    divright.append(divname, divpricebox, divreview, upitag, divcart);

    divmain.append(divleft, divright);

    document.getElementById("item").append(divmain);
  });
}

mid();
function mid() {
  //event.preventDefault();
  forfrends.map(function (elem, index) {
    var divmain = document.createElement("div");
    divmain.setAttribute("id", "main");

    var divleft = document.createElement("div");
    divleft.setAttribute("id", "left");

    var divtag = document.createElement("div");
    divtag.setAttribute("id", "tag");

    var light = document.createElement("span");
    light.innerHTML = '<i class="fa-solid fa-bolt-lightning"></i>';

    var tagcontent = document.createElement("span");
    tagcontent.textContent = " SUPER SAVER";

    divtag.append(light, tagcontent);

    var imgprod = document.createElement("img");
    imgprod.setAttribute("src", elem.image);
    imgprod.setAttribute("id", "image");
    divleft.append(divtag, imgprod);

    var divright = document.createElement("div");
    divright.setAttribute("id", "right");

    var divname = document.createElement("div");
    divname.setAttribute("id", "name");
    divname.textContent = elem.name;
    // divright.append(divname)
    var divpricebox = document.createElement("div");
    divpricebox.setAttribute("id", "priceBox");

    var divfinalprice = document.createElement("div");
    divfinalprice.setAttribute("id", "finalprice");
    divfinalprice.textContent = "Rs." + elem.finalPrice;

    var divdiscount = document.createElement("div");
    divdiscount.setAttribute("id", "discount");
    divdiscount.textContent = elem.discount + "%";

    var divmrp = document.createElement("div");
    divmrp.setAttribute("id", "mrp");
    divmrp.textContent = "Rs." + elem.mrp;

    divpricebox.append(divfinalprice, divdiscount, divmrp);
    // divright.append(divname, divpricebox)

    var divreview = document.createElement("div");
    divreview.setAttribute("id", "review");

    var p_review = document.createElement("p");

    var spanstar = document.createElement("span");
    spanstar.innerHTML = '<i class="fa-solid fa-star"></i>' + "  ";
    spanstar.setAttribute("id", "star");

    var spanrate = document.createElement("span");
    spanrate.textContent = elem.rating + "    reviews";

    p_review.append(spanstar, spanrate);
    divreview.append(p_review);
    // divright.append(divname, divpricebox, divreview)

    var upitag = document.createElement("p");
    upitag.textContent = "Rs.15 Extra Discount on UPI";

    var divcart = document.createElement("div");
    divcart.setAttribute("id", "cartdiv");

    var cartbutton = document.createElement("button");
    cartbutton.textContent = "ADD TO CART";

    cartbutton.setAttribute("class", "button");
    cartbutton.addEventListener("click", function () {
      // for(var i=0;i<boatcart.length;i++){
      //   if(boatcart[i].name == elem.name){
      //     alert("Item already added to cart")
      //     return
      //   }
      // }
      var temp = {
        img: elem.image,
        name: elem.name,
        price: elem.finalPrice,
        off: elem.discount,
        ogprice: elem.mrp,
        rating: elem.rating,
        reviews: elem.review,
        quan: 1,
      };

      boatcart.push(temp);
      localStorage.setItem("boat-cart", JSON.stringify(boatcart));
      updateCart();
    });

    divcart.append(cartbutton);

    //    divleft.append(divtag,imgprod)

    divright.append(divname, divpricebox, divreview, upitag, divcart);

    divmain.append(divleft, divright);

    document.getElementById("friends").append(divmain);
  });
}

bott();
function bott() {
  //event.preventDefault();
  forbottom.map(function (elem, index) {
    var divmain = document.createElement("div");
    divmain.setAttribute("id", "main");

    var divleft = document.createElement("div");
    divleft.setAttribute("id", "left");

    var divtag = document.createElement("div");
    divtag.setAttribute("id", "tag");

    var light = document.createElement("span");
    light.innerHTML = '<i class="fa-solid fa-bolt-lightning"></i>';

    var tagcontent = document.createElement("span");
    tagcontent.textContent = " SUPER SAVER";

    divtag.append(light, tagcontent);

    var imgprod = document.createElement("img");
    imgprod.setAttribute("src", elem.image);
    imgprod.setAttribute("id", "image");
    divleft.append(divtag, imgprod);

    var divright = document.createElement("div");
    divright.setAttribute("id", "right");

    var divname = document.createElement("div");
    divname.setAttribute("id", "name");
    divname.textContent = elem.name;
    // divright.append(divname)
    var divpricebox = document.createElement("div");
    divpricebox.setAttribute("id", "priceBox");

    var divfinalprice = document.createElement("div");
    divfinalprice.setAttribute("id", "finalprice");
    divfinalprice.textContent = "Rs." + elem.finalPrice;

    var divdiscount = document.createElement("div");
    divdiscount.setAttribute("id", "discount");
    divdiscount.textContent = elem.discount + "%";

    var divmrp = document.createElement("div");
    divmrp.setAttribute("id", "mrp");
    divmrp.textContent = "Rs." + elem.mrp;

    divpricebox.append(divfinalprice, divdiscount, divmrp);
    // divright.append(divname, divpricebox)

    var divreview = document.createElement("div");
    divreview.setAttribute("id", "review");

    var p_review = document.createElement("p");

    var spanstar = document.createElement("span");
    spanstar.innerHTML = '<i class="fa-solid fa-star"></i>' + "  ";
    spanstar.setAttribute("id", "star");

    var spanrate = document.createElement("span");
    spanrate.textContent = elem.rating + "    reviews";

    p_review.append(spanstar, spanrate);
    divreview.append(p_review);
    // divright.append(divname, divpricebox, divreview)

    var upitag = document.createElement("p");
    upitag.textContent = "Rs.15 Extra Discount on UPI";

    var divcart = document.createElement("div");
    divcart.setAttribute("id", "cartdiv");

    var cartbutton = document.createElement("button");
    cartbutton.textContent = "ADD TO CART";

    cartbutton.setAttribute("class", "button");
    cartbutton.addEventListener("click", function () {
      // for(var i=0;i<boatcart.length;i++){
      //   if(boatcart[i].name == elem.name){
      //     alert("Item already added to cart")
      //     return
      //   }
      // }
      var temp = {
        img: elem.image,
        name: elem.name,
        price: elem.finalPrice,
        off: elem.discount,
        ogprice: elem.mrp,
        rating: elem.rating,
        reviews: elem.review,
        quan: 1,
      };

      boatcart.push(temp);
      localStorage.setItem("boat-cart", JSON.stringify(boatcart));
      updateCart();
    });

    divcart.append(cartbutton);

    divright.append(divname, divpricebox, divreview, upitag, divcart);

    divmain.append(divleft, divright);

    document.getElementById("bottom").append(divmain);
  });
}

// dropdown categories redirects

var boatcart = JSON.parse(localStorage.getItem("boat-cart")) || [];
var boatlogin = JSON.parse(localStorage.getItem("boat-login")) || [];

function goToWL() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/true-wireless-earbuds";
}

function goToWH() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/bluetooth-wireless-headphones";
}

function goToW() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/smart-watches";
}

function goToBW() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/wired-headphones";
}

function goToSS() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/bluetooth-speakers";
}

function goToAH() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/home-audio";
}

function goToMA() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/mobile-accessories";
}

function goToW() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/trebel-for-women";
}

function goToLE() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/limited-edition";
}

function goToT() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/misfit-by-boat";
}

function goToIG() {
  window.location.href =
    "https://www.boat-lifestyle.com/collections/immortal-gaming";
}

/* show cart sliding div */
let openPanelButton = document.getElementById("open-panel");
let closePanelButton = document.getElementById("close-panel");
let cartPanel = document.querySelector(".cart-panel");

openPanelButton.onclick = () => {
  cartPanel.classList.add("open");
  openPanelButton.classList.add("hide");
  document.querySelector("nav").style.position = "static";
  document.querySelector(".fa-magnifying-glass").style.display = "none";
  updateCart();
};

closePanelButton.onclick = () => {
  cartPanel.classList.remove("open");
  openPanelButton.classList.remove("hide");
  document.querySelector("nav").style.position = "sticky";
  document.querySelector(".fa-magnifying-glass").style.display = "block";
};

function updateCart() {
  document.getElementById("cc").textContent = "";
  if (boatcart.length == 0) {
    var p = document.createElement("p");
    p.textContent = "Your cart is empty";
    p.style.textAlign = "center";
    p.style.marginTop = "250px";
    var btn = document.createElement("button");
    btn.textContent = "START SHOPPING";
    btn.style.backgroundColor = "#FF0000";
    btn.style.border = "0";
    btn.style.width = "40%";
    btn.style.margin = "auto";
    btn.style.marginTop = "20px";
    btn.style.borderRadius = "8px";
    btn.style.padding = "10px 35px";
    btn.style.color = "white";
    btn.style.fontWeight = "600";
    document.getElementById("cc").append(p, btn);
  } else {
    boatcart.map(function (elem, idx) {
      document.getElementById("cc").style.justifyContent = "flex-start";
      // ITEM CONTAINER
      console.log(elem);
      var icontainer = document.createElement("div");
      icontainer.style.borderBottom = "1px solid lightgray";
      icontainer.style.display = "flex";
      icontainer.classList.add("icontain");
      var img1 = document.createElement("img");
      img1.setAttribute("src", elem.img);
      img1.style.width = "92px";
      var idiv1 = document.createElement("div");
      var p1 = document.createElement("p");
      p1.textContent = elem.name;
      var p2 = document.createElement("p");
      p2.innerHTML =
        "₹" + elem.price + " <span>" + "₹" + elem.ogprice + "</span>";
      var p3 = document.createElement("p");
      var span1 = document.createElement("span");
      span1.textContent = "-";
      span1.addEventListener("click", function () {
        if (elem.quan > 1) {
          elem.quan--;
          localStorage.setItem("boat-cart", JSON.stringify(boatcart));
          updateCart();
        }
      });
      var span2 = document.createElement("span");
      span2.textContent = elem.quan;
      var span3 = document.createElement("span");
      span3.textContent = "+";
      span3.addEventListener("click", function () {
        elem.quan++;
        localStorage.setItem("boat-cart", JSON.stringify(boatcart));
        updateCart();
      });
      p3.append(span1, span2, span3);
      idiv1.append(p1, p2, p3);
      var img2 = document.createElement("img");
      img2.setAttribute(
        "src",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1_93145e45-8530-46aa-9fb8-6768cc3d80d2.png?v=1633783107"
      );
      img2.style.width = "16px";
      img2.style.height = "16px";
      img2.addEventListener("click", function () {
        boatcart = boatcart.filter(function (e, i) {
          return idx != i;
        });
        localStorage.setItem("boat-cart", JSON.stringify(boatcart));
        updateCart();
      });
      icontainer.append(img1, idiv1, img2);

      document.getElementById("cc").append(icontainer);
    });
  }
  document.getElementById("itemcount").textContent = boatcart.length;

  // PRICE AND TOTAL DIV
  document.getElementById("cctotal").textContent = "";
  var div = document.createElement("div");

  var pdiv1 = document.createElement("div");
  var pp1 = document.createElement("p");
  pp1.textContent = "Shipping:";
  var pp2 = document.createElement("p");
  pp2.textContent = "FREE";
  var pdiv2 = document.createElement("div");
  var pp3 = document.createElement("p");
  pp3.textContent = "Total:";
  var pp4 = document.createElement("p");
  var sum = boatcart.reduce(function (acc, ce) {
    var total = parseInt(ce.price.split(",").join("")) * parseInt(ce.quan);
    return acc + total;
  }, 0);
  pp4.textContent = "₹" + sum;
  console.log(sum);
  pdiv1.append(pp1, pp2);
  pdiv2.append(pp3, pp4);

  var a1 = document.createElement("a");
  a1.textContent = "Continue Shopping >";
  a1.setAttribute("href", "index.html");
  var btn1 = document.createElement("button");
  btn1.textContent = "PLACE ORDER";
  div.append(pdiv1, pdiv2, a1, btn1);

  document.getElementById("cctotal").append(div);
}
// show login div
function showLogin() {
  document.querySelector(".show2").classList.toggle("show3");
}

// navigation function
function showMain() {
  window.location.href = "index.html";
}

// drop down for categories
function showDiv() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// nav js end
var productData = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_720x.png?v=1642405569",
    off: " you save 56%",

    rating: " 5 star ",
    name: "boAt Airdopes 131 - Wireless Earbuds",
    price: 1299.0,
    stkPrice: 2999.0,
    category: "wireless earbuds",
    btn1: "btn1",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_360x.png?v=1641801662",
    off: " you save 64%",
    rating: " 5 star ",
    name: "boAt Rockerz 333",
    price: 1399.0,
    stkPrice: 2999.0,
    category: " wireless earphones",
    btn2: "btn2",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_360x.png?v=1645164257",
    off: " you save 64%",
    rating: " 5 star ",
    name: "boAt Watch Xtend‌",
    price: 2799.0,
    stkPrice: 7999.0,
    category: " smart watchs",
    btn: "btn3",
  },

  {
    image:
      " https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_541e4150-6924-467d-b193-1793daa2e283_360x.png?v=1648119560",
    off: "you save 56%",
    rating: " 5 star ",
    name: "boAt  Deuce 500",
    price: 499.0,
    stkPrice: 899.0,
    category: "cable",
    btn: "btn4",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_360x.png?v=1647426798",
    off: " you save 64%",
    rating: " 5 star ",
    name: " Airdopes 411 ANC",
    price: 2299.0,
    stkPrice: 4990.0,
    category: "wireless earbuds",
    btn: "btn5",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_420x.png?v=1625046144",
    off: " you save 70%",
    rating: " 5 star ",
    name: "boAt Rockerz 550",
    price: 1199.0,
    stkPrice: 4999.0,
    category: "wireless headphones",
    btn: "btn6",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainblack_360x.png?v=1640237575",
    off: " you save 62%",
    rating: " 5 star ",
    name: "boAt watch Iris",
    price: 4499.0,
    stkPrice: 11999.0,
    category: "smart watchs",
    btn: "btn7",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e7910a39-186a-41f6-ac57-fc3e84108104_360x.png?v=1625045106",
    off: " you save 58%",
    rating: " 5 star ",
    name: "boAt Storm",
    price: 2499.0,
    stkPrice: 5999.0,
    category: "smart watchs",
    btn: "btn8",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Black_2_360x.png?v=1639486284",
    off: " you save 61%",
    rating: " 5 star ",
    name: "boAt watch Mystiq",
    price: 3499.0,
    stkPrice: 8990.0,
    category: "smart watchs",
    btn: "btn9",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_360x.png?v=1625552657",
    off: " you save 62%",
    rating: " 5 star ",
    name: "boAt Rockerz 255 Pro+",
    price: 1499.0,
    stkPrice: 3999.0,
    category: "wireless earphones",
    btn: "btn10",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_360x.png?v=1625045744",
    off: " you save 69%",
    rating: " 5 star ",
    name: "boAt Rockerz 450",
    price: 1199.0,
    stkPrice: 3999.0,
    category: "wireless headphones",
    btn: "btn11",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f7d33ad-39a9-4426-836e-c300814839b9_360x.png?v=1625046105 ",
    off: " you save 66%",
    rating: " 5 star ",
    name: "boAt Rockerz 235 V2",
    price: 999.0,
    stkPrice: 2999.0,
    category: "wireless earphones",
    btn: "btn12",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_360x.png?v=1625046259",
    off: " you save 60%",
    rating: " 5 star ",
    name: "boAt BassHeads",
    price: 399.0,
    stkPrice: 999.0,
    category: "wired earphones",
    btn: "btn13",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_360x.png?v=1574927262",
    off: " you save 70%",
    rating: " 5 star ",
    name: "boAt BassHead 103",
    price: 379.0,
    stkPrice: 1290.0,
    category: "wired earphones",
    btn: "btn14",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8ec58553-3255-48ec-929e-4838215b640c_360x.png?v=1625046271",
    off: " you save 67%",
    rating: " 5 star ",
    name: "boAt BassHeads 900",
    price: 799.0,
    stkPrice: 2499.0,
    category: "wired headphones",
    btn: "btn15",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_1_e171664a-1254-45e6-9dde-2ac4f0a815c9_360x.png?v=1648466727",
    off: "  NEW-ARRIVAL",
    rating: " 5 star ",
    name: "boAt Rockerz 235 Pro",
    price: 999.0,
    stkPrice: 1999.0,
    category: "wireless earphones",
    btn: "btn100",
  },
];

var cartArr = JSON.parse(localStorage.getItem("cart")) || [];

var el = document.getElementById("btn1");
if (el) {
  el.addEventListener("click", btn1);
}

function btn1() {
  event.preventDefault();
  cartArr.push(productData[0]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn2").addEventListener("click", btn2);

function btn2() {
  event.preventDefault();
  cartArr.push(productData[1]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn3").addEventListener("click", btn3);

function btn3() {
  event.preventDefault();
  cartArr.push(productData[2]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn4").addEventListener("click", btn4);

function btn4() {
  event.preventDefault();
  cartArr.push(productData[3]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn5").addEventListener("click", btn5);

function btn5() {
  event.preventDefault();
  cartArr.push(productData[4]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn6").addEventListener("click", btn6);

function btn6() {
  event.preventDefault();
  cartArr.push(productData[5]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn7").addEventListener("click", btn7);

function btn7() {
  event.preventDefault();
  cartArr.push(productData[6]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn8").addEventListener("click", btn8);

function btn8() {
  event.preventDefault();
  cartArr.push(productData[7]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn9").addEventListener("click", btn9);

function btn9() {
  event.preventDefault();
  cartArr.push(productData[8]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn10").addEventListener("click", btn10);

function btn10() {
  event.preventDefault();
  cartArr.push(productData[9]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn11").addEventListener("click", btn11);

function btn11() {
  event.preventDefault();
  cartArr.push(productData[10]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn12").addEventListener("click", btn12);

function btn12() {
  event.preventDefault();
  cartArr.push(productData[11]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn13").addEventListener("click", btn13);

function btn13() {
  event.preventDefault();
  cartArr.push(productData[12]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn14").addEventListener("click", btn14);

function btn14() {
  event.preventDefault();
  cartArr.push(productData[13]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}
document.getElementById("btn15").addEventListener("click", btn15);

function btn15() {
  event.preventDefault();
  cartArr.push(productData[14]);
  alert("Item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
  // window.location.href="HomePage.html"
}

// console.log(cartArr)

var addCartArr = JSON.parse(localStorage.getItem("cart"));

console.log(addCartArr);
var len = addCartArr.length;
console.log(len);
document.getElementById("cartItems").innerText = len;

document.querySelector("#cham").addEventListener("click", mycham1);
function mycham1() {
  window.location.href = "champion.html";
}
document.querySelector("#boat_logo").addEventListener("click", mycham2);
function mycham2() {
  window.location.reload();
}

document.querySelector("#card_gift").addEventListener("click", mycham3);
function mycham3() {
  window.location.href = "giftCard.html";
}
document.querySelector("#myAccount").addEventListener("click", mycham4);
function mycham4() {
  window.location.href = "/Boat-project-unit-2/Payment/signup.html ";
}
document.querySelector("#myCart").addEventListener("click", mycham5);
function mycham5() {
  window.location.href = "cart.html";
}

document.querySelector(".top_slider").addEventListener("click", mycham6);
function mycham6() {
  window.location.href = "cable.html";
}

document.querySelector("#p1").addEventListener("click", mya1);
function mya1() {
  window.location.href = "Airdopes.html";
}
document.querySelector("#p2").addEventListener("click", mya2);
function mya2() {
  window.location.href = "earphone.html";
}

document.querySelector("#p3").addEventListener("click", mya3);
function mya3() {
  window.location.href = "watch.html";
}

document.querySelector("#p4").addEventListener("click", mya4);
function mya4() {
  window.location.href = "earphone.html";
}
document.querySelector("#p5").addEventListener("click", mya5);
function mya5() {
  window.location.href = "Airdopes.html";
}
document.querySelector("#p6").addEventListener("click", mya6);
function mya6() {
  window.location.href = "headphone.html";
}
document.querySelector("#p7").addEventListener("click", mya7);
function mya7() {
  window.location.href = "earbuds.html";
}
document.querySelector("#p8").addEventListener("click", mya8);
function mya8() {
  window.location.href = "earbuds.html";
}
document.querySelector("#p9").addEventListener("click", mya9);
function mya9() {
  window.location.href = "Airdopes.html";
}
document.querySelector("#p10").addEventListener("click", mya10);
function mya10() {
  window.location.href = "watch.html";
}
document.querySelector("#p11").addEventListener("click", mya11);
function mya11() {
  window.location.href = "watch.html";
}
document.querySelector("#p12").addEventListener("click", mya12);
function mya12() {
  window.location.href = "watch.html";
}
document.querySelector("#p13").addEventListener("click", mya13);
function mya13() {
  window.location.href = "headphone.html";
}
document.querySelector("#p14").addEventListener("click", mya14);
function mya14() {
  window.location.href = "headphone.html";
}
document.querySelector("#p15").addEventListener("click", mya15);
function mya15() {
  window.location.href = "headphone.html";
}
document.querySelector("#p16").addEventListener("click", mya16);
function mya16() {
  window.location.href = "earphone.html";
}
document.querySelector("#p17").addEventListener("click", mya17);
function mya17() {
  window.location.href = "earphone.html";
}
document.querySelector("#p18").addEventListener("click", mya18);
function mya18() {
  window.location.href = "earphone.html";
}

document.querySelector("#dd").addEventListener("click", mya18);
function mya18() {
  window.location.href = "dailyDeals.html";
}

document.querySelector("#searchBtn").addEventListener("click", mysea);
function mysea() {
  window.location.href = "dailyDeals.html";
}
