// nav-list
const elHamburger = document.getElementById('jsHamburger')
const elBurger = document.getElementById('burger')

elHamburger.onclick = () => {
	burger.classList.toggle('burger-on')
}

// modal
const elModal = document.getElementById('jsModal')
const elModalBtn = document.getElementById('jsModalBtn')

if(localStorage.getItem('_modal')) {
	elModal.classList.add('modal-off')
}

elModalBtn.onclick = () => {
	elModal.classList.add('modal-off')
	localStorage.setItem('_modal', 'done')
}