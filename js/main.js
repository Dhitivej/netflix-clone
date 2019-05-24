const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach(item => item.addEventListener('click', selectItem));

function selectItem(evt) {
	removeShow();
	removeBorder();
	// Add border to current tab
	this.classList.add('tab-border');

	console.log(this.id);
	// Grab content item (using js trickery)
	console.log(`#${this.id}-content`);
	// translates tab tab-#-content

	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
	tabContentItems.forEach(item => item.classList.remove('show'));
}
