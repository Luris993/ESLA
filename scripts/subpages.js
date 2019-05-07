const pageHeader = document.querySelector('.page_header');
const pageContent = document.querySelector('.content');
const homeButton = pageHeader.querySelector('.nav .home_btn');
const footer = document.querySelector('.page_footer');

const buttons = pageHeader.querySelector('.nav .header_nav_item .header_nav_link');

homeButton.addEventListener('click', function(e) {
	e.preventDefault();
	
	footer.classList.add('animated', 'bounceOutDown');
	
	pageContent.classList.remove('fadeIn');
	pageContent.classList.add('fadeOut');
	
	pageHeader.classList.remove('bounceInLeft');
	pageHeader.classList.add('bounceOutLeft');
	
	pageHeader.addEventListener('animationend', function() {
		window.location = 'index.html';
	});
});
