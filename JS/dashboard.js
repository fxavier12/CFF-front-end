//variaveis globais
var despesaSelecionada = {};
var receitaSelecionada = {};
var receitas = [];
var despesas = [];
//funcoes do menu 
window.onload = function() {
  var logado = getCookie("logado");
  if(logado != "true"){
  	//se o usuario nao estiver logado redireciona para pagina principal
  	window.location = "index.html";
  }


  $( "#mes" ).text("Financas do mes de "+getNameMonth());
  $( "#username" ).text(getCookie("username"));
  $( "#username-perfil" ).text(getCookie("username"));
  $( "#email-perfil" ).text(getCookie("email"));
  $( "#home" ).css( "display", "block" );
  $( "#botao-esconder-despesas").css( "display", "none" );  
  $( "#botao-excluir-despesas").css( "display", "none" );  
  $( "#botao-editar-despesas").css( "display", "none" );  
  $( "#botao-excluir-receitas").css( "display", "none" );  
  $( "#botao-editar-receitas").css( "display", "none" );  
  $( "#botao-esconder-receitas").css( "display", "none" );  
  $( "#botao-desfazer-receitas").css( "display", "none" );  
  $( "#botao-desfazer-despesas").css( "display", "none" );  
  $( "#cad-receita" ).css( "display", "none" ); 
  $( "#cad-despesa" ).css( "display", "none" ); 
  $( "#block" ).css( "display", "none" ); 
  $( "#grafico").css( "display", "none" );  
  $( "#semgrafico").css( "display", "none" );  

  //carregando contas
  loadDespesas();
  loadReceitas();


  

};

//gera o grafico
function gerarGraficoHome(receita,despesa,saldo){
	
	if(!(receita == 0 && despesa == 0 && saldo == 0)){
		$( "#semgrafico").css( "display", "none" );  
		$( "#grafico").css( "display", "block" );  
		//gerando grafico homepage 
	   var options = {
	        responsive:true,
	        scales: {
		    xAxes: [{
		    			display: false
		               
		            }],
		    yAxes: [{
		                gridLines: {
		                    display:true
		                }   
		            }]
		    }
		    };
	    Chart.defaults.global.legend.display = false;

	    var data = {
	        labels: ["Receita", "Despesa", "Saldo"],
	        datasets: [
	            {
	                data: [receita,despesa,saldo],
	                backgroundColor : ['rgba(35, 234, 35,1)','rgba(255, 40, 40,1)','rgba(40, 147, 255,1)']
	            }
	        ]
	    };                

		
		$('#GraficoBarra').remove(); // this is my <canvas> element
	    $('#GraficoBarra-container').prepend("<canvas id='GraficoBarra'></canvas>");
	    var ctx = document.getElementById("GraficoBarra").getContext("2d");
		var myBarChart = new Chart(ctx, {
			type: 'bar',
			data: data,
			options: options
		});
	}else{
		//o usuario nao tem nenhuma conta cadastrada
		 $( "#semgrafico").css( "display", "block" );  

	}
	

}
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
	
        $( "#cad-receita" ).css( "display", "block" ); 
        $( "#block" ).css( "display", "block" ); 

};
function abrirCadastroDespesa(){
        $( "#cad-despesa" ).css( "display", "block" ); 
        $( "#block" ).css( "display", "block" ); 
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

function detalharDespesas(){
	$(".table-row-despesas").css("display","table-row");
	$( "#botao-esconder-despesas").css( "display", "inline-block" );
	$( "#botao-detalhar-despesas").css( "display", "none" );


};

function resumirDespesas(){
	$(".table-row-despesas").css("display","none");
	$( "#botao-esconder-despesas").css( "display", "none" );
	$( "#botao-detalhar-despesas").css( "display", "inline-block" );
	desSelecionarDespesa();
	

};
function excluirReceita(){
	var id = receitaSelecionada.id.textContent;
	var params= {};
	params.id = id;
	params.dono =  getCookie("id");

	//requisicao POST
	$.post( "https://cffbackend.herokuapp.com/excluirconta", { id: params.id, dono: params.dono})
  		.done(function( data ) {
   		     //o objeto foi excluido do banco com sucesso
   		      //atualiza o array local de receitas
   		      for(var i = 0 ; i < receitas.length ;i++){
   		      		if(receitas[i].id == id ){
   		      			if(i == 0 ){
   		      				//inicio do araay 
   		      				receitas.shift();
   		      			}else{
   		      				receitas.splice(i, i);

   		      			}

   		      			desSelecionarReceita();
   		      			atualizarTabelaReceitas();
   		      		}
   		      }
	  	}).fail(function(data) {
  
		    console.log("erro ao excluir "+data.responseJSON.mensagem);
  
			
	});
};

function editarReceita(){
	console.log("editar "+receitaSelecionada.id.textContent );
};

function excluirDespesa(){
	var id = despesaSelecionada.id.textContent;
	var params= {};
	params.id = id;
	params.dono =  getCookie("id");

	//requisicao POST
	$.post( "https://cffbackend.herokuapp.com/excluirconta", { id: params.id, dono: params.dono})
  		.done(function( data ) {
   		      //o objeto foi excluido do banco com sucesso
   		      //atualiza o array local de despesas
   		      for(var i = 0 ; i < despesas.length ;i++){
   		      		if(despesas[i].id == id ){
   		      			if(i == 0 ){
   		      				//inicio do araay 
   		      				despesas.shift();
   		      			}else{
   		      				despesas.splice(i, i);

   		      			}

   		      			desSelecionarDespesa();
   		      			atualizarTabelaDespesas();
   		      		}
   		      }
	  	}).fail(function(data) {
  
		    console.log("erro ao excluir "+data.responseJSON.mensagem);
  
			
	});
};

function editarDespesa(){
	console.log("editar "+despesaSelecionada.id.textContent );
};

function detalharReceitas(){
	$(".table-row-receitas").css("display","table-row");
	$( "#botao-esconder-receitas").css( "display", "inline-block" );
	$( "#botao-detalhar-receitas").css( "display", "none" );
	$( "#botao-editar-despesas").css( "display", "none" );  
    $( "#botao-excluir-despesas").css( "display", "none" );  
    

};

function resumirReceitas(){
	$(".table-row-receitas").css("display","none");
	$( "#botao-esconder-receitas").css( "display", "none" );
	$( "#botao-detalhar-receitas").css( "display", "inline-block" );


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
   		     //salvo no banco com sucesso
  			 //atualiza o array local de receitas
  			 $( "#cad-receita" ).css( "display", "none" ); 
        	 $( "#block" ).css( "display", "none" ); 
        	 detalharReceitas();
        	 desSelecionarReceita();
  			 receitas.push(data);
  			 atualizarTabelaReceitas();
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
  			 //salvo no banco com sucesso
  			 //atualiza o array local de despesas
  			 $( "#cad-despesa" ).css( "display", "none" ); 
        	 $( "#block" ).css( "display", "none" ); 
        	 desSelecionarDespesa();
        	 detalharDespesas();
  			  despesas.push(data);
  			  atualizarTabelaDespesas();
	  	}).fail(function(data) {
  
		    console.log("erro ao cadastrar "+data.responseJSON.mensagem);
  
			
	});

};
function desSelecionarDespesa(){
	var linhas = $("#table_despesas > tbody > tr");	
	for(i = 0 ; i < linhas.length ;i++){
		linhas[i].className = "table-row-despesas" ;
	}
	$( "#botao-editar-despesas").css( "display", "none" );  
    $( "#botao-excluir-despesas").css( "display", "none" ); 
    $( "#botao-desfazer-despesas").css( "display", "none" );
};
function selecionarDespesa(row){
	desSelecionarDespesa();
	despesaSelecionada.id = row.firstChild.firstChild;
	row.className += " selecionado"; 
	$( "#botao-editar-despesas").css( "display", "inline-block" );  
    $( "#botao-excluir-despesas").css( "display", "inline-block" ); 
    $( "#botao-desfazer-despesas").css( "display", "inline-block" ); 
    
};

function desSelecionarReceita(){
	var linhas = $("#table_receitas > tbody > tr");	
	for(i = 0 ; i < linhas.length ;i++){
		linhas[i].className = "table-row-receitas" ;
	}
	$( "#botao-editar-receitas").css( "display", "none" );  
    $( "#botao-excluir-receitas").css( "display", "none" ); 
    $( "#botao-desfazer-receitas").css( "display", "none" );
};
function selecionarReceita(row){
	desSelecionarReceita();
	receitaSelecionada.id = row.firstChild.firstChild;
	row.className += " selecionado"; 
	$( "#botao-editar-receitas").css( "display", "inline-block" );  
    $( "#botao-excluir-receitas").css( "display", "inline-block" ); 
    $( "#botao-desfazer-receitas").css( "display", "inline-block" ); 
    
};

function atualizarTabelaDespesas(){
	$('#table_despesas > tbody').empty();
    var total = 0;
    var data = despesas;
    for(var i = 0 ; i < data.length ;i++){
		  	total += data[i].valor;
		  	$('#table_despesas > tbody').append("<tr class='table-row-despesas' onclick='selecionarDespesa(this)'><td>"+data[i].id+"</td><td>"+data[i].descricao+"</td><td>"+data[i].data+" </td><td>"+data[i].valor+" </td></tr>");
	}

   $( "#total_despesas" ).text(total);
   $( "#home-despesa" ).text("Despesa : "+total);

  calcularSaldo();
};

function atualizarTabelaReceitas(){
	var total = 0;
	var data = receitas;
	 $('#table_receitas > tbody').empty();
	 for(var i = 0 ; i < data.length ;i++){
  		total += data[i].valor;   
		   $('#table_receitas > tbody').append("<tr  class='table-row-receitas' onclick='selecionarReceita(this)' ><td>"+data[i].id+"</td><td>"+data[i].descricao+"</td><td>"+data[i].data+" </td><td>"+data[i].valor+" </td></tr>");
	 }
	  $( "#total_receitas" ).text(total);
	  $( "#home-receita" ).text("Receita : "+total);
	      calcularSaldo();
}


function loadDespesas(){

	var params= {};
	params.id = getCookie("id");
	params.mes = 6;
	//requisicao POST
	$.post( "https://cffbackend.herokuapp.com/getdespesas", { usuario: params.id,mes: params.mes })
  		.done(function( data ) {
   		      despesas = data;
   		      atualizarTabelaDespesas();
   		      resumirDespesas();

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
   		      receitas = data;
   		      atualizarTabelaReceitas();
   		      resumirReceitas();
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
	$( "#home-saldo" ).text("Saldo : "+saldo);
	gerarGraficoHome(receitas,despesas,saldo);
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