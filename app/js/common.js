;(function(){
	var basket;

	function renderingCardApp(idapp, arrObjectsInfoApp){

		var elemCurrentTovar = document.querySelector(".content");
		
		if(elemCurrentTovar!==null)elemCurrentTovar.remove();

		var templateCard = document.querySelector(".template-card").content;
		var cardHTML = templateCard.cloneNode(true);
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
		
		categoriesContent.appendChild(cardHTML);

		var btnAddTovarBasket = document.querySelector(".button-in-basket");
		btnAddTovarBasket.addEventListener("click",function(){basket.addTovarInBasket();});
	}

	function clickByApplication(element){
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
		var elemWripperTovar = document.querySelector(".wrapper-categories-tovar");
		var template_elemAside = document.querySelector(".template-catalog-applications-aside").content;
		var elemAside = template_elemAside.cloneNode(this);

		var ul_catalog_applications = elemAside.querySelector(".product-applications__menu");

		arr.forEach(function(item,i,arr_catalog_applications){
			{
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

		elemWripperTovar.appendChild(elemAside);
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

	Basket = function(){
		this.number = localStorage.length;
		this.idElem = -1;
		this.amount = 0; //Итоговая сумма в корзине
		var btnAddTovarBasket = document.querySelector(".button-in-basket");

		var linkToBasket = document.querySelector(".nav-menu__icon");
		linkToBasket.innerText = this.number;

		linkToBasket.addEventListener("click",this.onClickBasket.bind(this));
	};

	


	Basket.prototype.addTovarInBasket = function(){
		
		var activeElem = document.querySelector(".product-applications__link_active");
		this.idElem = activeElem.getAttribute("idapp");

		var btnAddInBasket = document.querySelector(".button-in-basket");

		if(localStorage.getItem(this.idElem)==null){
			localStorage.setItem(this.idElem, 1);
			this.number++;
			var basketNumberTovar = document.querySelector(".nav-menu__icon");
			basketNumberTovar.innerText=this.number; 
			btnAddInBasket.innerText="В корзине!!!";
		}else {
			alert("Товар в корзине!!!");
		}
	};

	Basket.prototype.delTovarInBasket = function(element){
		var elemAmount = document.querySelector(".total-amount__sum");

		element.parentNode.parentNode.remove(); //от тега Button добираемся до tr
		localStorage.removeItem(element.getAttribute("idapp"));
		this.number--;
		this.amount-= (element.parentNode.parentNode.querySelector(".basket-table__cell").textContent).substr(1)*1;
		
		var fraction = (this.amount - Math.floor(this.amount)).toFixed(2)*100;
		var fractionString = "";
			if(fraction<10) fractionString = "0"+fraction;
			else fractionString = fraction;

			elemAmount.innerHTML="$"+Math.floor(this.amount)+"<span class='total-amount__cents'>"+fractionString+"</span>";
	};


	Basket.prototype.onClickBasket = function(){
		var thisBasket = this;
		var elemHeader = document.querySelector(".header");
		var elemContent = document.querySelector("div");
		var elemLink = document.querySelector("link[href='./css/style.css']");
		var elemBtnNext;
		var elemItemCircle;
		var templateHeaderCart = document.querySelector(".template-header-cart").content;
		this.amount=0;
		if(elemLink!==null) elemLink.href="./css/cart_style.css"
		elemHeader.remove();
		if(elemContent!==null) elemContent.remove();

		var templateCart1 = document.querySelector(".template__cart1").content;

		var elemDivBasket = templateCart1.cloneNode(true);

		elemBtnNext = elemDivBasket.querySelector(".button-next");
		elemBtnNext.addEventListener("click",this.onClickInCart1Next.bind(this));

		elemItemCircle = elemDivBasket.querySelectorAll(".nav-items__item");
		document.querySelector("body").appendChild(elemDivBasket);

		xhr = new XMLHttpRequest();

		xhr.open("GET","api/app_info.json",true);

		xhr.onload=function(){
			var tovars = JSON.parse(xhr.responseText);
			var elemTable = document.querySelector(".basket-table");

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

				var templateStringTable = document.querySelector(".template-basket-table__string").content;
				var stringTable = templateStringTable.cloneNode(true);
				var tdHeaderTovar = stringTable.querySelector(".basket-table__cell_header-string");
				var value = stringTable.querySelectorAll(".basket-table__cell");
				var elemBtnImgDel = stringTable.querySelector(".button-delete");

				value[0].innerText ="$" +currentTovar.price;
				value[1].innerText ="$" + currentTovar.price;

				thisBasket.amount+=currentTovar.price;

				tdHeaderTovar.innerText=currentTovar.title;

				elemBtnImgDel.setAttribute("idapp",currentTovar.id);
				elemBtnImgDel.addEventListener("click",function(){ thisBasket.delTovarInBasket(this);});
				elemTable.appendChild(stringTable);
			}

			var elemAmount = document.querySelector(".total-amount__sum");
			var fraction = (thisBasket.amount - Math.floor(thisBasket.amount)).toFixed(2)*100;
			var fractionString = "";
			if(fraction<10) fractionString = "0"+fraction;
			else fractionString = fraction;

			elemAmount.innerHTML="$"+Math.floor(thisBasket.amount)+"<span class='total-amount__cents'>"+fractionString+"</span>";
		}

		xhr.send();

	};

	Basket.prototype.onClickInCart1Next = function(){
		var elemWrapperDiv = document.querySelector("div");
		//var elemBody = document.querySelector("body");
		var elemHeader = document.querySelector(".header");
		var elemContent = document.querySelector("section");
		
		var templateHeaderCart = document.querySelector(".template-header-cart").content;
		var elemBtnPay; 

		elemHeader.remove();
		elemHeader = templateHeaderCart.cloneNode(true);
		var elemCircleOne = elemHeader.querySelectorAll(".nav-items__circle");
		var elemNameCircle = elemHeader.querySelectorAll(".nav-items__name");


		elemWrapperDiv.className="wrapper-payment";
		elemCircleOne[0].innerText="";
		elemCircleOne[0].appendChild(elemNameCircle[0]);
		elemCircleOne[0].className = "nav-items__circle nav-items__circle_done";
		elemCircleOne[0].addEventListener("click",this.onClickBasket.bind(this));

		elemCircleOne[1].className = "nav-items__circle nav-items__circle_accessible";
		elemNameCircle[1].className = "nav-items__name nav-items__name_accessible";

		if(elemContent!==null) elemContent.remove();

		var templateCart2 = document.querySelector(".template__cart2").content;
		var elemCart2 = templateCart2.cloneNode(true);
		elemBtnPay = elemCart2.querySelector(".button-pay");
		elemBtnPay.addEventListener("click",this.onClickInCart2Pay.bind(this));
		
		elemBtnBack = elemCart2.querySelector(".button-back");
		elemBtnBack.addEventListener("click",this.onClickBasket.bind(this));

		elemWrapperDiv.appendChild(elemHeader);
		elemWrapperDiv.appendChild(elemCart2);		
	}

	Basket.prototype.onClickInCart2Pay = function(){
		var elemDivLoading = document.createElement("div");
		var elemBody = document.querySelector("body");
		elemDivLoading.className = "basket-loading";
		elemBody.appendChild(elemDivLoading);
		var thisBasket = this;
		setTimeout(function(){
			elemDivLoading.remove();
			var elemContent = document.querySelector("section");
			var elemWripperDiv = document.querySelector("div");

			var elemHeader = document.querySelector(".header");
			elemHeader.remove();
			var templateCart3 = document.querySelector(".template__cart3").content;
			var elemCart3 = templateCart3.cloneNode(true);
			var elemBtnFinish = elemCart3.querySelector(".button-finish");
			var templateHeaderCart = document.querySelector(".template-header-cart").content;
			elemHeader = templateHeaderCart.cloneNode(true);

			var elemCircleArr = elemHeader.querySelectorAll(".nav-items__circle");
			var elemNameCircle = elemHeader.querySelectorAll(".nav-items__name");

			elemCircleArr[0].innerText="";
			elemCircleArr[1].innerText="";
			elemCircleArr[0].appendChild(elemNameCircle[0]);
			elemCircleArr[1].appendChild(elemNameCircle[1]);
			elemCircleArr[0].className = "nav-items__circle nav-items__circle_done";
			elemCircleArr[1].className = "nav-items__circle nav-items__circle_done";
			elemCircleArr[1].addEventListener("click",thisBasket.onClickInCart1Next.bind(thisBasket));

			elemCircleArr[2].className = "nav-items__circle nav-items__circle_accessible";
			elemNameCircle[2].className = "nav-items__name nav-items__name_accessible";

			elemWripperDiv.className = "wrapper-delivery";

			elemContent.remove();

			elemBtnFinish.addEventListener("click",thisBasket.onClickCart3Finish.bind(thisBasket));
			elemWripperDiv.appendChild(elemHeader);
			elemWripperDiv.appendChild(elemCart3);
		},Math.random()*5000);
	}

	Basket.prototype.onClickCart3Finish = function(){
		var elemDivLoading = document.createElement("div");
		var elemBody = document.querySelector("body");
		elemDivLoading.className = "basket-loading";
		elemBody.appendChild(elemDivLoading);
		var thisBasket = this;

		setTimeout(function(){
			elemDivLoading.remove();
			var elemHeader = document.querySelector(".header");
			var elemWripperDiv = elemHeader.parentNode; // document.querySelector(".wrapper-delivery");
			var elemContent = document.querySelector("section");
			var elemHeader = document.querySelector(".header");
			var elemBtnClose;
			elemHeader.remove();
			
			var templateCart3 = document.querySelector(".template-header-cart").content;
			elemHeader = templateCart3.cloneNode(true);

			var elemCircleArr = elemHeader.querySelectorAll(".nav-items__circle");
			var elemNameCircle = elemHeader.querySelectorAll(".nav-items__name");
			
			var templateCart4 = document.querySelector(".template__cart4").content;
			var elemCart4 = templateCart4.cloneNode(true);

			elemBtnClose = elemCart4.querySelector(".button-close");
			elemBtnClose.addEventListener("click",thisBasket.onClickBtnClose.bind(thisBasket));

			//alert(elemWripperDiv);
			elemWripperDiv.className = "wrapper-completed";
			elemContent.remove();

			elemCircleArr[0].innerText = "";
			elemCircleArr[1].innerText = "";
			elemCircleArr[2].innerText = "";
			elemCircleArr[0].appendChild(elemNameCircle[0]);
			elemCircleArr[1].appendChild(elemNameCircle[1]);
			elemCircleArr[2].appendChild(elemNameCircle[2]);
			elemCircleArr[2].addEventListener("click",thisBasket.onClickInCart2Pay.bind(thisBasket));
			elemCircleArr[0].className = "nav-items__circle nav-items__circle_done";
			elemCircleArr[1].className = "nav-items__circle nav-items__circle_done";
			elemCircleArr[2].className = "nav-items__circle nav-items__circle_done";
			elemCircleArr[3].className = "nav-items__circle nav-items__circle_accessible";

			elemNameCircle[2].className = "nav-items__name nav-items__name_accessible";
			elemNameCircle[3].className = "nav-items__name nav-items__name_accessible";

			elemWripperDiv.appendChild(elemHeader);
			elemWripperDiv.appendChild(elemCart4);
		},Math.random()*5000);
	}

	Basket.prototype.onClickBtnClose = function(){
		this.number = 0;
		localStorage.clear();
		var elemPage = document.querySelector(".wrapper-completed");
		elemPage.remove();
		var elemLinkCss = document.querySelector("link[href='./css/cart_style.css']");
		elemLinkCss.href = "./css/style.css";
		var elemBody = document.querySelector("body");
		var template__catalogApp = document.querySelector(".template__catalog-applications").content;
		var catalogApp = template__catalogApp.cloneNode(this);
		var categoriesContent = document.createElement("div");
		var linkToBasket = catalogApp.querySelector(".nav-menu__icon");
		categoriesContent.className = "wrapper-categories-tovar";
		elemBody.appendChild(catalogApp);
		elemBody.appendChild(categoriesContent);

		linkToBasket.addEventListener("click",this.onClickBasket.bind(this));

		var xhr = new XMLHttpRequest();
		xhr.open("GET","api/apps_list.json",true);


		xhr.onload = function(e){
			var arr_catalog_applications = JSON.parse(xhr.responseText);
			show_catalog_applications(arr_catalog_applications);
		}

		xhr.send();

		xhrInfoApp = new XMLHttpRequest();

		xhrInfoApp.open("GET","api/app_info.json",true);
		
		xhrInfoApp.onload = function(e){
			var arrObjAppInfo = JSON.parse(xhrInfoApp.responseText);
			renderingCardApp(0,arrObjAppInfo);
			
		}

		xhrInfoApp.send();
	}

	function loadDataFromJson(url){
		return  new Promise(function(resolve, reject){
			var xhr = new XMLHttpRequest();
			xhr.open("GET",url,true);
			xhr.onload = function(e){
				if(xhr.status===200) {
					resolve(JSON.parse(xhr.responseText));
				} else reject("Error!");
			}
			xhr.send();
		});

	}

	window.onload = function(){

		loadDataFromJson("api/apps_list.json").then(
			function(result){
				show_catalog_applications(result);
			}
		);

		loadDataFromJson("api/app_info.json").then(
			function(result){
				renderingCardApp(0,result);
			}
		);
		
		basket = new Basket();
		
	}
})();