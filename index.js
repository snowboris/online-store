var arrTovar=[{
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

var randomShowElement = function(arr){
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
}

function createHTML(rezult){
	var myUl=document.querySelector(".application-package");

		var myLi=document.createElement("li");
		myLi.className = rezult.li_class;

		var link=document.createElement("a");
		link.href=rezult.link_href;

		myLi.appendChild(link);

		var myIMG=document.createElement("img");
		myIMG.className=rezult.img_class;
		myIMG.src=rezult.img_src;
		myIMG.alt=rezult.img_alt;

		var myHEADER=document.createElement("header");
		myHEADER.className=rezult.header_class;
		myHEADER.innerHTML=rezult.header_text;

		var myTime=document.createElement("time");
		myTime.className=rezult.time_class;
		myTime.datetime=rezult.time_datetime;
		myTime.innerHTML=rezult.time_text;

		link.appendChild(myIMG);
		link.appendChild(myHEADER);
		link.appendChild(myTime);

		myUl.appendChild(myLi);
}

//showRandomElements(arrTovar.slice());
/*window.setInterval(function(){showRandomElements(arrTovar.slice());},4000);*/

var slider={
	frame: arrTovar.length-1, //относительно последнего индекса массива работаем
	myUl: 0,
	arrCircle : 0,
	myListRowPackage: document.querySelector(".application-package-row"),
	init: function(){
		this.myUl=document.querySelector(".application-package");
		this.arrCircle = document.querySelectorAll(".application-package-row__item");
		
		this.arrCircle.forEach(function(item,i,arr){
			arr[i].addEventListener("click",function(e){slider.slider_items();});
		});
		this.arrCircle[0].className="application-package-row__item application-package-row__item-active";
		this.showElements(arrTovar.length-1);
	},
	right: function(){
		this.myUl.innerHTML = "";	
		var index=0;

		if((this.frame+1)===arrTovar.length){
			this.frame = 0;
		}
		else {
			this.frame++;
		}

		for(index=this.frame, i=0; i<3;i++, index++){
			if(index===arrTovar.length){
				index=0;
			}
			createHTML(arrTovar[index]);
		}
	
		console.log(this.frame);
		
		var allCircle =document.querySelectorAll(".application-package-row__item");
		var elem_active = document.querySelector(".application-package-row__item-active");
		elem_active.className = "application-package-row__item";
		if((this.frame+1)!==arrTovar.length)
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
			this.frame = arrTovar.length-1;
		}
		else {
			this.frame--;
		}
		
		for(index=this.frame, i=0; i<3;i++, index++){
			if(index==arrTovar.length){
				index=0;
			}
			createHTML(arrTovar[index]);
			console.log(index);
		}
	},
	showElements: function (index_start){
		
		if(index_start===undefined){
			index_start=0;
		}
		var myUl = document.querySelector(".application-package");

		for(var i = index_start,j=0; j<3; i++,j++){
			
			if(i===(arrTovar.length)) i=0;
			if(i<0) i=arrTovar.length-1;
			createHTML(arrTovar[i]);
		}
	},
	slider_items: function(e){
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

slider.init();

var button_next = document.querySelector(".application-package_button-next");
var button_back = document.querySelector(".application-package_button-back");

button_next.addEventListener("click",function(){slider.right();});
button_back.addEventListener("click",function(){slider.left();});