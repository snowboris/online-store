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