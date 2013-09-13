$(document).ready(function(){
//var testzone = document.getElementById('testzone');
var shop = document.getElementById('shop');
var shopitems = createShop();
shop.appendChild(shopitems); 
//  $(".shopitem").click(function(event){
//		var newitem = createItem(event.target.id);
//		 for (var i = 0; i < newitem.length; i++){
//				newitem[i].image.setAttribute('id', newitem[i].name + newitem[i].level);
//			}
//		var newtable = createTable(newitem)
//		$("#full").html("");
//		$("#condensed").html("");
//		$("#condensed").append(newtable);
//  } );

  $(".mapselect").click(function(event){
	//	var id = event.target.id;
	//	if (id == "gotham_heights"){}
		var shopitems = createShop();
		$("#shop").html("");
		$("#shop").append(shopitems);
  } );
  
$(".filter").click(function(event){
	//	var id = event.target.id;
	//	if (id == "gotham_heights"){}
		var shopitems = createShop();
		$("#shop").html("");
		$("#shop").append(shopitems);
  } );
  
  });
 
  