 // ========== tabcontent hidden/showen =============
function openTab(tabName) {
 	// return to start of tabcontent
   window.location='#banner-content'; 
    
   var i, tabcontent;
   // heigth of navigation bar
   var height; 

   tabcontent = document.getElementsByClassName("tabcontent");
   // height = document.getElementById("wrap-for-ul").style.height;

   // hidden all tabs
   for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
   }
   // show choosen tab
   document.getElementById(tabName).style.display = "block";
   // move to left after click on navigation
   document.getElementById("ul").style.left = "-100%"; 

   // control nav bar height(adaptive option after every click on tab buttons. blue background)
   var height = document.getElementById("wrap-for-ul").style.height;
   if ( height === "800px") {
   	document.getElementById("wrap-for-ul").style.height = "0px";
   }
}

// open default tab
openTab("news");

// ========== menu burger click ====================

var click=document.getElementById("burger");
		click.addEventListener("click", function () {
			if (document.getElementById("ul").style.left == "-100%") {
				document.getElementById("ul").style.left = "0%";
				document.getElementById("wrap-for-ul").style.height = "800px";
			} else {
				document.getElementById("ul").style.left = "-100%";	
				document.getElementById("wrap-for-ul").style.height = "0px";
			}	
		});

// ============= hide/show images in catalog after click ===============

function catalogDetails(val) {
	if (document.getElementById(`img${val}`).style.visibility === "hidden") {
		document.getElementById(`img${val}`).style.visibility = "visible";
		document.getElementById(`category-text${val}`).style.visibility = "hidden";	
		document.getElementById(`catalogButton${val}`).innerHTML = "подробнее";
	} else {
		document.getElementById(`img${val}`).style.visibility = "hidden";
		document.getElementById(`category-text${val}`).style.visibility = "visible";
		document.getElementById(`category-text${val}`).style.width = "208px";
		document.getElementById(`category-text${val}`).style.opacity = "1";
		document.getElementById(`catalogButton${val}`).innerHTML = "скрыть";
	}
}

