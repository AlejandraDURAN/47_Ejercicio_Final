$(document).ready(function() {
	console.log('HTML Listo');

	$('.js-menu').hide();

	$('.js-back').on('click', function() {
		console.log('Regresa a index.html');
		window.location = 'index.html';
	});

	$('.js-show-recipe').on('click', function() {
		console.log('Quite clase make');
		$('.page.recipe').removeClass('make');

		
		$('.js-show-recipe').addClass('active');
		$('.js-show-make').removeClass('active');

	});