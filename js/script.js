$(function(){

	 var poltronas = [true,false,false,true,true,true,false,false,true,true,
	                  true,false,false,true,true,true,false,false,true,true,
	                  true,false,false,true,true,true,false,false,true,true,
	                  true,false,false,true,true,true,false,false,true,true,
	                  false,false,true,true]


	 carregarPoltronas(poltronas);

   $('.polt').click(function(){
     selecionarPoltrona($(this))
   }).dblclick(function(){
   	 liberarPoltrona($(this));
   });

   $('.j_btn').bind("click",function(){
      
      confirmarPoltrona(poltronas);

   });


});

	function carregarPoltronas(poltronas){

		 var poltrona = $('.polt');

		 for(var cont =0; cont < poltronas.length;cont++){
		 	if(poltronas[cont]){
             $(poltrona[cont]).attr("src","img/cadeira-livre.jpg");
		 	}else{
		 		$(poltrona[cont]).attr("src","img/cadeira-vermelha.jpg");
		 	}
		 	$(poltrona[cont]).attr("id",cont);	
		  }

	}


function selecionarPoltrona(clicada){
     
  var status =  $(clicada).attr("src");
 
  if(status == "img/cadeira-vermelha.jpg"){
  	alert("Cadeira indisponível");
  }else{
 	 $(clicada).attr("src","img/cadeira-selecionada.jpg");

  } 
  
  

}


function liberarPoltrona(clicada){
   
   $(clicada).attr("src","img/cadeira-livre.jpg");
}


function confirmarPoltrona(poltronas){
  var tipo =  "img/cadeira-selecionada.jpg";
  for(var cont = 0; cont < poltronas.length; cont++){
  	  var poltrona = $('.polt');
      
  	var pot = $(poltrona[cont]).attr("src");

    if( pot == tipo){
    	poltronas[cont] = false;
    }
    
  }

  carregarPoltronas(poltronas);

}