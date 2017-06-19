var logado = false;

window.onload = function() {
  $( "#homearea" ).css( "display", "block" );
};

function closealert(){
  $( "#emailalert" ).css( "display", "none" );
  $( "#reqemailalert" ).css( "display", "none" );
}
function login(){
  
  var params= {};
  params.email = $( "#email" ).val();
  params.senha= $( "#senha" ).val();

 
  
  //requisicao POST
          $.post( "https://cffbackend.herokuapp.com/login", { email: params.email , senha: params.senha })
              .done(function( data ) {
                      console.log(data);
                      document.cookie = "logado=true";
                      document.cookie = "username="+data.nome;
                      document.cookie = "id="+data.id;
                      document.cookie = "email="+data.email;
                      window.location = "/app.html";
                      $( "#userarea" ).css( "display", "block" );
            
              }).fail(function(data) {
                  
                $( "#emailalert" ).css( "display", "block" );
                $( "#emailalert" ).empty()
                $( "#emailalert" ).append(data.responseJSON.mensagem );
                $( "#emailalert" ).append("<span class ='closebtn' onclick='closealert()' >&times;</span>");
                
                  
              
            });

  
};

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

function recuperar(){
  var email = $( "#reqemail" ).val();
  
  console.log(email);
  
};

function abrirCadastro(){
    $( "#login" ).css( "display", "none" );
    $( "#home" ).css( "display", "none" );
    $( "#recuperar" ).css( "display", "none" );
    $( "#registro" ).css( "display", "block");
};

function abrirRecuperar(){
    $( "#home" ).css( "display", "none" );
    $( "#login" ).css( "display", "none" );
    $( "#registro" ).css( "display", "none");
    $( "#recuperar" ).css( "display", "block");
};

function abrirLogin(){
  $( "#home" ).css( "display", "none" );
    $( "#login" ).css( "display", "block" );
    $( "#registro" ).css( "display", "none");
    $( "#recuperar" ).css( "display", "none");
    $( "#sucesso" ).css( "display", "none");
};