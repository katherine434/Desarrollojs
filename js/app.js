/*
1
Desarrolla la funcionalidad de la calculadora utilizando el patrón módulo, es decir que todo el código debe estar englobado en un objeto llamado Calculadora. Utiliza un método de inicialización que se encargue de ejecutar todas las otras funciones que se deben iniciar con la ejecución del programa.


2 Crea los métodos que consideres necesarios para hacer que la tecla presionada reduzca su tamaño y vuelva a su forma original al soltarla
*/



var Calculadora = function () {

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
		display.textContent = display.textContent + '1' ;
	})
	dos.addEventListener('click', function(){
		display.textContent = display.textContent + '2' ;
	})
	tres.addEventListener('click', function(){
		display.textContent = display.textContent + '3' ;
	})
	cuatro.addEventListener('click', function(){
		display.textContent = display.textContent + '4' ;
	})
	cinco.addEventListener('click', function(){
		display.textContent = display.textContent + '5' ;
	})
	seis.addEventListener('click', function(){
		display.textContent = display.textContent + '6' ;
	})
	siete.addEventListener('click', function(){
		display.textContent = display.textContent + '7' ;
	})
	ocho.addEventListener('click', function(){
		display.textContent = display.textContent + '8' ;
	})
	nueve.addEventListener('click', function(){
		display.textContent = display.textContent + '9' ;
	})
	cero.addEventListener('click', function(){
		display.textContent = display.textContent + '0' ;
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

	var on = document.getElementById('on');
	var sign = document.getElementById('sign');
	var raiz = document.getElementById('raiz');
	var punto = document.getElementById('punto');
	var igual = document.getElementById('igual');

	on.addEventListener('click', function(){
		resetear();
	})
	sign.addEventListener('click', function(){
		//operando = display.textContent;
		//operacion = '';
		borrar();
	})
	raiz.addEventListener('click', function(){
		//operando = display.textContent;
		//operacion = '';
		borrar();
	})
	punto.addEventListener('click', function(){		
		//if () {}
		display.textContent = display.textContent + '.' 
	})
	igual.addEventListener('click', function(){		
		operador2 = display.textContent;
		resultado();
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



	// var resetear = 

	// return {
		
	
	
};

Calculadora();


