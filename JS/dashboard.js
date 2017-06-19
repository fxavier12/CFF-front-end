//funcoes do menu 
window.onload = function() {
  var logado = getCookie("logado");
  if(logado != "true"){
  	//se o usuario nao estiver logado redireciona para pagina principal
  	window.location = "/";
  }


  $( "#mes" ).text(getNameMonth());
  $( "#username" ).text(getCookie("username"));
  $( "#username-perfil" ).text(getCookie("username"));
  $( "#contas-saudacao" ).text("Ola "+getCookie("username"));
  $( "#email-perfil" ).text(getCookie("email"));
  $( "#home" ).css( "display", "block" );



  
};

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

function setCookie(){
  document.cookie = "username=uai";
};
function abrirCadastroReceita(){
	$( "#cad-receita-sucess" ).css( "display", "none");
	$( "#cad-despesa-sucess" ).css( "display", "none");
	$( "#metas" ).css( "display", "none");
	$( "#relatorios" ).css( "display", "none");
	$( "#contas" ).css( "display", "none");
	$( "#perfil" ).css( "display", "none");
    $( "#cad-despesa" ).css( "display", "none" ); 
    $( "#home" ).css( "display", "none");
        $( "#cad-receita" ).css( "display", "block" ); 

};
function abrirCadastroDespesa(){
	$( "#cad-receita-sucess" ).css( "display", "none");
	$( "#cad-despesa-sucess" ).css( "display", "none");
	$( "#metas" ).css( "display", "none");
	$( "#relatorios" ).css( "display", "none");
	$( "#contas" ).css( "display", "none");
	$( "#perfil" ).css( "display", "none");
    $( "#cad-receita" ).css( "display", "none" ); 
    $( "#home" ).css( "display", "none");
    $( "#cad-despesa" ).css( "display", "block" ); 

};

function abrirHome(){
	$( "#cad-receita-sucess" ).css( "display", "none");
	$( "#cad-despesa-sucess" ).css( "display", "none");
	$( "#metas" ).css( "display", "none");
	$( "#relatorios" ).css( "display", "none");
	$( "#contas" ).css( "display", "none");
	$( "#perfil" ).css( "display", "none");
	$( "#cad-receita" ).css( "display", "none" ); 
    $( "#cad-despesa" ).css( "display", "none" ); 
    $( "#home" ).css( "display", "block");
};

function abrirPerfil(){
	$( "#cad-receita-sucess" ).css( "display", "none");
	$( "#cad-despesa-sucess" ).css( "display", "none");
	$( "#metas" ).css( "display", "none");
	$( "#relatorios" ).css( "display", "none");
	$( "#contas" ).css( "display", "none");
	$( "#cad-receita" ).css( "display", "none" ); 
    $( "#cad-despesa" ).css( "display", "none" ); 
    $( "#home" ).css( "display", "none");
	$( "#perfil" ).css( "display", "block");

};

function abrirContas(){
	$( "#cad-receita-sucess" ).css( "display", "none");
	$( "#cad-despesa-sucess" ).css( "display", "none");
	$( "#metas" ).css( "display", "none");
	$( "#relatorios" ).css( "display", "none");
	$( "#cad-receita" ).css( "display", "none" ); 
    $( "#cad-despesa" ).css( "display", "none" ); 
    $( "#home" ).css( "display", "none");
	$( "#perfil" ).css( "display", "none");
	$( "#contas" ).css( "display", "block");


	loadDespesas();
	loadReceitas();



};

function abrirRelatorios(){
	$( "#cad-receita-sucess" ).css( "display", "none");
	$( "#cad-despesa-sucess" ).css( "display", "none");
	$( "#metas" ).css( "display", "none");
	$( "#cad-receita" ).css( "display", "none" ); 
    $( "#cad-despesa" ).css( "display", "none" ); 
    $( "#home" ).css( "display", "none");
	$( "#perfil" ).css( "display", "none");
	$( "#contas" ).css( "display", "none");
	$( "#relatorios" ).css( "display", "block");

};

function abrirMetas(){
	$( "#cad-receita-sucess" ).css( "display", "none");
	$( "#cad-despesa-sucess" ).css( "display", "none");
	$( "#cad-receita" ).css( "display", "none" ); 
    $( "#cad-despesa" ).css( "display", "none" ); 
    $( "#home" ).css( "display", "none");
	$( "#perfil" ).css( "display", "none");
	$( "#contas" ).css( "display", "none");
	$( "#relatorios" ).css( "display", "none");
	$( "#metas" ).css( "display", "block");
		
};
function abrirReceitaCadastrada(){
	$( "#cad-despesa-sucess" ).css( "display", "none");
	$( "#cad-receita" ).css( "display", "none" ); 
    $( "#cad-despesa" ).css( "display", "none" ); 
    $( "#home" ).css( "display", "none");
	$( "#perfil" ).css( "display", "none");
	$( "#contas" ).css( "display", "none");
	$( "#relatorios" ).css( "display", "none");
	$( "#metas" ).css( "display", "none");
	$( "#cad-receita-sucess" ).css( "display", "block");

};
function abrirDespesaCadastrada(){
	$( "#cad-receita-sucess" ).css( "display", "none");
	$( "#cad-receita" ).css( "display", "none" ); 
    $( "#cad-despesa" ).css( "display", "none" ); 
    $( "#home" ).css( "display", "none");
	$( "#perfil" ).css( "display", "none");
	$( "#contas" ).css( "display", "none");
	$( "#relatorios" ).css( "display", "none");
	$( "#metas" ).css( "display", "none");
	$( "#cad-despesa-sucess" ).css( "display", "block");

};

//funcoes da aplicacao
function cadastrarReceita(){
	var params= {};
	params.id = getCookie("id");
	params.descricao = $( "#receita-descricao" ).val();
	params.valor = $( "#receita-valor" ).val();
	params.data = $( "#receita-data" ).val();
	params.categoria = $( "#receita-categoria" ).val();

	//requisicao POST
	$.post( "https://cffbackend.herokuapp.com/conta", { dono: params.id, descricao: params.descricao , valor: params.valor,
		data: params.data,tipo:"receita" })
  		.done(function( data ) {
   		      console.log("cadastrado "+data);
   		      abrirReceitaCadastrada();
	  	}).fail(function(data) {
  
		    console.log("erro ao cadastrar "+data.responseJSON.mensagem);
  
			
	});

};

function cadastrarDespesa(){
	var params= {};
	params.id = getCookie("id");
	params.descricao = $( "#despesa-descricao" ).val();
	params.valor = $( "#despesa-valor" ).val();
	params.data = $( "#despesa-data" ).val();
	params.categoria = $( "#despesa-categoria" ).val();

	//requisicao POST
	$.post( "https://cffbackend.herokuapp.com/conta", { dono: params.id, descricao: params.descricao , valor: params.valor,
		data: params.data,tipo:"despesa" })
  		.done(function( data ) {
   		      console.log("cadastrado "+data);
   		      abrirDespesaCadastrada();
	  	}).fail(function(data) {
  
		    console.log("erro ao cadastrar "+data.responseJSON.mensagem);
  
			
	});

};

function loadDespesas(){

	var params= {};
	params.id = getCookie("id");
	params.mes = 6;
	//requisicao POST
	$.post( "https://cffbackend.herokuapp.com/getdespesas", { usuario: params.id,mes: params.mes })
  		.done(function( data ) {
   		      $('#table_despesas > tbody').empty();
   		      var total = 0;
   		      for(var i = 0 ; i < data.length ;i++){
   		      	total += data[i].valor;
   		      	$('#table_despesas > tbody').append("<tr><td>"+data[i].descricao+"</td><td>"+data[i].data+" </td><td>"+data[i].valor+" </td></tr>");
        	   }

        	   $( "#total_despesas" ).text(total);
			  calcularSaldo();

	  	}).fail(function(data) {
  
		    console.log("ERRO"+data.responseJSON.mensagem);
  
			
	});
};

function loadReceitas(){
	var params= {};
	params.id = getCookie("id");
	params.mes = 6;
	//requisicao POST
	$.post( "https://cffbackend.herokuapp.com/getreceitas", { usuario: params.id,mes: params.mes })
  		.done(function( data ) {
   		       var total = 0;
   		      $('#table_receitas > tbody').empty();
   		      for(var i = 0 ; i < data.length ;i++){
	      			total += data[i].valor;   
	   		      	$('#table_receitas > tbody').append("<tr><td>"+data[i].descricao+"</td><td>"+data[i].data+" </td><td>"+data[i].valor+" </td></tr>");
        	 }
        	  $( "#total_receitas" ).text(total);
   		      calcularSaldo();
	  	}).fail(function(data) {
  
		    console.log("ERRO"+data.responseJSON.mensagem);
  
			
	});
};

function calcularSaldo(){
	var receitas = $( "#total_receitas" ).text();
	var despesas = $( "#total_despesas" ).text();
	
	var saldo = receitas - despesas;
	console.log(saldo);
	$("#saldo").text("Saldo R$: "+saldo);
}
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