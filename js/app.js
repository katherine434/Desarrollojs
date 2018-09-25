
//function Calculadora() {

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


	uno.addEventListener('click', function(){
		if (display.textContent == '0') {
			borrar();
			display.textContent = '1' ;	
		}else{display.textContent = display.textContent + '1' ;}
	})
	dos.addEventListener('click', function(){
		if (display.textContent == '0') {
			borrar();
			display.textContent = '2' ;	
		}else{display.textContent = display.textContent + '2' ;}
	})
	tres.addEventListener('click', function(){
		if (display.textContent == '0') {
			borrar();
			display.textContent = '3' ;	
		}else{display.textContent = display.textContent + '3' ;}
	})
	cuatro.addEventListener('click', function(){
		if (display.textContent == '0') {
			borrar();
			display.textContent = '4' ;	
		}else{display.textContent = display.textContent + '4' ;}
	})
	cinco.addEventListener('click', function(){
		if (display.textContent == '0') {
			borrar();
			display.textContent = '5' ;	
		}else{display.textContent = display.textContent + '5' ;}
	})
	seis.addEventListener('click', function(){
		if (display.textContent == '0') {
			borrar();
			display.textContent = '6' ;	
		}else{display.textContent = display.textContent + '6' ;}
	})
	siete.addEventListener('click', function(){
		if (display.textContent == '0') {
			borrar();
			display.textContent = '7' ;	
		}else{display.textContent = display.textContent + '7' ;}
	})
	ocho.addEventListener('click', function(){
		if (display.textContent == '0') {
			borrar();
			display.textContent = '8' ;	
		}else{display.textContent = display.textContent + '8' ;}
	})
	nueve.addEventListener('click', function(){
		if (display.textContent == '0') {
			borrar();
			display.textContent = '9' ;	
		}else{display.textContent = display.textContent + '9' ;}
	})
	cero.addEventListener('click', function(){
		if (display.textContent == '0') {
			borrar();
			display.textContent = '0' ;	
		}else{display.textContent = display.textContent + '0' ;}
	})

		
	var mas = document.getElementById('mas');
	var menos = document.getElementById('menos');	
	var por = document.getElementById('por');
	var dividido = document.getElementById('dividido');

	var operador1;
	var operador2;
	var operacion;
	var resultado;

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

	var on = document.getElementById('on');
	var sign = document.getElementById('sign');
	var raiz = document.getElementById('raiz');
	var punto = document.getElementById('punto');
	var igual = document.getElementById('igual');

	on.addEventListener('click', function(){
		resetear();
		display.textContent = '0';
	})
	sign.addEventListener('click', function(){
		
		borrar();
	})
	raiz.addEventListener('click', function(){
		
		borrar();
	})
	punto.addEventListener('click', function(){
;		
		if (display.textContent.indexOf(".") == -1) {
			display.textContent = display.textContent + '.' ;	
		}		
		console.log('Ya tiene punto');	
	})
	igual.addEventListener('click', function(){		
		operador2 = display.textContent;
		resultado();
	})

	



	// var resetear = 

	// return {
		
	
	
//};

//Calculadora();


