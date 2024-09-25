var productcontainer = document.getElementById("product");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function () {
  var enteredValue = event.target.value.toUpperCase()

  for(count = 0; count < productlist.length; count = count + 1) {
    var productname = productlist[count].querySelector("p").textContent;

    if (productname.toUpperCase().indexOf(enteredValue)<0) 
    {
      productlist[count].style.display = "none";
    } 
    else {
      productlist[count].style.display = "block";
    }
  }
});


// navbar

var sidenavv=document.querySelector(".side-nav")

 

function shownavbar(){
    sidenavv.style.left="0"

}
function closenavbar(){
    sidenavv.style.left="-60%"
}
