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

const menuBtn = document.querySelector('.toggle_btn');
const fa_bars = menuBtn.querySelector('.fa-bars');
const fa_times = menuBtn.querySelector('.fa-times');

menuBtn.addEventListener('click', function() {

	
	pageContent.classList.toggle('content_toggle');
	pageHeader.classList.toggle('page_header_display');
	fa_bars.classList.toggle('btn_open');
	fa_times.classList.toggle('btn_close');
});
