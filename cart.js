 var removeitems = document.getElementsByClassName('btn-danger')

 for (item of removeitems) {

     item.addEventListener('click', function(event) {
         var buttonclicked = event.target;
         buttonclicked.parentElement.children[0].value = 0;
         buttonclicked.parentElement.parentElement.remove();
         update_price();
     });
 }


 var quantity1 = document.getElementById('quant1')
 icone_plus1 = document.getElementById("plus1")
 icone_plus1.addEventListener(
     "click",
     function(e) {
         quantity1.value = parseInt(quantity1.value) + 1

         update_price()
     }
 )


 icone_moins1 = document.getElementById("moins1")
 icone_moins1.addEventListener(
     "click",
     function(e) {
         if (parseInt(quantity1.value) > 0) {
             quantity1.value = parseInt(quantity1.value) - 1
         } else { quantity1.value = 0 }

         update_price()

     }
 )

 var quantity2 = document.getElementById('quant2')
 icone_plus2 = document.getElementById("plus2")
 icone_plus2.addEventListener(
     "click",
     function(e) {
         quantity2.value = parseInt(quantity2.value) + 1
         update_price()
     }
 )


 icone_moins2 = document.getElementById("moins2")
 icone_moins2.addEventListener(
     "click",
     function(e) {
         if (parseInt(quantity2.value) > 0) {
             quantity2.value = parseInt(quantity2.value) - 1
         } else { quantity2.value = 0 }
         update_price()

     }
 )

 var heart1 = document.getElementById('heart1')
 heart1.addEventListener(
     "click",
     function() {
         if (heart1.src.split("/").pop() === "heart.png") {
             heart1.src = "heartrouge.png"

         } else {
             heart1.src = "heart.png"
         }
     }
 )
 var heart2 = document.getElementById('heart2')
 heart2.addEventListener(
     "click",
     function() {
         if (heart2.src.split("/").pop() === "heart.png") {
             heart2.src = "heartrouge.png"

         } else {
             heart2.src = "heart.png"
         }
     }
 )
 prix1 = parseFloat(document.getElementById("prix1").innerText)
 prix2 = parseFloat(document.getElementById("prix2").innerText)
 var update_price = function() {
     document.getElementById("PriceTotal").innerText = prix1 * parseInt(quantity1.value) + prix2 * parseInt(quantity2.value) + " dt"
 }