const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e){
	removeBorder();
	removeShow();
	this.classList.add('tab-border');
	//grab content item from the DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

function removeBorder(){
	tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
	tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for click
tabItems.forEach(item => item.addEventListener('click', selectItem));

