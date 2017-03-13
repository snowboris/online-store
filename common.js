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
}];

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
	var myUl=document.querySelector(".application-package");//"asdfs";//innerHTML("<li class='application-package__package'>asdf</li>");

	var myLi=document.createElement("li");
	myLi.className = rezult.li_class;//arrTovar[i].li_class;//"application-package__package";

	var link=document.createElement("a");
	link.href=rezult.href;
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



showRandomElements(arrTovar.slice());

window.setInterval(function(){showRandomElements(arrTovar.slice());},2000);
