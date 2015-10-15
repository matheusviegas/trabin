
Interna = {
	
	carregar : function() {
        
       //if($('buscaDescricao')) $('buscaDescricao').focus();

    },
    
    mudaFundoSolucao : function(t, n, z) {
    	
    	$(t).style.zIndex = z;
    	
    	if(n==1) {
	    	$(t).style.backgroundColor = "#3C5B89";
    	} else {
	    	$(t).style.backgroundColor = "#645F60";
    	}
    }
	
}
