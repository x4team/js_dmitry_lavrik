


var item = document.querySelector('.items .item');

item.onclick = activeItem; //ссылка на функцию
	activeItem(); //скобки в конце означают выполнение прямо сейчас
}

function activeItem(){
	this.classList.toggle('item-active');  //переключает классы по клику, если есть класс, то удаляет, если нет, то добавляет
}