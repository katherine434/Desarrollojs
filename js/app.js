
function Calculadora() {

	var uno = document.getElementById('1');
	var dos = document.getElementById('2');
	var tres = document.getElementById('3');
	var cuatro = document.getElementById('4');
	var cinco = document.getElementById('5');
	
	var seis = document.getElementById('6');
	var siete = document.getElementById('7');
	var ocho = document.getElementById('8');
	var nueve = document.getElementById('9');
	var cero = document.getElementById('0');

	var mas = document.getElementById('mas');
	var menos = document.getElementById('menos');	
	var por = document.getElementById('por');
	var dividido = document.getElementById('dividido');

	var on = document.getElementById('on');
	var sign = document.getElementById('sign');
	var raiz = document.getElementById('raiz');
	var punto = document.getElementById('punto');
	var igual = document.getElementById('igual');

	var operador1;
	var operador2;
	var operacion;
	var resultado;


	uno.addEventListener("mousedown",function(){
            uno.setAttribute("style","transform:scale(0.85,0.85)");
        })
    uno.addEventListener("mouseup",function(){
            uno.setAttribute("style","transform:scale(1,1)");
        })


    dos.addEventListener("mousedown",function(){
            dos.setAttribute("style","transform:scale(0.85,0.85)");
        })
    dos.addEventListener("mouseup",function(){
            dos.setAttribute("style","transform:scale(1,1)");
        })


    tres.addEventListener("mousedown",function(){
            tres.setAttribute("style","transform:scale(0.85,0.85)");
        })
    tres.addEventListener("mouseup",function(){
            tres.setAttribute("style","transform:scale(1,1)");
        })


    cuatro.addEventListener("mousedown",function(){
            cuatro.setAttribute("style","transform:scale(0.85,0.85)");
        })
    cuatro.addEventListener("mouseup",function(){
            cuatro.setAttribute("style","transform:scale(1,1)");
        })

    cinco.addEventListener("mousedown",function(){
            cinco.setAttribute("style","transform:scale(0.85,0.85)");
        })
    cinco.addEventListener("mouseup",function(){
            cinco.setAttribute("style","transform:scale(1,1)");
        })


    seis.addEventListener("mousedown",function(){
            seis.setAttribute("style","transform:scale(0.85,0.85)");
        })
    seis.addEventListener("mouseup",function(){
            seis.setAttribute("style","transform:scale(1,1)");
        })


    siete.addEventListener("mousedown",function(){
            siete.setAttribute("style","transform:scale(0.85,0.85)");
        })
    siete.addEventListener("mouseup",function(){
            siete.setAttribute("style","transform:scale(1,1)");
        })


    ocho.addEventListener("mousedown",function(){
            ocho.setAttribute("style","transform:scale(0.85,0.85)");
        })
    ocho.addEventListener("mouseup",function(){
            ocho.setAttribute("style","transform:scale(1,1)");
        })


    nueve.addEventListener("mousedown",function(){
            nueve.setAttribute("style","transform:scale(0.85,0.85)");
        })
    nueve.addEventListener("mouseup",function(){
            nueve.setAttribute("style","transform:scale(1,1)");
        })


    cero.addEventListener("mousedown",function(){
            cero.setAttribute("style","transform:scale(0.85,0.85)");
        })
    cero.addEventListener("mouseup",function(){
            cero.setAttribute("style","transform:scale(1,1)");
        })


 	mas.addEventListener("mousedown",function(){
            mas.setAttribute("style","transform:scale(0.85,0.85)");
        })
    mas.addEventListener("mouseup",function(){
            mas.setAttribute("style","transform:scale(1,1)");
        })


    menos.addEventListener("mousedown",function(){
            menos.setAttribute("style","transform:scale(0.85,0.85)");
        })
    menos.addEventListener("mouseup",function(){
            menos.setAttribute("style","transform:scale(1,1)");
        })


    por.addEventListener("mousedown",function(){
            por.setAttribute("style","transform:scale(0.85,0.85)");
        })
    por.addEventListener("mouseup",function(){
            por.setAttribute("style","transform:scale(1,1)");
        })


    dividido.addEventListener("mousedown",function(){
            dividido.setAttribute("style","transform:scale(0.85,0.85)");
        })
    dividido.addEventListener("mouseup",function(){
            dividido.setAttribute("style","transform:scale(1,1)");
        })


    on.addEventListener("mousedown",function(){
            on.setAttribute("style","transform:scale(0.85,0.85)");
        })
    on.addEventListener("mouseup",function(){
            on.setAttribute("style","transform:scale(1,1)");
        })


 	sign.addEventListener("mousedown",function(){
            sign.setAttribute("style","transform:scale(0.85,0.85)");
        })
    sign.addEventListener("mouseup",function(){
            sign.setAttribute("style","transform:scale(1,1)");
        })


    raiz.addEventListener("mousedown",function(){
            raiz.setAttribute("style","transform:scale(0.85,0.85)");
        })
    raiz.addEventListener("mouseup",function(){
            raiz.setAttribute("style","transform:scale(1,1)");
        })


    punto.addEventListener("mousedown",function(){
            punto.setAttribute("style","transform:scale(0.85,0.85)");
        })
    punto.addEventListener("mouseup",function(){
            punto.setAttribute("style","transform:scale(1,1)");
        })


    igual.addEventListener("mousedown",function(){
            igual.setAttribute("style","transform:scale(0.85,0.85)");
        })
    igual.addEventListener("mouseup",function(){
            igual.setAttribute("style","transform:scale(1,1)");
        })



	uno.addEventListener('click', function(){
		
		if (display.textContent == '0') {
			borrar();
			display.textContent = '1' ;	

		} else if (display.textContent.length <= 7){

			display.textContent = display.textContent + ' 1' ;			
		} 
		else {}
	})

	dos.addEventListener('click', function(){
		
		if (display.textContent == '0') {
			borrar();
			display.textContent = '2' ;

		}else if (display.textContent.length <= 7){
			
			display.textContent = display.textContent + '2' ;
		}
		else {}
	})

	tres.addEventListener('click', function(){
		
		if (display.textContent == '0') {
			borrar();
			display.textContent = '3' ;

		}else if (display.textContent.length <= 7){
			
			display.textContent = display.textContent + '3' ;
		}
		else {}
	})

	cuatro.addEventListener('click', function(){
		
		if (display.textContent == '0') {
			borrar();
			display.textContent = '4' ;

		}else if (display.textContent.length <= 7){
			
			display.textContent = display.textContent + '4' ;
		}
		else {}
	})

	cinco.addEventListener('click', function(){
		
		if (display.textContent == '0') {
			borrar();
			display.textContent = '5' ;

		}else if (display.textContent.length <= 7){
			
			display.textContent = display.textContent + '5' ;
		}
		else {}
	})

	seis.addEventListener('click', function(){
		
		if (display.textContent == '0') {
			borrar();
			display.textContent = '6' ;

		}else if (display.textContent.length <= 7){
			
			display.textContent = display.textContent + '6' ;
		}
		else {}
	})

	siete.addEventListener('click', function(){
		
		if (display.textContent == '0') {
			borrar();
			display.textContent = '7' ;

		}else if (display.textContent.length <= 7){
			
			display.textContent = display.textContent + '7' ;
		}
		else {}
	})

	ocho.addEventListener('click', function(){
		
		if (display.textContent == '0') {
			borrar();
			display.textContent = '8' ;

		}else if (display.textContent.length <= 7){
			
			display.textContent = display.textContent + '8' ;
		}
		else {}
	})

	nueve.addEventListener('click', function(){
		
		if (display.textContent == '0' || igual == true) {
			borrar();
			display.textContent = '9' ;	
		}else if (display.textContent.length <= 7) {

			display.textContent = display.textContent + '9' ;
		}
		else{}
	})

	cero.addEventListener('click', function(){
		
		if (display.textContent == '0') {
			borrar();
			display.textContent = '0' ;	
		}else if(display.textContent.length <= 7){

			display.textContent = display.textContent + '0' ;
		}
		else{}
	})


	mas.addEventListener('click', function(){
		operador1 = display.textContent;
		operacion = '+';
		borrar();
	})

	menos.addEventListener('click', function(){
		operador1 = display.textContent;
		operacion = '-';
		borrar();
	})

	por.addEventListener('click', function(){
		operador1 = display.textContent;
		operacion = '*';
		borrar();		
	})

	dividido.addEventListener('click', function(){
		operador1 = display.textContent;
		operacion = '/';
		borrar();
	})


	var borrar = function(){
		display.textContent = ' ';
	}

	var resetear = function (){
		display.textContent = ' ' ;
		operador1 = 0 ;
		operador2 = 0;
	}

	var resultado = function(){
		var res = 0;

		switch(operacion){
			case '+':
				res = parseFloat(operador1) + parseFloat(operador2) ;
				break;
			case '-':
				res = parseFloat(operador1) - parseFloat(operador2) ;
				break;
			case '*':
				res = parseFloat(operador1) * parseFloat(operador2) ;
				break;
			case '/':
				res = parseFloat(operador1) / parseFloat(operador2) ;
				break;
		}
		display.textContent = res;	
	}
	

	on.addEventListener('click', function(){
		resetear();
		display.textContent = '0';
	})

	sign.addEventListener('click', function(){
		
		if (display.textContent.indexOf("-") == -1 && display.textContent != 0){
			display.textContent = '-' + display.textContent;
		} else {
			cambio = parseFloat(display.textContent) * -1;
			display.textContent = cambio;
		}
	})

	raiz.addEventListener('click', function(){
		
		borrar();
	})

	punto.addEventListener('click', function(){		
		if (display.textContent.indexOf(".") == -1) {
			display.textContent = display.textContent + '.' ;	
		}		
		console.log('Ya tiene punto');	
	})

	igual.addEventListener('click', function(){		
		operador2 = display.textContent;
		resultado();		

		if (display.textContent.length >= 7) {
			borrar()
			display.textContent = 'ERROR';
		} 		
	})
	
};

Calculadora();


