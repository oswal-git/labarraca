const navMenu = document.getElementById('menu');
const navToggle = document.getElementsByClassName('toggle')[0];
const iconMenu = document.getElementsByClassName('fa-stack-icon-1')[0];
const iconX = document.getElementsByClassName('fa-stack-icon-2')[0];

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('visible');

	if ( navMenu.classList.contains('visible')) {
		navToggle.setAttribute('aria-label', 'Abrir menú');
		iconX.style.display = 'none';
		iconMenu.style.display = 'block';
	} else {
		navToggle.setAttribute('aria-label', 'Cerrar menú');
		iconX.style.display = 'block';
		iconMenu.style.display = 'none';
	}

})