
Geral = {
	
	carregar : function() {
        
        /*
         * Redimensiona o centro do site para se adequar as resoluções
         * apartir de 1024 x 768
         */
        var altura  = 0;
        var largura = 0;

        if(window.innerWidth) {
            // Firefox
            altura  = parseInt(window.innerHeight);
            largura = parseInt(window.innerWidth);
        } else {
            // IE
            //altura  = parseInt(document.documentElement.clientHeight);
            //largura = parseInt(document.documentElement.clientWidth);
        }

        var alturaCentro = parseInt(altura - 332);
        if(!Prototype.Browser.IE || window.XMLHttpRequest) {
            $$("div.oeste")[0].style.minHeight = alturaCentro+"px";
            $$("div.centro")[0].style.minHeight = alturaCentro+"px";
            $$("div.leste")[0].style.minHeight = alturaCentro+"px";
        } 
        else {
            //$$("div.oeste")[0].style.height = alturaCentro+"px";
            //$$("div.centro")[0].style.height = alturaCentro+"px";
            //$$("div.leste")[0].style.height = alturaCentro+"px";
        }
		
        
        // Centraliza o site
        //if(largura > 1024) {
        	//margemEsquerda = (largura - 1000) / 2;
        	//$$("div.container")[0].style.marginLeft = margemEsquerda + "px";
        //}


        /*
         * Se tiver classe javascript de página interna, chama o
         * método que carrega os dados iniciais
         */
        try {
            if(Interna) Interna.carregar();
        } catch( e ) {
            //alert(e);
        }

    },
    
    criador : function() {
    	
    	window.open("../criador.html", "ocriador", "menubar=0,resizable=0,width=240,height=350");
    	
    }
	
}
