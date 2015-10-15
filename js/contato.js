
Interna = {
	
	carregar : function() {
        
       if($('nome')) $('nome').focus();

    },
    
    confereCamposObrigatorios : function() {
		var nome  = $("nome").value;
		var email = $("email").value;
		var texto = $("texto").value;
		
		if(nome == "" || email == "" || texto == "")  {
			
			alert("Verifique os campos obrigatórios");
			return false;
			
		} else {
			return true;
		}
	},
    
    mudaCheckbox : function(t) {
		var divBarra 	= $(t).src.split("/");
		var valor = divBarra[divBarra.length-1];
		
		if(valor == "checkbox_true.gif") {
			$("checkbox").value = "false";
			$(t).src = "../images/checkbox_false.gif";
		} else {
			$("checkbox").value = "true";
			$(t).src = "../images/checkbox_true.gif";
		}
			
	}
	
}
