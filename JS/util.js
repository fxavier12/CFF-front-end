function getNameMonth(){
	//get courrent mounth
	var data = new Date();
	var mes = data.getMonth();

	switch(mes){
		case 0:
			return "janeiro";
			break;
		case 1:
			return "fevereiro";
			break;
		case 2:
			return "marco";
			break;
		case 3 :
			return "abril";
			break;
		case 4 :
			return "maio";
			break;
		case 5 :
			return "junho";
			break;
		case 6 :
			return "julho";
			break;
		case 7 :
			return "agosto";
			break;
		case 8 :
			return "setembro";
			break;
		case 9:
			return "outubro";
			break;
		case 10:
			return "novembro";
			break;
		case 11:
			return "dezembro";
			break;
		
		
	}
};

function logOut(){
	document.cookie = "logado=false";
	window.location.reload();
}
//funcao para retorna o valor de um cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}