;(function(){
	var basket;
	function getSlantingMonth(mm){
		switch(mm*1){
			case 1: return "января";
				break;
			case 2: return "февраля";
				break;
			case 03: return "марта";
				break;
			case 4: return "апреля";
				break;
			case 5: return "мая";
				break;
			case 6: return "июня";
				break;
			case 7: return "июля";
				break;
			case 8: return "августа";
				break;
			case 9: return "сентября";
				break;
			case 10: return "октября";
				break;
			case 11: return "ноября";
				break;
			case 12: return "декабря";
				break;
			default: return "error getMonth!!!";
				break;
		}
	}



	function renderingCardApp(idapp, arrObjectsInfoApp){
		//alert("arrObjectsInfoApp");

		var elemCurrentTovar = document.querySelector(".content");
		
		if(elemCurrentTovar!==null)elemCurrentTovar.remove();

		var templateCard = document.querySelector(".template-card").content;
		var cardHTML = templateCard.cloneNode(true);
		//alert(cardHTML);
		var elemHeader = cardHTML.querySelector(".content__header_tovar-margin");
		var elemTime = cardHTML.querySelector(".date-published"); 
		var categoriesContent = document.querySelector(".wrapper-categories-tovar");
		var elemDescriptions = cardHTML.querySelector(".description-text");
		var elemRequirement = cardHTML.querySelector(".requirement");
		var elemImageTovar = cardHTML.querySelector(".image-tovar__image");
		var elemFeatures = cardHTML.querySelector(".list-main-functions");
		var elemPriceTovar = cardHTML.querySelector(".price-tovar");

		elemHeader.innerText = arrObjectsInfoApp[idapp].title;

		var getDate = new Date(arrObjectsInfoApp[idapp].lastUpdate*1000);
		elemTime.innerHTML = getDate.toLocaleFormat("%d ") + getSlantingMonth(getDate.toLocaleFormat("%m"))
		+getDate.toLocaleFormat(" %Y");

		var descriptionDelimiter = arrObjectsInfoApp[idapp].description.replace(/\n/g,"<br/>");
		elemDescriptions.innerHTML = descriptionDelimiter;

		elemRequirement.innerHTML = "<strong>Требования: </strong>" + arrObjectsInfoApp[idapp].requirements;
		elemDescriptions.appendChild(elemRequirement);

		elemImageTovar.src = getImageSrcByGuid(arrObjectsInfoApp[idapp].guid);

		elemPriceTovar.innerText = "$" + arrObjectsInfoApp[idapp].price;

		var elemFeaturesLi;
		arrObjectsInfoApp[idapp].features.forEach(function(item,i,arr){
			elemFeaturesLi = document.createElement("li");
			elemFeaturesLi.className = "list-main-functions_item";
			elemFeaturesLi.innerHTML = item;
			elemFeatures.appendChild(elemFeaturesLi);
		});
		//alert(categoriesContent);
		
		categoriesContent.appendChild(cardHTML);

		var btnAddTovarBasket = document.querySelector(".button-in-basket");
		btnAddTovarBasket.addEventListener("click",function(){basket.addTovarInBasket();});
		
		/*var elemHeader = document.querySelector(".content__header_tovar-margin");
		var elemTime = document.querySelector(".date-published");
		var elemDescriptions = document.querySelector(".description-text");
		var elemImageTovar = document.querySelector(".image-tovar__image");
		var elemFeatures = document.querySelector(".list-main-functions");

		//alert(idapp);
		elemHeader.innerHTML = arrObjectsInfoApp[idapp].title;

		var getDate = new Date(arrObjectsInfoApp[idapp].lastUpdate*1000);
		elemTime.innerHTML = getDate.toLocaleFormat("%d ") + getSlantingMonth(getDate.toLocaleFormat("%m"))
		+getDate.toLocaleFormat(" %Y");

		

		elemDescriptions.innerHTML = descriptionDelimiter;

		var elemRequirement = document.createElement("div");
		elemRequirement.className="requirement";

		elemRequirement.innerHTML="<strong>Требования: </strong>" + arrObjectsInfoApp[idapp].requirements;

		//var elemRequirementText = document.createElement("strong");
		//elemRequirementText.innerHTML="Требования:";

		//elemRequirement.appendChild(elemRequirementText);
		elemDescriptions.appendChild(elemRequirement);

		elemImageTovar.src=getImageSrcByGuid(arrObjectsInfoApp[idapp].guid);

		elemFeatures.innerHTML = "";

		arrObjectsInfoApp[idapp].features.forEach(function(item,i,arr){
			var elemFeaturesLi = document.createElement("li");
			elemFeaturesLi.className = "list-main-functions_item";
			elemFeaturesLi.innerHTML = item;
			elemFeatures.appendChild(elemFeaturesLi);
		});*/
	}

	function clickByApplication(element){
		//alert(e.getAttribute("idapp"));
		//location.assign("new-cft-bank.html?idapp="+e.getAttribute("idapp"));
		//alert("click");
		//renderingCardApp();
	/*if(element.getAttribute("idapp") === {
					a_link.className = "product-applications__link";//arr_catalog_applications[i].a_link_class;
				}else a_link.className = "product-applications__link product-applications__link_active"*/
		
		var lastLinkActive = document.querySelector(".product-applications__link_active");
		if(lastLinkActive!=null)
		lastLinkActive.className="product-applications__link";

		element.className="product-applications__link product-applications__link_active";

				

		xhr = new XMLHttpRequest();

		xhr.open("GET","api/app_info.json",true);
		
		xhr.onload = function(e){
			var arrObjAppInfo = JSON.parse(xhr.responseText);
			renderingCardApp(element.getAttribute("idapp")-1,arrObjAppInfo);
			
		}

		xhr.send();

		

	}

	

	function show_catalog_applications(arr){
		//var mapObject = createMapObject();
		//for(var i = 0; i<arr_catalog_applications.length; i++)
		arr.forEach(function(item,i,arr_catalog_applications){
			{

				var ul_catalog_applications = document.querySelector(".product-applications__menu");
				var li_items = document.createElement("li");
				li_items.className = "product-applications__list-item";
				var a_link = document.createElement("a");
				//var mapUrlParam = getMapUrlParametrs();
				//console.log(i);
				//console.log(parseInt(mapUrlParam["idapp"]));
				//if(i !== (parseInt(mapUrlParam["idapp"])-1)){
				//	a_link.className = "product-applications__link";//arr_catalog_applications[i].a_link_class;
			//	}else a_link.className = "product-applications__link product-applications__link_active"
				if(i===0) a_link.className="product-applications__link product-applications__link_active";
				else a_link.className="product-applications__link";
				a_link.href = "#";
				a_link.innerHTML= item.title;//mapObject[item.guid];
				a_link.setAttribute("idapp",item.id);
				a_link.addEventListener("click",function(){clickByApplication(this);});
				li_items.appendChild(a_link);
				ul_catalog_applications.appendChild(li_items);
			}
		});
	}

	function getImageSrcByGuid(guid){
		var mapObject={
			"e607e5c1-2d9a-4e10-97b4-d9881cbb8e08": "images/shot-1.png",
			"5d633ad5-b761-42bf-8e60-bf5fd39d867f": "images/shot-2.png",
			"6f0ea710-0249-47c0-a2bf-15fdf2bdca84": "images/shot-3.png",
			"89f85119-ab59-430d-a30e-255bdb9cb76f": "images/shot-1.png",
			"47b74a69-2c08-4459-b309-8498b16dc765": "images/shot-2.png",
			"0946d925-dd1b-415e-a514-4505e743a63f": "images/shot-3.png",
			"1e19b6cd-42ef-476d-8647-ff719f4b206b": "images/shot-1.png",
			"659b6283-19f6-4086-a39e-df5dfcb62c39": "images/shot-2.png",
			"0aeded24-651a-4e2c-b396-a04393fab569": "images/shot-3.png",
			"170dd4c7-6452-4f2a-bd34-8f5a63155a27": "images/shot-1.png",
			"e9ba3ac2-9157-47b7-9d25-1d718a54e15f": "images/shot-2.png",
			"29b5336c-ea1c-4a00-9ca1-a276d246524e": "images/shot-3.png",
			"eebf5df5-b1e7-4e43-b468-3c214fbaf32a": "images/shot-1.png",
			"4cef0ee4-e08d-42e5-9562-cd05da677e57": "images/shot-2.png"
		}
		return mapObject[guid];
	}


/*	function getMapUrlParametrs(){
		var arrUrlSearch = location.search.substr(1).split("&");
		var mapUrlParam = {};

		arrUrlSearch.forEach(function(item,i,arr){
			var arrTemp = item.split("=");
			mapUrlParam[arrTemp[0]] = arrTemp[1];
			
		});
		return mapUrlParam;
	}*/
	Basket = function(){
		this.number = 0;
		this.idElem = -1;
		var btnAddTovarBasket = document.querySelector(".button-in-basket");

		var linkToBasket = document.querySelector(".nav-menu__icon");
		//this.addTovarInBasket();
		//self=this;
		btnAddTovarBasket.addEventListener("click",this.addTovarInBasket.bind(this));
		linkToBasket.addEventListener("click",this.onClickBasket.bind(this));
		localStorage.clear();
	};
		/*function addTovarInBasket(e){
		alert("tt!");
	}*/


	Basket.prototype.addTovarInBasket = function(){
		
		var activeElem = document.querySelector(".product-applications__link_active");
		this.idElem = activeElem.getAttribute("idapp");

		var btnAddInBasket = document.querySelector(".button-in-basket");

		//var numCurrentTovar = localStorage.getItem(this.idElem);

	
		//alert(localStorage.getItem(this.idElem));
		//alert(localStorage.length);
		if(localStorage.getItem(this.idElem)==null){
			//alert("asdf");
			localStorage.setItem(this.idElem, 1);
			this.number++;
			var basketNumberTovar = document.querySelector(".nav-menu__icon");
			basketNumberTovar.innerText=this.number; 
			btnAddInBasket.innerText="В корзине!!!";
		}else {
			alert("Товар в корзине!!!");
		}

		

		//btnAddInBasket.innerText = "В корзину ("+numCurrentTovar+")"; 
		

	};

	Basket.prototype.onClickBasket = function(){
		var elemHeader = document.querySelector(".header");
		var elemContent = document.querySelector(".wrapper-categories-tovar");
		var elemLink = document.querySelector("link[href='./css/style.css']");
		elemLink.href="./css/cart_style.css"
		//alert(elemLink.href);
		elemHeader.remove();
		elemContent.remove();

		var templateCart1 = document.querySelector(".template__cart1").content;

		var elemDivBasket = templateCart1.cloneNode(true);
	//	alert(elemDivBasket);
		document.querySelector("body").appendChild(elemDivBasket);


		xhr = new XMLHttpRequest();

		xhr.open("GET","api/app_info.json",true);

		xhr.onload=function(){
			var tovars = JSON.parse(xhr.responseText);
			var elemTable = document.querySelector(".basket-table");
			var amount = 0;
			//alert(templateCart1);
			
			//elemTable.appendChild(rez);
			//if(localStorage.length!==0){
			//for(var i = 0; i<localStorage.length; i++){
			if(localStorage.length!=0)
			for(var key in localStorage){
				//alert(key);
				if(isNaN(parseInt(key))) continue;
				var currentTovar;
				for(var i = 0; i<tovars.length; i++){ //находим товар с нужным id
					if (tovars[i].id===parseInt(key)) {
						currentTovar = tovars[i];
						break;
					}
				}
				//if(3 instanceof Number)
				//alert(3 instanceof Number);

				var templateStringTable = document.querySelector(".template-basket-table__string").content;
				var stringTable = templateStringTable.cloneNode(true);
				var tdHeaderTovar = stringTable.querySelector(".basket-table__cell_header-string");
				var value = stringTable.querySelectorAll(".basket-table__cell");
					alert( currentTovar.price);

				value[0].innerText ="$" +currentTovar.price;
				value[1].innerText ="$" + currentTovar.price;
				amount+=currentTovar.price;
				tdHeaderTovar.innerText=currentTovar.title;
				//alert(stringTable);
				elemTable.appendChild(stringTable);
			}

			var elemAmount = document.querySelector(".total-amount__sum");
			elemAmount.innerText="$"+amount;
			var fraction = amount.toFixed(2) - amount;
			alert(fraction);
			//}

			/*	var string = document.querySelector(".basket-table__string_header");
				//alert(string);
				var getString = string.cloneNode(true);
				alert(getString);*/
			//}
		}

		xhr.send();

	};

	window.onload = function(){
		//var temp='s34ds';

		//alert(isNaN(parseInt(temp)));

		var xhr = new XMLHttpRequest();
		xhr.open("GET","api/apps_list.json",true);


		xhr.onload = function(e){
			var arr_catalog_applications = JSON.parse(xhr.responseText);
			show_catalog_applications(arr_catalog_applications);
		}

		xhr.send();

		/*alert(location.search);
		//location.search*/
		xhrInfoApp = new XMLHttpRequest();

		xhrInfoApp.open("GET","api/app_info.json",true);
		
		xhrInfoApp.onload = function(e){
			var arrObjAppInfo = JSON.parse(xhrInfoApp.responseText);
			renderingCardApp(0,arrObjAppInfo);
			
		}

		xhrInfoApp.send();
		
		basket = new Basket();
		
	}
})();