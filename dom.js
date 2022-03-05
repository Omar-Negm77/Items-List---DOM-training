let form = document.getElementById('addForm');
let listItems = document.getElementById('items');
let filter = document.getElementById('filter');

// Add item event
form.addEventListener('submit', addItem);

// remove item event
listItems.addEventListener('click', removeItem);

// Filter items event
filter.addEventListener('keyup', filterItems);

function addItem(e) {
	e.preventDefault();

	let newItem = document.getElementById('item').value;

	let li = document.createElement('li');

	li.className = 'list-group-item';

	li.appendChild(document.createTextNode(newItem));

	let delBtn = document.createElement('button');

	delBtn.className = 'btn btn-danger btn-sm float-right delete';
	li.appendChild(delBtn);
	delBtn.appendChild(document.createTextNode('X'));

	listItems.appendChild(li);
}

function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you sure?!')) {
			let li = e.target.parentElement;
			listItems.removeChild(li);
		}
	}
}

function filterItems(e) {
	let text = e.target.value.toLowerCase();
	let items = document.getElementsByTagName('li');
	Array.from(items).forEach((item) => {
		let itemName = item.firstChild.textContent;
		if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}
