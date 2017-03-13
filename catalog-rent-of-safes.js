var arr_catalog_applications = [{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Стандартный пакет"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "new-cft-bank.html",
	a_link_text: "Новый ЦФТ-Банк"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Cash Management"
},
{
	a_link_class : "product-applications__link product-applications__link_active",
	a_link_href: "catalog-rent-of-safes.html",
	a_link_text: "Аренда сейфов"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Банковские гарантии"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Казначейство"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Страхование"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Факторинговое обслуживание"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Переводы средств"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Расчетный центр"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Пластиковые карты"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Финансовый мониторинг"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Депозиты и вклады"
},
{
	a_link_class : "product-applications__link",
	a_link_href: "#",
	a_link_text: "Инвестиции"
}
];

function show_catalog_applications(){
	for(var i = 0; i<arr_catalog_applications.length; i++)
	{
		var ul_catalog_applications = document.querySelector(".product-applications__menu");
		var li_items = document.createElement("li");
		li_items.className = "product-applications__list-item";
		var a_link = document.createElement("a");
		a_link.className = arr_catalog_applications[i].a_link_class;
		a_link.href = arr_catalog_applications[i].a_link_href;
		a_link.innerHTML= arr_catalog_applications[i].a_link_text;
		
		li_items.appendChild(a_link);
		ul_catalog_applications.appendChild(li_items);
	}
}


show_catalog_applications();