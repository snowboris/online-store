;(function(){
	/*var arr_catalog_applications = [{
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
	*/
	function show_catalog_applications(arr){
		var mapObject = createMapObject();
		//for(var i = 0; i<arr_catalog_applications.length; i++)
		arr.forEach(function(item,i,arr_catalog_applications){
			{
				var ul_catalog_applications = document.querySelector(".product-applications__menu");
				var li_items = document.createElement("li");
				li_items.className = "product-applications__list-item";
				var a_link = document.createElement("a");
				if(i!==3){
					a_link.className = "product-applications__link";//arr_catalog_applications[i].a_link_class;
				}else a_link.className = "product-applications__link product-applications__link_active"
				
				a_link.href = "#";
				a_link.innerHTML= mapObject[item.guid];
				
				li_items.appendChild(a_link);
				ul_catalog_applications.appendChild(li_items);
			}
		});
	}

	function createMapObject(){
		var mapObject={
			"e607e5c1-2d9a-4e10-97b4-d9881cbb8e08": "Стандартный пакет",
			"5d633ad5-b761-42bf-8e60-bf5fd39d867f": "Новый ЦФТ-Банк",
			"6f0ea710-0249-47c0-a2bf-15fdf2bdca84": "Cash Management",
			"89f85119-ab59-430d-a30e-255bdb9cb76f": "Аренда сейфов",
			"47b74a69-2c08-4459-b309-8498b16dc765": "Банковские гарантии",
			"0946d925-dd1b-415e-a514-4505e743a63f": "Казначейство",
			"1e19b6cd-42ef-476d-8647-ff719f4b206b": "Страхование",
			"659b6283-19f6-4086-a39e-df5dfcb62c39": "Факторинговое обслуживание",
			"0aeded24-651a-4e2c-b396-a04393fab569": "Переводы средств",
			"170dd4c7-6452-4f2a-bd34-8f5a63155a27": "Расчетный центр",
			"e9ba3ac2-9157-47b7-9d25-1d718a54e15f": "Пластиковые карты",
			"29b5336c-ea1c-4a00-9ca1-a276d246524e": "Финансовый мониторинг",
			"eebf5df5-b1e7-4e43-b468-3c214fbaf32a": "Депозиты и вклады",
			"4cef0ee4-e08d-42e5-9562-cd05da677e57": "Инвестиции"
		}
		return mapObject;
	}

	window.onload = function(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET","api/apps_list.json",true);

		xhr.onload = function(e){
			var arr_catalog_applications = JSON.parse(xhr.responseText);
			show_catalog_applications(arr_catalog_applications);
		}

		xhr.send();

	}
})();