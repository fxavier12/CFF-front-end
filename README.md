# CFF-front-end


Requisicao post com ajax 


function cadastrar(){
  var params= {};
  params.nome = $( "#cadnome" ).val();
  params.email = $( "#cademail" ).val();
  params.senha= $( "#cadsenha" ).val();
  
  //requisicao POST
					$.post( "https://cffbackend.herokuapp.com/cadastro", { nome: params.nome, email: params.email , senha: params.senha })
				  		.done(function( data ) {
				   		       $( "#registro" ).css( "display", "none" );
              $( "#sucesso" ).css( "display", "block" );
            
					  	}).fail(function(data) {
                  
                  $( "#reqemailalert" ).css( "display", "block" );
                  $( "#reqemailalert" ).empty()
                  $( "#reqemailalert" ).append(data.responseJSON.mensagem );
                  $( "#reqemailalert" ).append("<span class ='closebtn' onclick='closealert()' >&times;</span>");
                  
							
		  			});
  
};


exemplo de utilizacao 

https://codepen.io/fxavier/pen/ryRpRX
