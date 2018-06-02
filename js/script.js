
window.onload = function(e){

	var audio = document.getElementById('bg-sound');			// audio = <audio> 
	audio.volume = 0.1;											//volume da musica
	audio.autoplay = true; 										// autoplay, n funciona corretamente no chrome
	audio.load();		


	var t_td = document.getElementsByTagName('td');				// referencia todas as tds
	var len = t_td.length;				
	var toggle = 1;						//repetição

	for(var i=1, j =1; i<t_td.length;i+=4){						// i = referencia as tds com o nome das musicas, por isso i+=4
		t_td[i].className += ' music_name_td';					// adiciona uma classe para edição de cursor no css
		t_td[i].className += ' c' + "" + (j) + "";				// adiciona uma classe 'cJ' onde J é a posição de cada música na lista
		t_td[i].setAttribute('onclick', 'play('+ j + '); select(' + i + ',' + len + ',' + toggle +')');		//atribui-se uma função de play e valor que referencia a posição da musica na lista
		j++;
	}

	
}


function play(c){					// função que toca a musica 

	var audio = document.getElementById('bg-sound');		// oi necessario criar outra variavel
	audio.setAttribute('src', 'music/' + c + '.mp3');		// c foi passado por referencia no HTML, que foi passado por js

}

function select(j, len, toggle){
	var select = document.getElementsByTagName('td');


	for(var g=1; g<len;g+=4){
		select[g].classList.remove('selected');			//remove todas as classes com o nome de selected
	}


	if (select[j].classList.contains('selected')){
    	select[j].classList.remove('selected');	
	} else{
		select[j].classList.add('selected');
	}
		
	
}
																		