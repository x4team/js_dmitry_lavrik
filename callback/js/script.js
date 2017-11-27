window.onload = function() {


var items = document.querySelectorAll('.items .item');

	for (var i = 0; i < items.length; i++) {
		items[i].onclick = activeItem;
	}

	function activeItem(){
		this.classList.toggle('item-active');  //переключает классы по клику, если есть класс, то удаляет, если нет, то добавляет
	}

	setInterval(activeItem, 500);
}