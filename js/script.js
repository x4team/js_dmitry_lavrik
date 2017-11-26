/*
	свойства
	события
	методы




var text = document.querySelector('#text');

text.onclick = function(){
	
	//text.innerHTML = 'ура'; //заменить текст по клику 
	text.innerHTML = 'ура'; //добавить текст по клику 
	text.className = 'test';
	text.style.color = 'red'; //изменить цвет текста по клику
	text.style.fontSize = '30px';
}

*/

var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var images = document.querySelectorAll('#gallery .photos img');
var i = 0;


btn_prev.onclick = function() {
	images[i].className = '';
	i--;

	if (i<0) {
		i = images.length - 1;
	}

	images[i].className = 'showed';

}

btn_next.onclick = function() {
	images[i].className = '';
	i++;

	if (i>=images.length) {
		i = 0;
	}

	images[i].className = 'showed';
}