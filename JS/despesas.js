//carrega todas as despesas do usuario
function loadDespesas(){

	var params= {};
	params.id = getCookie("id");
	params.mes = 6;
	//inicia a animacao de loading
	$('#loading').css("display","block");

	//requisicao POST
	$.post( "https://cffbackend.herokuapp.com/getdespesas", { usuario: params.id,mes: params.mes })
  		.done(function( data ) {
   		      window.despesas = data;
   		      atualizarTabelaDespesas();
   		      resumirDespesas();
   		      //desativa a animacao
   		      $('#loading').css("display","none");
   		      return 0;
	  	}).fail(function(data) {
	  		return 0;
	  		//desativa a animacao
			 $('#loading').css("display","none");
		    console.log("ERRO"+data.responseJSON.mensagem);
  
			
	});
};
var totalDespesas= function (){
	var total = 0 ;
	for(i=0;i< window.despesas.length;i++){
		total += window.despesas[i].valor;
	}
	return total;
};
//remove a despesa do servidor e retira do array
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
   		      				window.despesas.shift();
   		      			}else{
   		      				window.despesas.splice(i, i);

   		      			}

   		      			desSelecionarDespesa();
   		      			atualizarTabelaDespesas();
   		      		}
   		      }

	  	}).fail(function(data) {
  
		    console.log("erro ao excluir "+data.responseJSON.mensagem);
  
			
	});
};

//cadastra a despesa no banco e insere no array
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
        	 console.log(despesas);
  			 window.despesas.push(data);
  			 atualizarTabelaDespesas();
	  	}).fail(function(data) {
  
		    console.log("erro ao cadastrar "+data.responseJSON.mensagem);
  
			
	});

};

//atualiza a tabela de despesas 
function atualizarTabelaDespesas(){
	$('#table_despesas > tbody').empty();
    var total = 0;
    var data = window.despesas;
    for(var i = 0 ; i < data.length ;i++){
		  	total += data[i].valor;
		  	$('#table_despesas > tbody').append("<tr class='table-row-despesas' onclick='selecionarDespesa(this)'><td>"+data[i].id+"</td><td>"+data[i].descricao+"</td><td>"+data[i].data+" </td><td>"+data[i].valor+" </td></tr>");
	}

   $( "#total_despesas" ).text(total);
};


//remove a selecao na tabela de despesas
function desSelecionarDespesa(){
	var linhas = $("#table_despesas > tbody > tr");	
	for(i = 0 ; i < linhas.length ;i++){
		linhas[i].className = "table-row-despesas" ;
	}
	$( "#botao-editar-despesas").css( "display", "none" );  
    $( "#botao-excluir-despesas").css( "display", "none" ); 
    $( "#botao-desfazer-despesas").css( "display", "none" );
};

//seleciona uma despesa na tabela
function selecionarDespesa(row){
	desSelecionarDespesa();
	despesaSelecionada.id = row.firstChild.firstChild;
	row.className += " selecionado"; 
	$( "#botao-editar-despesas").css( "display", "inline-block" );  
    $( "#botao-excluir-despesas").css( "display", "inline-block" ); 
    $( "#botao-desfazer-despesas").css( "display", "inline-block" ); 
    
};