
//exclui a receita do servicor e remove da memoria

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
   		      				window.receitas.shift();
   		      			}else{
   		      				window.receitas.splice(i, i);

   		      			}
   		      			desSelecionarReceita();
   		      			atualizarTabelaReceitas();
   		      		}
   		      }
	  	}).fail(function(data) {
  
		    console.log("erro ao excluir "+data.responseJSON.mensagem);
  
			
	});
};

//cadatra uma receita no servidor e carrega na memoria
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
  			 window.receitas.push(data);
  			 atualizarTabelaReceitas();
	  	}).fail(function(data) {
  
		    console.log("erro ao cadastrar "+data.responseJSON.mensagem);
  
			
	});

};

//atualiza a tabela de receitas 
function atualizarTabelaReceitas(){
	var total = 0;//soma das despesas
	var data = window.receitas; // array de receitas
	 $('#table_receitas > tbody').empty();//limpa a tabela
	 for(var i = 0 ; i < data.length ;i++){//percorre o array
  		total += data[i].valor;   
  		//insere a linha na tabela 
		$('#table_receitas > tbody').append("<tr  class='table-row-receitas' onclick='selecionarReceita(this)' ><td>"+data[i].id+"</td><td>"+data[i].descricao+"</td><td>"+data[i].data+" </td><td>"+data[i].valor+" </td></tr>");
	 }
	 
	 $( "#total_receitas" ).text(total);//atualiza o total 
	
};

//public
var totalReceitas = function (){
	var total = 0;
	for(i=0;i< window.receitas.length;i++){
		total += window.receitas[i].valor;
	}
	return total;
};
//busca as receitas do usuario e atrubui ao array de receitas
function loadReceitas(){
	var params= {};
	params.id = getCookie("id");
	params.mes = 6;
	//inicia a animacao de loading
	$('#loading').css("display","block");
	//requisicao POST
	$.post( "https://cffbackend.herokuapp.com/getreceitas", { usuario: params.id,mes: params.mes })
  		.done(function( data ) {
   		      window.receitas = data;
   		      atualizarTabelaReceitas();
   		      resumirReceitas();
   		      //desativa a animacao
   		      $('#loading').css("display","none");
	  	}).fail(function(data) {
  				//desativa a animacao
   		      $('#loading').css("display","none");
		    console.log("ERRO"+data.responseJSON.mensagem);
  
			
	});
};

//remove a selecao da receita na tabela
function desSelecionarReceita(){
	var linhas = $("#table_receitas > tbody > tr");	
	for(i = 0 ; i < linhas.length ;i++){
		linhas[i].className = "table-row-receitas" ;
	}
	$( "#botao-editar-receitas").css( "display", "none" );  
    $( "#botao-excluir-receitas").css( "display", "none" ); 
    $( "#botao-desfazer-receitas").css( "display", "none" );
};

//seleciona uma linha na tabela de receitas
function selecionarReceita(row){
	desSelecionarReceita();
	receitaSelecionada.id = row.firstChild.firstChild;
	row.className += " selecionado"; 
	$( "#botao-editar-receitas").css( "display", "inline-block" );  
    $( "#botao-excluir-receitas").css( "display", "inline-block" ); 
    $( "#botao-desfazer-receitas").css( "display", "inline-block" ); 
    
};
