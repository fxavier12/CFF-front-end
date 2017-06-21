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