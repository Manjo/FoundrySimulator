$(document).ready(function(){

var shop = document.getElementById('shop');
var shopitems = createShop();
shop.appendChild(shopitems); 


  $(".mapselect").click(function(event){
		var shopitems = createShop();
		$("#shop").html("");
		$("#shop").append(shopitems);
  } );
  
$(".filter").click(function(event){
		var shopitems = createShop();
		$("#shop").html("");
		$("#shop").append(shopitems);
  } );
  
  });
 
  