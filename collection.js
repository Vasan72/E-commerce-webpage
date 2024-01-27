var productContainer = document.getElementById("product");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup",function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (count=0;count<productlist.length;count=count+1) {
    var productName = productlist[count].querySelector("p").textContent;

    if (productName.toUpperCase().indexOf(enteredValue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
});

var sidenav = document.querySelector(".side-navbar")

function showNavbar(){
    sidenav.style.left="0%"

}
function closeNavbar(){
    sidenav.style.left="-60%"
}
