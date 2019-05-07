const elementHeader = document.querySelector('#main_header');

const aboutButton = elementHeader.querySelector('.nav .about_btn');
const recommendationsButton = elementHeader.querySelector('.nav .recommendations_btn');
const teamButton = elementHeader.querySelector('.nav .team_btn');
const footer = document.querySelector('.page_footer');



aboutButton.addEventListener('click', function(e) { 
	e.preventDefault();
	
	const href = 'about.html';
	
	footer.classList.remove('bounceInUp');
	footer.classList.add('bounceOutDown');
	
	elementHeader.classList.remove('bounceInLeft');
	elementHeader.classList.add('bounceOutLeft');
	
	elementHeader.addEventListener('animationend', function() {
		window.location = href;
	})
});

recommendationsButton.addEventListener('click', function(e) { 
	e.preventDefault();
	
	const href = 'recommendation.html';
	
	footer.classList.remove('bounceInUp');
	footer.classList.add('bounceOutDown');
	
	elementHeader.classList.remove('bounceInLeft');
	elementHeader.classList.add('bounceOutLeft');
	
	elementHeader.addEventListener('animationend', function() {
		window.location = href;
	})
});

teamButton.addEventListener('click', function(e) { 
	e.preventDefault();
	
	const href = 'team.html';
	
	footer.classList.remove('bounceInUp');
	footer.classList.add('bounceOutDown');	
	
	elementHeader.classList.remove('bounceInLeft');
	elementHeader.classList.add('bounceOutLeft');
	
	elementHeader.addEventListener('animationend', function() {
		window.location = href;
	})
});