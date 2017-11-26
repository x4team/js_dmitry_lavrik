/*
	свойства
	события
	методы

*/


var text = document.querySelector('#text');

text.onclick = function(){
	
	//text.innerHTML = 'ура'; //заменить текст по клику 
	text.innerHTML += 'ура'; //добавить текст по клику 
	text.className = 'test';
	text.style.color = 'red'; //изменить цвет текста по клику
}