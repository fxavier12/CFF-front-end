//variaveis globais 
window.receitaSelecionada = {};
window.receitas = new Array();
window.despesaSelecionada = {};
window.despesas = new Array();


//funcoes do menu 
window.onload = function() {
  var logado = getCookie("logado");


  if(logado != "true"){
  	//se o usuario nao estiver logado redireciona para pagina principal
  	window.location = "index.html";
  }

  $( "#username" ).text(getCookie("username"));
 
  
  loadDespesas();
  loadReceitas();
  //aguarda a requisao terminar 
  aguardar("loading",callback);

};
var callback = function(){
	$.get("APP/home.html", function(data){
	  	$("#content").empty();
	    $("#content").append(data);
    });
}
var aguardar = function(id,funcao){
	value = $("#"+id).css("display");
  	if(value == "block"){
  		setTimeout(function(){
	  		aguardar(id,funcao);
  		}, 600);
  	}else{
  		funcao();
  	}
};

function abrirCadastroReceita(){
        $( "#block" ).css( "display", "block" ); 

        $.get("APP/cadastroreceita.html", function(data){
	  	$("#block").empty();
	    $("#block").append(data);
  });

};
function abrirCadastroDespesa(){
        $( "#block" ).css( "display", "block" ); 
        $.get("APP/cadastrodespesa.html", function(data){
		  	$("#block").empty();
		    $("#block").append(data);
		   });
};

function abrirHome(){
	 $.get("APP/home.html", function(data){
	  	$("#content").empty();
	    $("#content").append(data);
  });
};

function abrirPerfil(){
	$.get("APP/perfil.html", function(data){
	  	$("#content").empty();
	    $("#content").append(data);
  });
};

function abrirContas(){
	$.get("APP/contas.html", function(data){
	  	$("#content").empty();
	    $("#content").append(data);
  });
};

function abrirRelatorios(){
	$.get("APP/relatorio.html", function(data){
	  	$("#content").empty();
	    $("#content").append(data);
  });
};

function abrirMetas(){
	$.get("APP/metas.html", function(data){
	  	$("#content").empty();
	    $("#content").append(data);
  });
		
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


function editarReceita(){
	abrirCadastroReceita();
};


function editarDespesa(){
	abrirCadastroDespesa();
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






