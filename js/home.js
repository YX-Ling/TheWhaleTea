window.onload = function(){
    var homebtn = document.getElementById("homebtn");
    homebtn.onclick = function(){
        window.location = "/index.html";
    }
    var newsbtn = document.getElementById("newsbtn");
    newsbtn.onclick = function(){
        window.location = "/page/news.html"
    }
    var productsbtn = document.getElementById("productsbtn");
    productsbtn.onclick = function(){
        window.location = "/page/products.html"
    }
    var storebtn = document.getElementById("storebtn");
    storebtn.onclick = function(){
        window.location = "/page/store.html"
    }
    var aboutUsbtn = document.getElementById("aboutUsbtn");
    aboutUsbtn.onclick = function(){
        window.location = "/page/aboutUs.html"
    }


}



