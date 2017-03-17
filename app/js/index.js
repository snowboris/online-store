;(function() {
	/*var arrTovar=[{
		li_class:"application-package__package",
		link_href : "#",
		img_class: "application-package__image",
		img_src: "images/shot-1.png",
		img_alt: "standart package",
		header_class: "application-package__header",
		header_text: "СТАНДАРТНЫЙ ПАКЕТ",
		time_class: "application-package__date",
		time_datetime: "2012-04-08",
		time_text: "08 апреля 2012"
	},
	{
		li_class:"application-package__package",
		link_href : "new-cft-bank.html",
		img_class: "application-package__image",
		img_src: "images/shot-2.png",
		img_alt: "phone",
		header_class: "application-package__header",
		header_text: "НОВЫЙ ЦФТ-БАНК",
		time_class: "application-package__date",
		time_datetime: "2016-09-09",
		time_text: "09 сентября 2016"
	},
	{
		li_class:"application-package__package",
		link_href : "#",
		img_class: "application-package__image",
		img_src: "images/shot-3.png",
		img_alt: "phone2",
		header_class: "application-package__header",
		header_text: "КАТАЛОГ РАЗРАБОТОК",
		time_class: "application-package__date",
		time_datetime: "2015-03-03",
		time_text: "03 марта 2015"
	},
	{
		li_class:"application-package__package",
		link_href : "#",
		img_class: "application-package__image",
		img_src: "images/shot-1.png",
		img_alt: "standart package",
		header_class: "application-package__header",
		header_text: "СТАНДАРТНЫЙ ПАКЕТ",
		time_class: "application-package__date",
		time_datetime: "2012-04-08",
		time_text: "08 апреля 2012"
	},
	{
		li_class:"application-package__package",
		link_href : "new-cft-bank.html",
		img_class: "application-package__image",
		img_src: "images/shot-2.png",
		img_alt: "phone",
		header_class: "application-package__header",
		header_text: "НОВЫЙ ЦФТ-БАНК",
		time_class: "application-package__date",
		time_datetime: "2016-09-09",
		time_text: "09 сентября 2016"
	},
	{
		li_class:"application-package__package",
		link_href : "#",
		img_class: "application-package__image",
		img_src: "images/shot-3.png",
		img_alt: "phone2",
		header_class: "application-package__header",
		header_text: "КАТАЛОГ РАЗРАБОТОК",
		time_class: "application-package__date",
		time_datetime: "2015-03-03",
		time_text: "03 марта 2015"
	},
	{
		li_class:"application-package__package",
		link_href : "#",
		img_class: "application-package__image",
		img_src: "images/shot-1.png",
		img_alt: "standart package",
		header_class: "application-package__header",
		header_text: "СТАНДАРТНЫЙ ПАКЕТ",
		time_class: "application-package__date",
		time_datetime: "2012-04-08",
		time_text: "08 апреля 2012"
	}
	];
*/
/*	var randomShowElement = function(arr){
		var randomIndex = Math.trunc(Math.random()*arr.length);
		return randomIndex;
	}

	function showRandomElements(arrTovars){
		var myUl=document.querySelector(".application-package");
		myUl.innerHTML="";

		for(i=0; arrTovars.length>0; i++)
		{
			if(i==3) break;
			var randomIndex = randomShowElement(arrTovars);
			var rezult = arrTovars[randomIndex];
			createHTML(rezult);
			arrTovars.splice(randomIndex,1);
		}
	}*/

	function createHTML(rezult,mapObject){
		var myUl=document.querySelector(".application-package");

			var myLi=document.createElement("li");
			myLi.className = "application-package__package";//rezult.li_class;

			var link=document.createElement("a");
			link.href="#";//rezult.link_href;

			

			var myIMG=document.createElement("img");
			myIMG.className="application-package__image";//rezult.img_class;
			myIMG.src=mapObject[rezult.guid];//"images/shot-1.png";//rezult.img_src;
			//myIMG.alt=rezult.img_alt;

			var myHEADER=document.createElement("header");
			myHEADER.className="application-package__header";//rezult.header_class;
			myHEADER.innerHTML=rezult.title;//"rezult.header_text";

			var myTime=document.createElement("time");
			myTime.className="application-package__date";//rezult.time_class;
			var myDate = new Date(rezult.lastUpdate);
			myTime.setAttribute("datetime", myDate.toLocaleFormat("%Y-%m-%d"));//"2016-09-09";//rezult.time_datetime;
			myTime.innerHTML=myDate.toLocaleFormat("%d ")+getSlantingMonth(myDate.toLocaleFormat("%m"))
			+myDate.toLocaleFormat(" %Y"); //%B %Y");//"2016-09-09";//rezult.time_text;

			link.appendChild(myIMG);
			link.appendChild(myHEADER);
			link.appendChild(myTime);
			myLi.appendChild(link);
			myUl.appendChild(myLi);
	}

	//showRandomElements(arrTovar.slice());
	/*window.setInterval(function(){showRandomElements(arrTovar.slice());},4000);*/

	var slider={
		frame: 0, //относительно последнего индекса массива работаем
		arrPackageAppications: 0,
		myUl: 0,
		arrCircle : document.querySelectorAll(".application-package-row__item"),
		myListRowPackage: document.querySelector(".application-package-row"),
		mapObject: 0,
		init: function(arr, mapObject){
			this.arrPackageAppications = arr;
			this.mapObject = mapObject;
			this.frame = this.arrPackageAppications.length-1;
			this.mapObject = this.createMapObjectGuidLink();
			this.myUl=document.querySelector(".application-package");
			/*this.arrCircle.forEach(function(item,i,arr){
				arr[i].addEventListener("click",function(e){slider.slider_items();});
			});*/
			for(var i = 0; i < this.arrCircle.length; i++) {
				this.arrCircle.item(i).addEventListener("click",function(e){slider.slider_items(e);});
			}
			this.arrCircle[0].className="application-package-row__item application-package-row__item-active";
			this.showElements(this.arrPackageAppications.length-1);

		},
		createMapObjectGuidLink: function(){
				var obj = {
					"e607e5c1-2d9a-4e10-97b4-d9881cbb8e08": "images/shot-2.png",
					"5d633ad5-b761-42bf-8e60-bf5fd39d867f": "images/shot-1.png",
					"0665c0cb-7e24-4797-8a83-dd4a16209cd7": "images/shot-3.png",
					"c50961fb-8573-41b3-98c0-2e6aad0c2f05": "images/shot-2.png",
					"9148e69b-093f-4b92-a409-dec18ca24bbc": "images/shot-1.png",
					"20070a51-a807-4e6c-b227-e764167756d3": "images/shot-3.png",
					"83bcde68-9764-468c-ad60-d899aae5d59c": "images/shot-2.png"
				};
				return obj;
		},
		right: function(){
			this.myUl.innerHTML = "";	
			var index=0;

			if((this.frame+1)===this.arrPackageAppications.length){
				this.frame = 0;
			}
			else {
				this.frame++;
			}

			for(index=this.frame, i=0; i<3;i++, index++){
				if(index===this.arrPackageAppications.length){
					index=0;
				}
				createHTML(this.arrPackageAppications[index], this.mapObject);
			}
		
			console.log(this.frame);
			
			var allCircle =document.querySelectorAll(".application-package-row__item");
			var elem_active = document.querySelector(".application-package-row__item-active");
			elem_active.className = "application-package-row__item";
			if((this.frame+1)!==this.arrPackageAppications.length)
				allCircle[this.frame+1].className="application-package-row__item application-package-row__item-active";
			else allCircle[0].className="application-package-row__item application-package-row__item-active";
		},
		left: function(){
			this.myUl.innerHTML = "";
			var index=0;
			var allCircle =document.querySelectorAll(".application-package-row__item");
			var elem_active = document.querySelector(".application-package-row__item-active");
			
			elem_active.className = "application-package-row__item";
			allCircle[this.frame].className="application-package-row__item application-package-row__item-active";

			if(this.frame===0){
				this.frame = this.arrPackageAppications.length-1;
			}
			else {
				this.frame--;
			}
			
			for(index=this.frame, i=0; i<3;i++, index++){
				if(index==this.arrPackageAppications.length){
					index=0;
				}
				createHTML(this.arrPackageAppications[index], this.mapObject);
				console.log(index);
			}
		},
		showElements: function (index_start){
			
			if(index_start===undefined){
				index_start=0;
			}
			var myUl = document.querySelector(".application-package");

			for(var i = index_start,j=0; j<3; i++,j++){
				
				if(i===(this.arrPackageAppications.length)) i=0;
				if(i<0) i=this.arrPackageAppications.length-1;
				createHTML(this.arrPackageAppications[i],this.mapObject);
			}
		},
		slider_items: function(event){
			for(var i=0; i< this.arrCircle.length;i++){
				if(this.arrCircle[i]===event.target) break;
			}
			var elem_active=document.querySelector(".application-package-row__item-active");
			elem_active.className="application-package-row__item";
			this.arrCircle[i].className="application-package-row__item application-package-row__item-active";
			this.myUl.innerHTML="";
			this.showElements(i-1); 
		},
	}

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

	window.onload = function()
	{
		var xhr = new XMLHttpRequest();
		xhr.open("GET","api/app_package.json",true);
		
		xhr.onload = function(e){
			var response = xhr.responseText;
			var obj = JSON.parse(response);

			slider.init(obj);
		}

		xhr.send();
	
		var button_next = document.querySelector(".application-package_button-next");
		var button_back = document.querySelector(".application-package_button-back");
		button_next.addEventListener("click",function(){slider.right();});
		button_back.addEventListener("click",function(){slider.left();});
	}
})();